import styled, { css } from 'styled-components'
import Container from '@components/Container'

export const NavBar = styled.header`
	${({ theme }) => css`
		padding: ${theme.spacing.m} 0;
		background-color: ${theme.colors.primary.main};
	`}
`

export const Logo = styled.div`
	flex: 0 1 auto;
`

export const Row = styled(Container)`
	display: flex;
	align-items: center;
	justify-content: space-between;

	&:hover ${Logo} {
		color: ${({ theme }) => theme.colors.primary.light};
	}
`

export const Navigation = styled.nav`
	flex: 0 1 auto;

	ul {
		display: flex;
		list-style: none;
		gap: ${({ theme }) => theme.spacing.m};
		padding: 0;

		li a {
			color: ${({ theme }) => theme.colors.primary.text};

			&:hover {
				color: black;
			}
		}
	}
`
