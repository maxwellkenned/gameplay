import React from 'react'

import * as S from './styles'
import { theme } from '../../global/styles/theme'

type Props = {
  children: React.ReactNode
}

export function Background({ children }: Props) {
  const { secondary80, secondary100 } = theme.colors

  return (
    <S.Container colors={[secondary80, secondary100]}>{children}</S.Container>
  )
}
