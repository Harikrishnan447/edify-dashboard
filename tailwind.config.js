module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: "#ee1f47", //red
                secondary: "#43dfa8", //green
                black: {
                    100: "#0000", //pure black
                    200: "#2C2C2C", //text active
                    300: "#35375E",
                },
                gray: {
                    100: "#F5F5FB", //bg grey
                    200: "#A2A2C2", //text inactive
                }
            },
            textColor: theme => ({
                ...theme('colors'),
            }),
            fontFamily: {
                poppins: ["Poppins", "sans-seriff"]
            },
            backgroundColor: theme => ({
                ...theme('colors'),
            }),
            borderColor: theme => ({
                ...theme('colors'),
            })
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}