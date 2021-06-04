import React, { HTMLAttributes } from 'react'
import { Card, CardProps } from '@components/Card'

import * as S from './styles'

export interface CardListProps extends HTMLAttributes<HTMLDivElement> {
	items: CardProps[]
}

export const CardList: React.FC<CardListProps> = ({ items, ...rest }) => (
	<S.List {...rest}>
		{items.map((item) => (
			<Card {...item} />
		))}
	</S.List>
)

export default CardList
