export interface ColorsProps {
	background: ColorList
	primary: ColorList
	secondary: ColorList
}

export interface ColorList {
	dark: string
	main: string
	light: string
	text: string
}

export const Colors: ColorsProps = {
	background: {
		dark: '#ddd',
		main: '#eee',
		light: '#fff',
		text: '#333'
	},
	primary: {
		dark: '#ff8c42',
		main: '#fcaf58',
		light: '#f9Cf84',
		text: '#523023'
	},
	secondary: {
		dark: '#26a195',
		main: '#2ec4b6',
		light: '#7ad9d0',
		text: '#1f2d3d'
	}
}

export const DarkColors: ColorsProps = {
	background: {
		dark: '#000',
		main: '#333',
		light: '#666',
		text: '#fff'
	},
	primary: {
		dark: '#5C3218',
		main: '#9C6C36',
		light: '#826C45',
		text: '#523023'
	},
	secondary: {
		dark: '#1A6E65',
		main: '#26a195',
		light: '#5FB0A8',
		text: '#1f2d3d'
	}
}
