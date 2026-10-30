import { type Env, type Scene, INK, MOSS, rand } from './types';

// A few large jellyfish drifting up through dark water, drawn the way the
// daoho.dev koi are: on a grid of cells, each with a shade and a character.
// Bells pulse (contract, push, glide), tentacles trail behind on a chain, the
// rims glow moss, and each push leaves a faint ring in the water. The cursor
// nudges them away and makes them glow; a click makes nearby ones pulse.
// On reading pages (env.focus) they steer into the side margins and fade
// wherever they pass behind the text column.

const C = 10; // cell size in px
const WARM = '227,201,168';
const BG = '21,22,20';

interface Tentacle {
	/** where it hangs from, across the bell: -1 (left rim) to 1 (right rim) */
	at: number;
	points: { x: number; y: number }[];
	seg: number;
}

interface Jelly {
	x: number;
	y: number;
	r: number;
	angle: number;
	speed: number;
	period: number;
	clock: number;
	glow: number;
	seed: number;
	tentacles: Tentacle[];
	arms: Tentacle[];
}

interface Ring {
	x: number;
	y: number;
	r: number;
	life: number;
}

interface Cell {
	a: number;
	color: string;
	ch: string;
	/** false draws just the glyph, for delicate parts like tentacles */
	fill: boolean;
}

/** Stable pseudo-random per body cell, so characters stick to the body. */
const hash = (a: number, b: number, s: number) => {
	const n = Math.sin(a * 127.1 + b * 311.7 + s * 74.7) * 43758.5453;
	return n - Math.floor(n);
};

