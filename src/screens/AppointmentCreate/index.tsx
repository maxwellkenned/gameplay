import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import { Background } from '../../components/Background'
import { CategorySelect } from '../../components/CategorySelect'
import { Header } from '../../components/Header'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'
import { GuildIcon } from '../../components/GuildIcon'

export function AppointmentCreate() {
  const [category, setCategory] = useState('')
  return (
    <Background>
      <Header title="Agenda partida" />

      <Text
        style={[
          styles.label,
          { marginLeft: 24, marginTop: 36, marginBottom: 18 }
        ]}
      >
        Categoria
      </Text>
      <CategorySelect
        hasCheckbox
        setCategory={setCategory}
        categorySelected={category}
      />

      <View style={styles.form}>
        <RectButton>
          <View style={styles.select}>
            {
              // <View style={styles.image} />
              <GuildIcon />
            }

            <View style={styles.selectBody}>
              <Text style={styles.label}>Selecione um servidor</Text>
            </View>

            <Feather
              name="chevron-right"
              color={theme.colors.heading}
              size={18}
            />
          </View>
        </RectButton>
      </View>
    </Background>
  )
}
