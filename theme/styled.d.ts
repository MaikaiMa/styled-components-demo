import {} from 'styled-components'
import { CustomThemeProps } from 'theme/index'

declare module 'styled-components' {
	export interface DefaultTheme extends CustomThemeProps {}
}
