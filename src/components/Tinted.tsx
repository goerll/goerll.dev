// Prose with a few phrases lit up like a neuron-activation viewer.
// Plain strings render as-is; { t, a } renders t with a moss tint of alpha a.
export type Part = string | { t: string; a: number };

export function Tinted({ parts }: { parts: Part[] }) {
	return (
		<>
			{parts.map((part, i) =>
				typeof part === 'string' ? (
					part
				) : (
					<span key={i} className="tint" style={{ '--a': part.a } as React.CSSProperties}>
						{part.t}
					</span>
				)
			)}
		</>
	);
}
