module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',   // Include everything in src folder
    './app/**/*.{js,ts,jsx,tsx}',   // Include the app directory if you're using Next.js app router
    './components/**/*.{js,ts,jsx,tsx}', // Include components directory
    './pages/**/*.{js,ts,jsx,tsx}', // Include pages directory
    './public/**/*.{html}', // Ensure public directory is scanned for any HTML files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
