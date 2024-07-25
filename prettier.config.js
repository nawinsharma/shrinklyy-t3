/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  arrowParens: 'avoid',
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
}

export default config
