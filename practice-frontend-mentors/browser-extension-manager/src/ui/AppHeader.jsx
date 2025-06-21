import { useContext } from 'react'
import { ThemeContext } from '../context/theme-context'
import { StyledLogo, Header, Button } from './AppHeader.styled'

function AppHeader() {

    const { toggleTheme, active, theme } = useContext(ThemeContext)

    const Icon = theme[active].themeIcon

    return (
        <Header theme={active}>
            <StyledLogo theme={active} />
            <Button theme={active} onClick={toggleTheme}>
                <Icon />
            </Button>
        </Header>
    );
}

export default AppHeader;