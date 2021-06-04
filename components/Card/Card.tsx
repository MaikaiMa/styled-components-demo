import { Styles } from '@theme/typograpgy'
import React, { HTMLAttributes } from 'react'

import * as S from './styles'

interface BaseCardProps extends HTMLAttributes<HTMLDivElement> {
	title: string
	description?: string
	image?: string
}

interface CardWithoutButtonProps extends BaseCardProps {
	href?: never
	buttonText?: never
}

interface CardWithButtonProps extends BaseCardProps {
	href: string
	buttonText: string | JSX.Element | JSX.Element[]
}

export type CardProps = CardWithoutButtonProps | CardWithButtonProps

export const Card: React.FC<CardProps> = ({ title, description, image, buttonText, href, ...rest }) => (
	<S.Card {...rest}>
		{image && <img src={image} alt={title} />}
		<h3>{title}</h3>
		{description && <p>{description}</p>}
		{href && <a href={href}>{buttonText}</a>}
	</S.Card>
)

export default Card
