import styled from 'styled-components'
import CardList from '@components/CardList'
import { Card } from '@components/Card/styles'

export const HomeCardList = styled(CardList)`
	padding: ${(props) => props.theme.spacing.xl} 0;

	${Card} {
		&:nth-child(5) {
			background-color: ${(props) => props.theme.colors.secondary.light};
			color: ${(props) => props.theme.colors.secondary.text};

			a {
				color: ${({ theme }) => theme.colors.primary.main};

				&:hover {
					color: ${({ theme }) => theme.colors.primary.light};
				}

				&:active,
				&:visited {
					color: ${({ theme }) => theme.colors.primary.light};
				}

				&:focus::before {
					border-color: ${({ theme }) => theme.colors.primary.main};
				}
			}
		}
	}
`
