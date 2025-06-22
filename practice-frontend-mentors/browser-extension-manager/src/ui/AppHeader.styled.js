import styled from "styled-components"
import Logo from '../assets/logo.svg?react'

export const StyledLogo = styled(Logo)`

    g > path {
        fill: var(${props => props.theme === 'light' ? '--red-700' : '--red-400'});
    }

    path {
        fill: ${props => props.theme === 'light' ? 'var(--neutral-900)' : '#FFFFFF'};
    }

`

export const Header = styled.header`

    @media (min-width: 320px) {
        border-radius: var(--radius-20);

        display: grid;
        grid-template-columns: 1fr;
        grid-auto-flow: column;

        align-items: center;

        margin-bottom: 52.5px;

        background: var(${props => props.theme === 'light' ? '--neutral-0' : '--neutral-800'});
        padding: 16.5px var(--spacing-200);

        box-shadow: ${props => props.theme === 'light' ? `0 0 0 1px var(--neutral-200),
            0 2px 3px 0 #D9E5F4` : 'none'};
    }

    @media (min-width: 768px) {
        margin-bottom: var(--spacing-800);
    }
}
`

export const Button = styled.button`
    border: none;
    border-radius: var(--radius-12);

    padding: var(--spacing-175);
    cursor: pointer;

    background: var(${props => props.theme === 'light' ? '--neutral-100' : '--neutral-700'});

    &:focus {
        box-shadow: 0 0 0 2px var(${props => props.theme === 'light' ? '--neutral-0' : '--neutral-800'}),
            0 0 0 4px var(--red-400);
        border-radius: var(--radius-12);
    }

    &:hover {
        background: var(${props => props.theme === 'light' ? '--neutral-300' : '--neutral-600'});
    }
`