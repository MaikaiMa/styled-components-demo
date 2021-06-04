import { Grid, GridProps } from './grid'
import { Breakpoints, BreakpointsProps } from './breakpoints'
import { Spacing, SpacingProps } from './spacing'
import { Typography, TypographyProps } from './typograpgy'
import { Colors, DarkColors, ColorsProps } from './colors'
import globalCss from './globalCss'

export interface CustomThemeProps {
	name: string
	grid: GridProps
	breakpoints: BreakpointsProps
	spacing: SpacingProps
	typography: TypographyProps
	colors: ColorsProps
}

export const Theme: CustomThemeProps = {
	name: 'light',
	grid: Grid,
	breakpoints: Breakpoints,
	spacing: Spacing,
	typography: Typography,
	colors: Colors
}

export const DarkTheme: CustomThemeProps = {
	name: 'dark',
	grid: Grid,
	breakpoints: Breakpoints,
	spacing: Spacing,
	typography: Typography,
	colors: DarkColors
}

export { globalCss, Grid, Breakpoints, Spacing, Typography, Colors, DarkColors }
