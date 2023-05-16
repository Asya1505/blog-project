import { Link, Route, Routes } from "react-router-dom"
import { Suspense } from 'react'
import './styles/index.scss'
import { classNames } from "shared/lib/classNames/classNames"
import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { useTheme } from "app/providers/ThemeProvider"
import { Navbar } from "widgets/Nawbar"


const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage />} />
          <Route path={'/'} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App