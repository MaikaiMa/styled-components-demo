import styled, { css } from 'styled-components'

export interface ButtonProps {
	size: number
	color: string
}

export const Button = styled.button<ButtonProps>`
	${({ theme, size, color }) => css`
		cursor: pointer;
		position: fixed;
		bottom: ${theme.spacing.m};
		right: ${theme.spacing.m};
		display: flex;
		align-items: center;
		justify-content: center;
		width: ${size}px;
		height: ${size}px;
		line-height: ${size}px;
		font-size: ${size * 0.6}px;
		border: none;
		border-radius: 50%;
		background-color: ${color};
		color: ${theme.colors.background.text};
	`}
`
