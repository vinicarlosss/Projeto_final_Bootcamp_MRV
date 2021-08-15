import React from 'react';
import RepositoryItem from '../repositoryitem';
import * as S from './styled';

const Repositories = () => {
    return( 
        <S.WrapperTabs 
            selectedTabClassName="is-selected"
            selectedTabPanelClassName="is-selected"
        >
            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>
            <S.WrapperTabPanel>
                <RepositoryItem 
                    name="Ranking-Earning-yeld" 
                    linkToRepo="https://github.com/vinicarlosss/Ranking-Earning-yeld"
                    fullName="vinicarlosss/Ranking-Earning-yeld"
                />
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>
                <RepositoryItem
                    name="API_Rest_de_consulta_de_cidades-do-Brasil" 
                    linkToRepo="https://github.com/vinicarlosss/API_Rest_de_consulta_de_cidades-do-Brasil"
                    fullName="vinicarlosss/API_Rest_de_consulta_de_cidades-do-Brasil"               
                />
            </S.WrapperTabPanel>
        </S.WrapperTabs>
    );
};

export default Repositories;
