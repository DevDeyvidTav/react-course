import { NavPC } from './components/NavPC/nav_PC'
import { Home_PC } from './sections/HomePc/Home_PC'
import GlobalStyles from './styles/GlobalStyles'

export function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <NavPC />
      <Home_PC/>
    </div>
  )
}
