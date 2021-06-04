import React from 'react'
import { HiMoon, HiSun } from 'react-icons/hi'

import { useThemeContext } from '@context/ThemeContext'
import { DarkTheme, Theme } from '@theme/index'

import * as S from './styles'

export const ThemeSwitcher: React.FC = () => {
	const { theme, setTheme } = useThemeContext()

	const onClick = () => {
		setTheme(theme.name === 'light' ? DarkTheme : Theme)
	}

	return (
		<S.Button size={50} color={theme.colors.background.light} onClick={onClick}>
			{theme.name === 'light' ? <HiMoon /> : <HiSun />}
		</S.Button>
	)
}

export default ThemeSwitcher
