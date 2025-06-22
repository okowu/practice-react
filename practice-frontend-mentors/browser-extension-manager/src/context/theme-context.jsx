import { createContext, useReducer } from "react";
import { Icons } from '../components/Icons'

export const ThemeContext = createContext({
    toggleTheme: () => { },
    active: "",
    theme: {}
})

function themeReducer(state, action) {

    if (action.type === 'TOGGLE_THEME') {
        return {
            ...state,
            active: state.active === 'light' ? 'dark' : 'light'
        }
    }

    return state
}

export default function ThemeContextProvider({ children }) {

    const [themeState, themeDispatch] = useReducer(themeReducer, {
        active: "light",
        theme: {
            light: {
                linearGradient: "linear-gradient(180deg, #EBF2FC 0%, #EEFBF9 100%)",
                themeIcon: Icons.Moon
            },
            dark: {
                linearGradient: "linear-gradient(180deg, #04091B 0%, #091540 100%)",
                themeIcon: Icons.Sun
            }
        }
    })

    function handleToggleTheme() {
        themeDispatch({
            type: 'TOGGLE_THEME'
        })
    }

    const contextValue = {
        toggleTheme: handleToggleTheme,
        active: themeState.active,
        theme: themeState.theme
    }

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )

}