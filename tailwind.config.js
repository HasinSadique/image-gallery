/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
        screens: {
            xs: "200px",
            sm: "640px",
            md: "800px",
            lg: "1340px",
            xl: "1670px",
        },
    },
    plugins: [],
};