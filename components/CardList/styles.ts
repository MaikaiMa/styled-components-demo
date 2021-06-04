import styled from 'styled-components'
import Container from '@components/Container'
import { Card } from '@components/Card/styles'

export const List = styled(Container)`
	display: flex;
	flex-wrap: wrap;
	gap: ${({ theme }) => theme.spacing.m};

	${Card} {
		flex: 1 1 calc(33.3333% - ${({ theme }) => theme.spacing.m});
		max-width: calc(33.3333% - ${({ theme }) => theme.spacing.m});
	}
`
