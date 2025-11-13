import base from "./configs/eslint.base.config.js";
import stylistic from "./configs/eslint.stylistic.config.js";
import typescript from "./configs/eslint.typescript.config.js";

export default [
    ...base,
    ...stylistic,
    ...typescript,
];
