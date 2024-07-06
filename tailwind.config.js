export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px", // Styles apply from 640px upwards
        md: "768px", // Styles apply from 768px upwards
        lg: "1024px", // Styles apply from 1024px upwards
        xl: "1280px", // Styles apply from 1280px upwards
      },
    },
  },
  plugins: [],
};
