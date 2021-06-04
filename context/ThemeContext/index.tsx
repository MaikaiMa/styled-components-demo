import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react'
import { Theme, CustomThemeProps } from '@theme/index'

export type ThemeContent = {
	theme: CustomThemeProps
	setTheme: Dispatch<SetStateAction<CustomThemeProps>>
}

export const ThemeContext = createContext<ThemeContent>({
	theme: Theme,
	setTheme: () => {}
})

export const ThemeContextProvider: React.FC = ({ children }) => {
	const [theme, setTheme] = useState<CustomThemeProps>(Theme)
	return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export const useThemeContext = () => useContext(ThemeContext)
