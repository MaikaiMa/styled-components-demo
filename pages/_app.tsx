import { useState } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Normalize } from 'styled-normalize'

import { Theme } from '@theme/index'
import { globalCss } from '@theme/index'
import { ThemeContext } from '@context/ThemeContext'

const GlobalStyles = createGlobalStyle`${globalCss}`

const DemoApp = ({ Component, pageProps }: AppProps) => {
	const [theme, setTheme] = useState(Theme)

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<ThemeProvider theme={theme}>
				<Normalize />
				<GlobalStyles />

				<Component {...pageProps} />
			</ThemeProvider>
		</ThemeContext.Provider>
	)
}

export default DemoApp
