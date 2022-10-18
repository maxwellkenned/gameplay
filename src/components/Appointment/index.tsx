import React from 'react'
import { Text, View } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { GuildIcon } from '../GuildIcon'

import PlayerSvg from '../../assets/player.svg'
import CalendarSvg from '../../assets/calendar.svg'
import { categories } from '../../utils/categories'
import { theme } from '../../global/styles/theme'
import * as S from './styles'

export type GuildProps = {
  id: string
  name: string
  icon: any
  owner: boolean
}

export type AppointmentProps = {
  id: string
  guild: GuildProps
  category: string
  date: string
  description: string
}

type Props = RectButtonProps & {
  data: AppointmentProps
}

export function Appointment({ data, ...rest }: Props) {
  const [category] = categories.filter(item => item.id === data.category)
  const { owner } = data.guild
  const { primary, on } = theme.colors

  return (
    <RectButton {...rest}>
      <S.Container>
        <GuildIcon />

        <S.Content>
          <S.Header>
            <S.Title>{data.guild.name}</S.Title>

            <S.Category>{category.title}</S.Category>
          </S.Header>
          <S.Footer>
            <S.DateInfo>
              <CalendarSvg />

              <S.Date>{data.date}</S.Date>
            </S.DateInfo>

            <S.PlayerInfo>
              <PlayerSvg fill={owner ? primary : on} />

              <S.Player owner={owner}>
                {owner ? 'Anfitrião' : 'Visitante'}
              </S.Player>
            </S.PlayerInfo>
          </S.Footer>
        </S.Content>
      </S.Container>
    </RectButton>
  )
}
