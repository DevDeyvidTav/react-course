import { NavMobile } from './components/NavMobile/NavMobile'
import { NavPC } from './components/NavPC/nav_PC'
import { Home_PC } from './sections/HomePc/Home_PC'
import { HomeMobile } from './sections/Home_mobile.tsx/HomeMobile'
import { WhyBuy } from './sections/whybuy/WhyBuy'
import GlobalStyles from './styles/GlobalStyles'

export function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <NavPC />
      <NavMobile/>
      <Home_PC/>
      <HomeMobile/>
      <WhyBuy/>
    </div>
  )
}
