import eslint from "@eslint/js";
import tslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";

export default tslint.config(
        eslint.configs.recommended,
        tslint.configs.strict,
        tslint.configs.stylistic,
        stylistic.configs["recommended-flat"],
        {
          rules: {
            // 行末带分号
            "semi": ["error", "always"],
            // 禁止使用console
            "no-console": "error",
            // 优先使用字符串模版
            "prefer-template": "error",
            // 允许只包含静态属性的Class，如：DTO Class
            "@typescript-eslint/no-extraneous-class": "off",
            // 允许同时使用type和interface定义类型
            "@typescript-eslint/consistent-type-definitions": "off",
            // typescript已检查，lint不再重复检查
            "@typescript-eslint/no-unused-vars": "off",
            // 禁用行末带分号(基本规则中已启用)
            "@stylistic/semi": ["error", "always"],
            // 强制使用双引号
            "@stylistic/quotes": ["error", "double"],
            // 不检查末尾逗号
            "@stylistic/comma-dangle": "off",
            // 忽略行末注释多空格
            "@stylistic/no-multi-spaces": ["error", { ignoreEOLComments: true }],
            "@stylistic/brace-style": ["error", "1tbs"],
            // 箭头函数，必要时才要求括号包裹
            "@stylistic/arrow-parens": ["error", "as-needed"],
            "@stylistic/template-curly-spacing": ["warn", "always"],
            "@stylistic/member-delimiter-style": ["error", {
              "multiline": {
                "delimiter": "semi",
                "requireLast": true
              },
              "singleline": {
                "delimiter": "semi",
                "requireLast": false
              },
              "multilineDetection": "brackets"
            }
            ]
          },
        }
);
