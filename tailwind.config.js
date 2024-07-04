//  @type {import('tailwindcss').Config}
// eslint-disable-next-line no-undef

module.exports = {
  content: [
    "./src/**/*.{html,js}", // Adjust to your project's structure
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  purge: {
    enabled: true,
    content: [
      "./src/**/*.{html,js}", // Adjust to your project's structure
    ],
  },
};
