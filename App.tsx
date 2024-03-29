import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'react-native'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold
} from '@expo-google-fonts/rajdhani'
import { ThemeProvider } from 'styled-components/native'

import { Background } from './src/components/Background'

import { Routes } from './src/routes'
import { theme } from './src/global/styles/theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Background>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Routes />
      </Background>
    </ThemeProvider>
  )
}
