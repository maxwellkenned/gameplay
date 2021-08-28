import React from 'react'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'

import { AuthRoutes } from './auth.routes'
import { theme } from '../global/styles/theme'

const myTheme = {
  ...DefaultTheme,
  ...theme,
  colors: {
    ...DefaultTheme.colors,
    ...theme.colors,
    background: 'transparent'
  }
}

export function Routes() {
  return (
    <NavigationContainer theme={myTheme}>
      <AuthRoutes />
    </NavigationContainer>
  )
}
