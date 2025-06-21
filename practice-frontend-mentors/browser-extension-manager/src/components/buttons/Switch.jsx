import { useContext } from 'react';
import styled from 'styled-components'
import { ThemeContext } from '../../context/theme-context'

const Span = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(${props => props.theme === 'light' ? '--neutral-300' : '--neutral-600'});
    -webkit-transition: .4s;
    transition: .4s;

    &:before {
        position: absolute;
        content: "";

        height: 16px;
        width: 16px;
        left: 2px;
        bottom: 2px;

        background-color: var(--neutral-0);
        box-shadow: 0 1px 2px -1px rgba(10, 13, 18, 0.15),
            0 1px 3px 0 rgba(10, 13, 18, 0.15);

        -webkit-transition: .4s;
        transition: .4s;
    }

    &.round {
        border-radius: var(--radius-full);
    }

    &.round:before {
        border-radius: var(--radius-full);
    }
`

const Label = styled.label`
    position: relative;
    display: inline-block;
    width: 36px;
    height: 20px;

    &:has(input:focus) {
        box-shadow: 0 0 0 2px var(${props => props.theme === 'light' ? '--neutral-0' : '--neutral-800'}),
            0 0 0 4px var(--red-400);
        border-radius: var(--radius-full);
    }

    & input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    & input:checked + span {
        background: var(${props => props.theme === 'light' ? '--red-700' : '--red-400'});
    }

    & input:hover + span {
        background: var(${props => props.theme === 'light' ? '--red-500' : '--neutral-600'});
    }

    & input:checked + span:before {
        -webkit-transform: translateX(var(--spacing-200));
        -ms-transform: translateX(var(--spacing-200));
        transform: translateX(var(--spacing-200));
    }
`

function Switch({ isActive, onClick }) {

    const { active } = useContext(ThemeContext)

    return (
        <Label theme={active}>
            <input type="checkbox" checked={isActive} onClick={onClick} readOnly />
            <Span className="round" />
        </Label>
    );
}

export default Switch;