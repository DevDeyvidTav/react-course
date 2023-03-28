import { NavMobile } from './components/NavMobile/NavMobile'
import { NavPC } from './components/NavPC/nav_PC'
import { About } from './sections/about/About'
import { Home_PC } from './sections/HomePc/Home_PC'
import { HomeMobile } from './sections/Home_mobile/HomeMobile'
import { Metodology } from './sections/metodology/Metodology'
import { Planes } from './sections/Planes/Planes'
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
      <Metodology/>
      <About/>
      <Planes/>
    </div>
  )
}
