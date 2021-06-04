import { css } from 'styled-components'
import { Styles } from './typograpgy'

export const globalCss = css`
	* {
		scroll-behavior: smooth;
	}

	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	html,
	body {
		padding: 0;
		margin: 0;
		min-height: 100%;
	}

	html {
		font-family: sans-serif, 112.5%/1.45em georgia, serif;
		text-size-adjust: 100%;
		box-sizing: border-box;
		overflow-y: scroll;
	}

	body {
		margin: 0;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: ${({ theme }) => theme.colors.background.text};
		background-color: ${({ theme }) => theme.colors.background.main};
		font-family: sans-serif, georgia, serif;
		font-weight: normal;
		word-wrap: break-word;
		font-kerning: normal;
		font-feature-settings: 'kern', 'liga', 'clig', 'calt';
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin-top: 0;
	}

	a {
		outline: none;
	}

	h1 {
		${Styles.h1}
	}

	h2 {
		${Styles.h2}
	}

	h3 {
		${Styles.h3}
	}

	h4 {
		${Styles.h4}
	}

	h5 {
		${Styles.h5}
	}

	h6 {
		${Styles.h6}
	}

	p {
		${Styles.body}
	}

	small {
		${Styles.small}
	}

	label {
		${Styles.label}
	}
`

export default globalCss
