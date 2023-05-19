import './styles/index.scss'
import { classNames } from "shared/lib/classNames/classNames"
import { useTheme } from "app/providers/ThemeProvider"
import { Navbar } from "widgets/Nawbar"
import { AppRouter } from "./providers/router"
import { Sidebar } from "widgets/Sidebar"


const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className='content-page'>
        <Sidebar />
        <AppRouter/>
      </div>

    </div>
  )
}

export default App