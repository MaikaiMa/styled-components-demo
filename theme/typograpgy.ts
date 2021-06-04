import { Breakpoints } from './breakpoints'

export interface SizesProps {
	small: number
	p: number
	label: number
	h6: number
	h5: number
	h4: number
	h3: number
	h2: number
	h1: number
}

export interface StylesProps {
	h1: string
	h2: string
	h3: string
	h4: string
	h5: string
	h6: string
	body: string
	small: string
	label: string
	screenreader: string
}

export interface TypographyProps {
	sizes: SizesProps
	sizesMobile: SizesProps
	styles: StylesProps
}

export const Sizes: SizesProps = {
	small: 14 / 16,
	p: 16 / 16,
	label: 18 / 16,
	h6: 24 / 18,
	h5: 32 / 18,
	h4: 40 / 18,
	h3: 48 / 18,
	h2: 56 / 18,
	h1: 72 / 18
}

export const SizesMobile: SizesProps = {
	small: 14 / 16,
	p: 16 / 16,
	label: 16 / 16,
	h6: 20 / 18,
	h5: 32 / 18,
	h4: 32 / 18,
	h3: 36 / 18,
	h2: 44 / 18,
	h1: 48 / 18
}

export const Styles: StylesProps = {
	h1: `
		font-size: ${SizesMobile.h1}rem;
		line-height: 1.2em;
		font-weight: bold;

		@media (min-width: ${Breakpoints.m}) {
			font-size: ${Sizes.h1}rem;
		}
	`,

	h2: `
		font-size: ${SizesMobile.h5}rem;
		line-height: 1.2em;
		font-weight: bold;

		@media (min-width: ${Breakpoints.m}) {
			font-size: ${Sizes.h5}rem;
		}
	`,

	h3: `
		font-size: ${SizesMobile.h3}rem;
		line-height: 1.2em;
		font-weight: bold;

		@media (min-width: ${Breakpoints.m}) {
			font-size: ${Sizes.h5}rem;
		}
	`,

	h4: `
		font-size: ${SizesMobile.h4}rem;
		line-height: 1.4em;
		font-weight: bold;

		@media (min-width: ${Breakpoints.m}) {
			font-size: ${Sizes.h5}rem;
		}
	`,

	h5: `
		font-size: ${SizesMobile.h5}rem;
		line-height: 1.4em;
		font-weight: bold;

		@media (min-width: ${Breakpoints.m}) {
			font-size: ${Sizes.h5}rem;
		}
	`,

	h6: `
		font-size: ${SizesMobile.h6}rem;
		line-height: 1.4em;
		font-weight: bold;

		@media (min-width: ${Breakpoints.m}) {
			font-size: ${Sizes.h6}rem;
		}
	`,

	body: `
		font-size: ${SizesMobile.p}rem;
		line-height: 1.6em;
		font-weight: normal;

		@media (min-width: ${Breakpoints.m}) {
			font-size: ${Sizes.p}rem;
		}
	`,

	small: `
		font-size: ${SizesMobile.small}rem;
		line-height: 1.6em;

		@media (min-width: ${Breakpoints.m}) {
			font-size: ${Sizes.small}rem;
		}
	`,

	label: `
		font-size: ${SizesMobile.label}rem;
		line-height: 1.6em;

		@media (min-width: ${Breakpoints.m}) {
			font-size: ${Sizes.label}rem;
		}
	`,

	screenreader: `
		border: 0;
		clip: rect(0 0 0 0);
		height: 1px;
		margin: -1px;
		overflow: hidden;
		position: absolute;
		width: 1px;
	`
}

export const Typography: TypographyProps = {
	sizes: Sizes,
	sizesMobile: SizesMobile,
	styles: Styles
}
