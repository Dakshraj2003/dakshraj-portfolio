// module.exports = {
//   content: [
//     "./pages/**/*.{js,jsx}",
//     "./components/**/*.{js,jsx}"
//   ],
//   theme: {
//     extend: {
//       colors: {
//         bg: "#071029",
//         card: "#0b1220",
//         accent: "#06b6d4"
//       }
//     }
//   },
//   plugins: []
// };

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./pages/**/*.{js,jsx,ts,tsx}",
//     "./components/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         bg: "#071029",
//         card: "#0b1220",
//         accent: "#06b6d4",
//       },
//     },
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",  // add if using /app directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

