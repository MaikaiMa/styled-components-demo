import React from 'react'
import * as S from './styles'

export const Navbar: React.FC = ({ children, ...rest }) => <S.Container {...rest}>{children}</S.Container>

export default Navbar
