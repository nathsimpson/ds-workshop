import { Highlight } from '../Highlight';

export function H1(props) {
	return (
		<h1>
			<Highlight
				look="grad3"
				css={{
					fontFamily: 'var(--font-brand)',
					fontWeight: 900,
					fontSize: '4rem',
					marginBottom: '0.5rem',
					'& a': {
						color: 'inherit',
					},
				}}
				{...props}
			/>
		</h1>
	);
}

export function H2(props) {
	return (
		<h2>
			<Highlight
				look="grad3"
				css={{
					fontFamily: 'var(--font-brand)',
					fontWeight: 900,
					fontSize: '3rem',
					marginBottom: '0.5rem',
					'& a': {
						color: 'inherit',
					},
				}}
				{...props}
			/>
		</h2>
	);
}

export function H3(props) {
	return (
		<h3>
			<Highlight
				look="grad3"
				css={{
					fontFamily: 'var(--font-brand)',
					fontWeight: 900,
					fontSize: '2.25rem',
					marginBottom: '0.5rem',
					'& a': {
						color: 'inherit',
					},
				}}
				{...props}
			/>
		</h3>
	);
}

export function H4(props) {
	return (
		<h4>
			<Highlight
				look="grad3"
				css={{
					fontFamily: 'var(--font-brand)',
					fontWeight: 900,
					fontSize: '1.875rem',
					marginBottom: '0.5rem',
					'& a': {
						color: 'inherit',
					},
				}}
				{...props}
			/>
		</h4>
	);
}

export function H5(props) {
	return (
		<h5>
			<Highlight
				look="grad3"
				css={{
					fontFamily: 'var(--font-brand)',
					fontWeight: 900,
					fontSize: '1.5rem',
					marginBottom: '0.5rem',
					'& a': {
						color: 'inherit',
					},
				}}
				{...props}
			/>
		</h5>
	);
}

export function H6(props) {
	return (
		<h6>
			<Highlight
				look="grad3"
				css={{
					fontFamily: 'var(--font-brand)',
					fontWeight: 900,
					fontSize: '1rem',
					marginBottom: '0.5rem',
					'& a': {
						color: 'inherit',
					},
				}}
				{...props}
			/>
		</h6>
	);
}