export function jellyfish(env: Env): Scene {
	const { ctx, pointer } = env;
	let jellies: Jelly[] = [];
	const rings: Ring[] = [];
	let cols = 0;
	let cells = new Map<number, Cell>();

	/** Bell squash for a jelly right now: 0 relaxed, 1 fully contracted. */
	const contraction = (j: Jelly) => {
		const p = j.clock / j.period;
		return p < 0.3 ? Math.sin((p / 0.3) * Math.PI) : 0;
	};

	/** Local body coords (u across, v along, v<0 is the front) to world. */
	const toWorld = (j: Jelly, u: number, v: number) => {
		const s = Math.sin(j.angle);
		const c = Math.cos(j.angle);
		return { x: j.x + u * c - v * s, y: j.y + u * s + v * c };
	};

	function chain(j: Jelly, at: number, n: number, seg: number): Tentacle {
		const a = toWorld(j, at * j.r * 0.9, j.r * 0.12);
		return { at, seg, points: Array.from({ length: n }, (_, i) => ({ x: a.x, y: a.y + i * seg })) };
	}

	/** Where a returning jelly enters: away from the others, in a margin when reading. */
	function spawnX() {
		const f = env.focus;
		const candidates = Array.from({ length: 8 }, () => {
			if (f && f.left > 60) return Math.random() < 0.5 ? rand(0, f.left) : rand(f.right, env.w);
			return rand(env.w * 0.05, env.w * 0.95);
		});
		const room = (x: number) => Math.min(...jellies.map((o) => Math.abs(o.x - x)));
		return candidates.reduce((best, x) => (room(x) > room(best) ? x : best));
	}

	function spawn(x: number, y: number): Jelly {
		const j: Jelly = {
			x,
			y,
			r: rand(56, 96),
			angle: rand(-0.35, 0.35),
			speed: 0.2,
			period: rand(200, 300),
			clock: rand(0, 300),
			glow: 0,
			seed: rand(0, 100),
			tentacles: [],
			arms: []
		};
		const count = Math.round(rand(6, 9));
		for (let i = 0; i < count; i++) {
			j.tentacles.push(chain(j, -0.95 + (1.9 * i) / (count - 1), Math.round(rand(26, 46) * (j.r / 60)), 6));
		}
		for (const at of [-0.3, -0.1, 0.1, 0.3]) j.arms.push(chain(j, at, Math.round(j.r / 5), 5));
		return j;
	}

	function put(x: number, y: number, a: number, color: string, ch: string, fill = true) {
		const cx = Math.floor(x / C);
		const cy = Math.floor(y / C);
		if (cx < 0 || cy < 0 || cx >= cols || y > env.h + C) return;
		const key = cy * cols + cx;
		const prev = cells.get(key);
		if (!prev || (prev.a < a && (fill || !prev.fill))) cells.set(key, { a, color, ch, fill });
	}

	function stepChain(j: Jelly, t: Tentacle, time: number, sway: number) {
		const anchor = toWorld(j, t.at * j.r * 0.9 * (1 - contraction(j) * 0.18), j.r * 0.12);
		t.points[0] = anchor;
		// "down" for this jelly is along its body axis, away from where it swims
		const down = { x: -Math.sin(j.angle), y: Math.cos(j.angle) };
		for (let i = 1; i < t.points.length; i++) {
			const prev = t.points[i - 1];
			const p = t.points[i];
			const wave = Math.sin(time * 0.0016 + i * 0.45 + j.seed + t.at * 3) * sway * (i / t.points.length);
			let dx = p.x - prev.x + down.x * 0.4 + down.y * wave;
			let dy = p.y - prev.y + down.y * 0.4 - down.x * wave;
			const d = Math.hypot(dx, dy) || 1;
			dx = (dx / d) * t.seg;
			dy = (dy / d) * t.seg;
			p.x = prev.x + dx;
			p.y = prev.y + dy;
		}
	}

	return {
		resize() {
			cols = Math.ceil(env.w / C);
			const count = Math.max(3, Math.min(6, Math.round((env.w * env.h) / 260000)));
			while (jellies.length < count) {
				const i = jellies.length;
				jellies.push(spawn(((i + 0.5) / count) * env.w + rand(-60, 60), rand(env.h * 0.15, env.h * 0.95)));
			}
			jellies = jellies.slice(0, count);
		},
		step(dt, time) {
			for (const j of jellies) {
				const before = j.clock;
				j.clock = (j.clock + dt) % j.period;
				if (j.clock < before) rings.push({ ...toWorld(j, 0, j.r * 0.2), r: j.r * 0.6, life: 1 });

				// pulse: a push during the squeeze, then a long glide
				j.speed += contraction(j) * 0.035 * dt;
				j.speed += (0.12 - j.speed) * 0.012 * dt;
				j.angle += Math.sin(time * 0.00025 + j.seed) * 0.0012 * dt;
				j.angle = Math.max(-0.55, Math.min(0.55, j.angle));

				const dx = j.x - pointer.x;
				const dy = j.y - pointer.y;
				const d = Math.hypot(dx, dy) || 1;
				const reach = j.r * 3.2;
				if (d < reach) {
					const k = 1 - d / reach;
					j.x += (dx / d) * k * 0.5 * dt;
					j.y += (dy / d) * k * 0.3 * dt;
					j.glow = Math.max(j.glow, k);
				}
				j.glow *= Math.pow(0.985, dt);

				// on reading pages, drift out of the text column toward the nearer margin
				const f = env.focus;
				if (f && j.x > f.left - j.r * 0.6 && j.x < f.right + j.r * 0.6) {
					const toLeft = j.x - (f.left - j.r * 0.6);
					const toRight = f.right + j.r * 0.6 - j.x;
					j.x += (toLeft < toRight ? -1 : 1) * 0.35 * dt;
				}

				const ox = j.x;
				const oy = j.y;
				j.x += Math.sin(j.angle) * j.speed * dt;
				j.y -= Math.cos(j.angle) * j.speed * dt;
				// once the whole body, tentacles included, has left the top, come
				// straight back in from below with the bell already peeking in
				const tail = Math.max(...j.tentacles.map((t) => t.points[t.points.length - 1].y));
				if (j.y < -j.r && tail < 0) {
					j.y = env.h + j.r * 0.5;
					j.x = spawnX();
				}
				if (j.x < -j.r * 3) j.x = env.w + j.r * 2;
				if (j.x > env.w + j.r * 3) j.x = -j.r * 2;
				const jump = Math.abs(j.x - ox) > j.r || Math.abs(j.y - oy) > j.r;
				for (const t of [...j.tentacles, ...j.arms]) {
					if (jump) for (const p of t.points) (p.x += j.x - ox), (p.y += j.y - oy);
					stepChain(j, t, time, t.seg === 5 ? 4 : 3.2);
				}
			}
			for (let i = rings.length - 1; i >= 0; i--) {
				rings[i].r += 0.5 * dt;
				rings[i].life -= 0.012 * dt;
				if (rings[i].life <= 0) rings.splice(i, 1);
			}
		},
		draw() {
			cells = new Map();

			for (const ring of rings) {
				const steps = Math.ceil((ring.r * Math.PI) / C);
				for (let s = 0; s <= steps; s++) {
					// the lower half of a ring, pushed out behind the bell
					const a = (s / steps) * Math.PI;
					put(ring.x + Math.cos(a) * ring.r, ring.y + Math.sin(a) * ring.r * 0.45, ring.life * 0.12, INK, s % 2 ? '-' : '.', false);
				}
			}

			for (const j of jellies) {
				const squeeze = contraction(j);
				const glow = 0.25 + j.glow * 0.35;

				for (const t of j.tentacles) {
					t.points.forEach((p, i) => {
						const fade = 1 - i / t.points.length;
						put(p.x, p.y, 0.05 + fade * 0.2, INK, i % 4 === 0 ? ':' : '.', false);
					});
				}
				for (const t of j.arms) {
					t.points.forEach((p, i) => {
						const fade = 1 - i / t.points.length;
						put(p.x, p.y, 0.08 + fade * 0.12, WARM, hash(i, t.at, j.seed) > 0.5 ? 'S' : '%');
					});
				}

				// the bell: half an ellipse, squashed narrower and taller on each push
				const bw = j.r * (1 - squeeze * 0.16);
				const bh = j.r * 0.62 * (1 + squeeze * 0.14);
				const reach = Math.ceil((j.r * 1.3) / C);
				const cx = Math.floor(j.x / C);
				const cy = Math.floor(j.y / C);
				const s = Math.sin(-j.angle);
				const c = Math.cos(-j.angle);
				for (let gy = cy - reach; gy <= cy + reach; gy++) {
					for (let gx = cx - reach; gx <= cx + reach; gx++) {
						const wx = gx * C + C / 2 - j.x;
						const wy = gy * C + C / 2 - j.y;
						const u = wx * c - wy * s;
						const v = wx * s + wy * c;
						const e = (u / bw) ** 2 + (Math.min(v, 0) / bh) ** 2;
						// a scalloped hem along the open bottom of the bell
						const hem = C * (0.4 + 0.6 * Math.abs(Math.sin((u / bw) * Math.PI * 3)));
						if (e > 1 || v > hem) continue;
						const r = Math.sqrt(e);
						const theta = Math.atan2(v, u);
						const h = hash(Math.round(u / C), Math.round(v / C), j.seed);
						if (r > 0.8 || v > 0) {
							put(gx * C, gy * C, glow, MOSS, h > 0.5 ? 'S' : 'X');
						} else if (r > 0.28 && r < 0.58 && Math.abs(Math.cos(2 * theta)) > 0.55) {
							put(gx * C, gy * C, 0.2 + j.glow * 0.1, WARM, 'o');
						} else {
							put(gx * C, gy * C, 0.1 + (1 - r) * 0.1 + j.glow * 0.1, INK, h > 0.66 ? '%' : h > 0.33 ? 'x' : ':');
						}
					}
				}
			}

			ctx.clearRect(0, 0, env.w, env.h);
			ctx.font = `${C - 3}px ${env.font}`;
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
			const f = env.focus;
			for (const [key, cell] of cells) {
				const x = (key % cols) * C;
				const y = Math.floor(key / cols) * C;
				const a = f && x > f.left - 16 && x < f.right + 16 ? cell.a * 0.3 : cell.a;
				if (cell.fill) {
					ctx.fillStyle = `rgba(${cell.color},${a})`;
					ctx.fillRect(x + 1, y + 1, C - 2, C - 2);
				}
				// like the koi: dark glyphs on bright cells, light glyphs on faint ones
				ctx.fillStyle =
					cell.fill && a > 0.18 ? `rgba(${BG},${Math.min(0.55, a * 1.4)})` : `rgba(${cell.color},${Math.min(0.4, a * 2.2)})`;
				ctx.fillText(cell.ch, x + C / 2, y + C / 2 + 0.5);
			}
		},
		click(x, y) {
			for (const j of jellies) {
				if (Math.hypot(j.x - x, j.y - y) < j.r * 4) j.clock = 0;
			}
		}
	};
}
