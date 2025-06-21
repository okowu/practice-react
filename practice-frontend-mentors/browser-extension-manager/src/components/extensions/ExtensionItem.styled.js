import styled from "styled-components";

export const Article = styled.article`
    display: grid;
    grid-template-columns: 1fr;

    border-radius: var(--radius-20);

    padding: var(--spacing-250);

    background: ${props => props.theme === 'light' ? `var(--neutral-0)` : `var(--neutral-800)`};

    box-shadow: ${props => props.theme === 'light' ? `
        0 0 0 1px var(--neutral-200),
        0 2px 2px 0 rgba(194, 206, 225, 0.20),
        0 1px 5px 1px rgba(194, 206, 225, 0.22)
        `: '0 0 0 1px var(--neutral-600)'};
`

export const InfoContainer = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-auto-flow: column;

    grid-gap: var(--spacing-200);

    margin-bottom: var(--spacing-600);
`

export const InfoDetailsContainer = styled.div`
    &>* {
        margin: 0;
    }

    & h3 { 
        color: ${props => props.theme === 'light' ? `var(--neutral-900)` : `var(--neutral-0)`};
        margin-bottom: 8px;
    }

    & p {
        color: ${props => props.theme === 'light' ? `var(--neutral-600)` : `var(--neutral-300)`};
    }
`

export const ActionsContainer = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr auto;
    align-items: center;
`

export const Button = styled.button`
    border: 1px solid ${props => props.theme === 'light' ? `var(--neutral-300)` : `var(--neutral-600)`};
    border-radius: var(--radius-full);

    justify-self: self-start;

    background: transparent;
    color: ${props => props.theme === 'light' ? `var(--neutral-900)` : `var(--neutral-0)`};

    padding: var(--spacing-100) var(--spacing-200);
    cursor: pointer;

    &:hover {
        background: var(--red-700);
        color: var(--neutral-0);
        border: 1px solid transparent;
    }

    &:focus {
        box-shadow: 0 0 0 2px ${props => props.theme === 'light' ? '#FFFFFF' : 'var(--neutral-800)'},
            0 0 0 4px var(--red-700);
        border-radius: var(--radius-full);
    }
`