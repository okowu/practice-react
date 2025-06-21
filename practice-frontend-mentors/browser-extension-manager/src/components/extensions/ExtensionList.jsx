import { useContext, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from '../../context/theme-context';
import ExtensionItem from './ExtensionItem';
import { extensionsActions } from '../../store/extensions';

import { Header, Title, FiltersContainer, FilterButton, ExtensionsContainer } from './ExtensionList.styled';


function ExtensionList() {

    const dispatch = useDispatch()
    const { items: extensions } = useSelector(state => state.extensions)
    const { active } = useContext(ThemeContext)

    const [filterType, setFilterType] = useState('all')

    const disableExtension = (id) => { dispatch(extensionsActions.disableExtension(id)) }
    const deleteExtension = (id) => { dispatch(extensionsActions.deleteExtension(id)) }

    const filteredExtensions = useMemo(() => {

        if (filterType === 'all') {
            return extensions
        }

        const isActive = filterType === 'active'
        return [...extensions.filter(extension => extension.isActive === isActive)]
    }, [filterType, extensions])


    return (
        <main>
            <Header>
                <Title theme={active} className="text-preset-1">Extensions List</Title>
                <FiltersContainer>
                    <FilterButton
                        theme={active}
                        className={`text-preset-3 ${filterType === 'all' ? 'active' : ''}`}
                        onClick={() => setFilterType('all')}>
                        All
                    </FilterButton>
                    <FilterButton
                        theme={active}
                        className={`text-preset-3 ${filterType === 'active' ? 'active' : ''}`}
                        onClick={() => setFilterType('active')}>
                        Active
                    </FilterButton>
                    <FilterButton
                        theme={active}
                        className={`text-preset-3 ${filterType === 'inactive' ? 'active' : ''}`}
                        onClick={() => setFilterType('inactive')}>
                        Inactive
                    </FilterButton>
                </FiltersContainer>
            </Header>
            <ExtensionsContainer>
                {filteredExtensions.map(data => (
                    <ExtensionItem
                        key={data.id}
                        logo={data.logo}
                        name={data.name}
                        description={data.description}
                        isActive={data.isActive}
                        onDisable={() => disableExtension(data.id)}
                        onDelete={() => deleteExtension(data.id)} />
                ))}
            </ExtensionsContainer>
        </main>
    );
}

export default ExtensionList;