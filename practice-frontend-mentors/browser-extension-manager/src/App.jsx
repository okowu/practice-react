import { useContext, useEffect } from 'react'
import ExtensionList from './components/extensions/ExtensionList'
import AppHeader from './ui/AppHeader'
import MainLayout from './ui/MainLayout'
import { ThemeContext } from './context/theme-context'

function App() {

  const { active, theme } = useContext(ThemeContext)

  const lightGradient = theme.light.linearGradient
  const darkGradient = theme.dark.linearGradient

  useEffect(() => {
    const gradient = active === 'light' ? lightGradient : darkGradient
    document.body.style.background = gradient
  }, [active])

  return (
    <MainLayout>
      <AppHeader />
      <ExtensionList />
    </MainLayout>
  )
}

export default App
