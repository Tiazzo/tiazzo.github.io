import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', 'ui-sans-serif', 'system-ui'],
            }
        },
    },
    plugins: [daisyui],
    daisyui: {
        themes: ['light', 'dark'],
        darkTheme: 'light',
    }
};
