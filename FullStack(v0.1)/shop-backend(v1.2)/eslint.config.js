import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      // Это сообщает линтеру, что мы используем глобальные переменные Node.js
      globals: {
        ...globals.node, 
      },
    },
    rules: {
      // Здесь можно настроить правила, например, сделать console просто предупреждением:
      "no-console": "off", 
    },
  },
];
