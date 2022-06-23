/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        main: {
          "blue" : "#56A7F1",
        },
        faded: {
          "blue": "rgba(39, 109, 173, 0.45)",
        }
      },
      backgroundImage: {
        "football-field" : "url('/football-field.jpg')",
        "founder" : "url('/founder.jpg')",
        "graduation" : "url('/graduation.jpg')",
        "kids-playing" : "url('/kids-playing.jpg')",
        "pool" : "url('/pool.jpg')",
        "school-award" : "url('/school-award.jpg')",
        "school-board" : "url('/school-board.jpg')",
        "school-building" : "url('/school-building.jpg')",
      }
    },
  },
  plugins: [],
}
