/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            transitionTimingFunction: {
                "mb-sig": "cubic-bezier(.17,.67,.28,1)",
                "mb-sig-2": "cubic-bezier(.2,.8,.2,1)",
                "mb-phi": "cubic-bezier(.0426,.6146,.5158,1.0298)",
            },
            colors: {
                tealx: "#2dd4bf",
            },
        },
    },
    plugins: [],
};
