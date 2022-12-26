/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            gridTemplateColumns: {
                new: 'repeat(auto-fill ,minmax(210px,1fr))',
            },
            transitionProperty: {
                height: 'height',
            },
        },
    },
    plugins: [],
}
