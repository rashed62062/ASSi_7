import daisyui  from './node_modules/daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/img/bg-shadow.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [
    [daisyui],
  ],
}

