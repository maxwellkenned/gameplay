import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`

export const Content = styled.View`
  flex: 1;
`

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title700};
  color: ${({ theme }) => theme.colors.heading};
  font-size: 18px;
`

export const Category = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title700};
  color: ${({ theme }) => theme.colors.heading};
  font-size: 18px;
`

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

export const DateInfo = styled.View`
  flex-direction: row;
  align-items: center;
`

export const PlayerInfo = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Date = styled.Text`
  margin-left: 7px;
  font-family: ${({ theme }) => theme.fonts.text500};
  color: ${({ theme }) => theme.colors.highlight};
  font-size: 13px;
`

export const Player = styled.Text<{ owner: boolean }>`
  margin-left: 7px;
  font-family: ${({ theme }) => theme.fonts.text500};
  color: ${({ theme, owner }) =>
    owner ? theme.colors.primary : theme.colors.on};
  font-size: 13px;
`
