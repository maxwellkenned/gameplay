import React from 'react'
import { useTheme } from '@react-navigation/native'

import * as S from './styles'

type Props = {
  urlImage: string
}

export function Avatar({ urlImage }: Props) {
  const {
    colors: { secondary50, secondary70 }
  } = useTheme()

  return (
    <S.Container colors={[secondary50, secondary70]}>
      <S.Avatar source={{ uri: urlImage }} />
    </S.Container>
  )
}
