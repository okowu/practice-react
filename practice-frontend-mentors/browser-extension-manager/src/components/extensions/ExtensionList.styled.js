import styled from 'styled-components'

export const Header = styled.header`

    /* Mobile */
    @media (min-width: 320px) {
        display: grid;
        grid-gap: var(--spacing-300);
        grid-template-columns: 1fr;
        justify-items: center;

        margin-bottom: 52.5px;
    }

    /* Tablet */
    @media (min-width: 768px) {
        grid-gap: var(--spacing-600);
        grid-auto-flow: column;

        justify-items: baseline;
        align-items: center;

        margin-bottom: var(--spacing-400);
    }
`

export const Title = styled.h2`

    /* Mobile */
    @media (min-width: 320px) {
        margin: 0;
        color: ${props => props.theme === 'light' ? 'var(--neutral-900)' : 'var(--neutral-0)'};
    }


    /* Tablet */
    @media (min-width: 768px) and (max-width: 1024px) {
        margin: 6px;
    }
`

export const FiltersContainer = styled.div`

    /* Mobile */
    @media (min-width: 320px) {
        display: grid;
        grid-gap: var(--spacing-150);
        grid-auto-flow: column;
    }

    /* Tablet */
    @media (min-width: 768px) and (max-width: 1024px) {
        padding: 0;
    }
`

export const FilterButton = styled.button`
    cursor: pointer;
    padding: 8px 20px 10px 20px;

    color: var(${props => props.theme === 'light' ? '--neutral-900' : '--neutral-0'});
    background: var(${props => props.theme === 'light' ? '--neutral-0' : '--neutral-700'});

    border-radius: var(--radius-full);
    border: ${props => props.theme === 'light' ? '1px solid var(--neutral-200)' : 'none'};
    box-shadow: ${props => props.theme === 'light' ? '0 1px 2px 1px rgba(184, 196, 215, 0.4)' : 'inset 0 0 0 1px var(--neutral-600)'};

    &:hover {
        color: var(${props => props.theme === 'light' ? '--neutral-900' : '--neutral-0'});
        background: var(${props => props.theme === 'light' ? '--neutral-0' : '--neutral-600'});
        opacity: ${props => props.theme === 'light' ? '70%' : '100%'};
        
        border: ${props => props.theme === 'light' ? '1px solid var(--neutral-200)' : 'none'};
        box-shadow: none;
    }

    &:focus {
        box-shadow: 0 0 0 2px var(${props => props.theme === 'light' ? '--neutral-0' : '--neutral-800'}),
            0 0 0 4px var(--red-400);
        border-radius: var(--radius-full);
    }

    &.active {
        color: var(${props => props.theme === 'light' ? '--neutral-0' : '--neutral-900'});
        background: var(${props => props.theme === 'light' ? '--red-700' : '--red-400'});

        border: none;
        box-shadow: ${props => props.theme === 'light' ? '0 1px 2px 1px rgba(184, 196, 215, 0.4)' : 'none'};

        &:hover {
            color: var(${props => props.theme === 'light' ? '--neutral-0' : '--neutral-900'});
            background: var(--red-500);
            opacity: 100%;
        }
    }

`

export const ExtensionsContainer = styled.div`
    /* Mobile */
    @media (min-width: 320px) {
        display: grid;
        grid-template-columns: minmax(280px, 384px);
        grid-gap: var(--spacing-150);
        justify-content: center;
    }

    /* Tablet */
    @media (min-width: 768px) and (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }

    /* Desktop */
    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`