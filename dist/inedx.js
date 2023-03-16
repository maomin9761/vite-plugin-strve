"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const { readFileSync } = fs_extra_1.default;
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
exports.default = strve;
