'use strict';

var pkg = require('fs-extra');

const { readFileSync } = pkg;

function strve() {
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

module.exports = strve;