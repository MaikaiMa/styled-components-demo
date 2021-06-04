import NavBar from '@components/NavBar'
import ThemeSwitcher from '@components/ThemeSwitcher'
import { dummyList } from '@components/CardList'

import * as S from './styles'

const Home: React.FC = () => (
	<>
		<NavBar />
		<ThemeSwitcher />
		<S.HomeCardList items={dummyList} />
	</>
)

export default Home
