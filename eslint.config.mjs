import next from "eslint-config-next";
import prettier from "eslint-config-prettier/flat";

const eslintConfig = [
  {
    ignores: [".next/**", "node_modules/**", "next-env.d.ts"],
  },
  ...next,
  prettier,
];

export default eslintConfig;
