import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        receita: '#008300',
        despesa: '#e34948',
        alerta: '#eda100',
      },
    },
  },
  plugins: [],
}
export default config
