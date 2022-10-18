import 'styled-components/native'
import { theme } from '../global/styles/theme'

const { colors, fonts } = theme

interface IThemeInterface {
  dark: boolean
  colors: typeof colors
  fonts: typeof fonts
}

declare module 'styled-components/native' {
  export interface DefaultTheme extends IThemeInterface {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends IThemeInterface {}
}
