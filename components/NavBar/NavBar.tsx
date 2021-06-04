import React from 'react'
import * as S from './styles'

export const Navbar: React.FC = ({ ...rest }) => (
	<S.NavBar {...rest}>
		<S.Row>
			<S.Logo>Logo</S.Logo>
			<S.Navigation>
				<ul>
					<li>
						<a href="#">Item 1</a>
					</li>
					<li>
						<a href="#">Item 2</a>
					</li>
					<li>
						<a href="#">Item 3</a>
					</li>
				</ul>
			</S.Navigation>
		</S.Row>
	</S.NavBar>
)
export default Navbar
