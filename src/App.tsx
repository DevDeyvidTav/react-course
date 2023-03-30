import { NavMobile } from './components/NavMobile/NavMobile'
import { NavPC } from './components/NavPC/nav_PC'
import { WhatssAppButton } from './components/whatsapp-button'
import { About } from './sections/about/About'
import { About_Mob } from './sections/about/mobile'
import { Footer } from './sections/footer/Footer'
import { Home_PC } from './sections/HomePc/Home_PC'
import { HomeMobile } from './sections/Home_mobile/HomeMobile'
import { Metodology } from './sections/metodology/Metodology'
import { Planes } from './sections/Planes/Planes'
import { WhyBuy } from './sections/whybuy/WhyBuy'
import GlobalStyles from './styles/GlobalStyles'

export function App() {
  return (
    <div
    style={
      {
        maxWidth: "100%",
        width: "100vw",
        overflow: "hidden"
      }
    }
    className="App">
      <GlobalStyles/>
      <WhatssAppButton/>
      <NavPC />
      <NavMobile/>
      <Home_PC/>
      <HomeMobile/>
      <WhyBuy/>
      <Metodology/>
      <About/>
      <About_Mob/>
      <Planes/>
      <Footer/>
    </div>
  )
}
