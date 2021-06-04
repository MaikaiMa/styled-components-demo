import styled from 'styled-components'


export const ButtonGroup = styled.div`
    color: red;
`

export const Card = styled.div`
	padding: ${({ theme }) => theme.spacing.s};
	background-color: ${({ theme }) => theme.colors.background.light};
	border-radius: 4px;

	> * + * {
		margin-top: ${(props) => props.theme.spacing.m};
	}

	h3 {
		margin-bottom: 0;
	}

	img {
		display: block;
		height: 200px;
		width: 100%;
		object-fit: cover;
	}

	a {
		position: relative;
		display: inline-block;
		color: ${({ theme }) => theme.colors.secondary.main};

		&:hover {
			color: ${({ theme }) => theme.colors.secondary.light};
		}

		&:active,
		&:visited {
			color: ${({ theme }) => theme.colors.secondary.light};
		}

		&:focus::before {
			content: '';
			position: absolute;
			top: -5px;
			right: -5px;
			bottom: -5px;
			left: -5px;
			border: 1px dotted ${({ theme }) => theme.colors.secondary.main};
		}
	}
`


