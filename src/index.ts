import pkg from 'fs-extra';

const { readFileSync } = pkg;

export function strve() {
	return {
		name: 'vite-plugin-strve',
		enforce: 'pre',
		transform(code: string, id: string) {
			if (id.endsWith('.strve')) {
				const templateStr = readFileSync(id, 'utf-8');
				return {
					code: `export default ${JSON.stringify(templateStr)}`,
				};
			}
		},
	};
}
