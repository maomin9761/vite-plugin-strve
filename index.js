import pkg from 'fs-extra';
const { readFileSync } = pkg;

export default function strve(options = {}) {
	return {
		name: 'vite-plugin-strve',
		enforce: 'pre',
		transform(code, id) {
			if (id.endsWith('.strve')) {
				const templateStr = readFileSync(id, 'utf-8');
				return {
					code: `export default ${JSON.stringify(templateStr)}`,
				};
			}
		},
	};
}
