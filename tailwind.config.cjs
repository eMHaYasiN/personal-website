/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
	daisyui: {
		themes: [
			{
				yasin: {
					"primary":          "#64ffda",
					"primary-content":  "#0a192f",
					"secondary":        "#8892b0",
					"accent":           "#64ffda",
					"neutral":          "#1d3461",
					"base-100":         "#0a192f",
					"base-200":         "#112240",
					"base-300":         "#1d3461",
					"base-content":     "#ccd6f6",
					"info":             "#64ffda",
					"success":          "#64ffda",
					"warning":          "#f6c90e",
					"error":            "#ff6b6b",
				},
			},
		],
		logs: false,
	}
}
