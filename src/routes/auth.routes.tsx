import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { theme } from '../global/styles/theme'

import { Home } from '../screens/Home'
import { SignIn } from '../screens/SignIn'
import { AppointmentDetails } from '../screens/AppointmentDetails'
import { AppointmentCreate } from '../screens/AppointmentCreate'

const { Navigator, Screen } = createStackNavigator()

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: theme.colors.secondary100 }
      }}
    >
      <Screen name="SignIn" component={SignIn}></Screen>
      <Screen name="Home" component={Home}></Screen>
      <Screen name="AppointmentDetails" component={AppointmentDetails}></Screen>
      <Screen name="AppointmentCreate" component={AppointmentCreate}></Screen>
    </Navigator>
  )
}
