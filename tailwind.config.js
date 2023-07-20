/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      dark: 'class', 
      extend: {
        backgroundColor: {
          
        },
        colors: {
        },
      },
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
      // require('@tailwindcss/aspect-ratio'),
      // require('@tailwindcss/container-queries'),
    ]
}