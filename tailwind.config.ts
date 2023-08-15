import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontSize: {
                sm: ['0.875rem', '1.6rem']
            },
        },
    },
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/theming/themes")["[data-theme=light]"],
                    "primary": "#1b61ff",
                    "primary-content": "#ffffff",
                    "secondary": "#99adff"
                },
                dark: {
                    ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
                    "primary": "#1b61ff",
                    "secondary": "#99adff",
                    "base-content": "#ffffff"
                }
            },
        ],
    },
    plugins: [require("daisyui")],
}
export default config
