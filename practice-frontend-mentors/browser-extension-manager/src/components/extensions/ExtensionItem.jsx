import { useContext } from 'react';
import Switch from '../buttons/Switch';
import { Logo } from '../Icons'
import { ThemeContext } from '../../context/theme-context'
import { Article, InfoContainer, InfoDetailsContainer, ActionsContainer, Button } from './ExtensionItem.styled'


function ExtensionItem({ logo, name, description, isActive, onDisable, onDelete }) {

    const { active } = useContext(ThemeContext)

    const ArticleLogo = Logo[logo]

    return (
        <Article theme={active}>
            <InfoContainer>
                <ArticleLogo />
                <InfoDetailsContainer theme={active}>
                    <h3 className="text-preset-4">{name}</h3>
                    <p className="text-preset-5">{description}</p>
                </InfoDetailsContainer>
            </InfoContainer>
            <ActionsContainer>
                <Button theme={active} className='text-preset-6' onClick={onDelete}>Remove</Button>
                <Switch theme={active} isActive={isActive} onClick={onDisable} />
            </ActionsContainer>
        </Article>
    );
}

export default ExtensionItem;