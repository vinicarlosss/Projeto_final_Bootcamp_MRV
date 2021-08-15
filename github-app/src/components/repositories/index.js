import React, { useEffect, useState } from 'react';
import useGithub from '../../hooks/github-hooks';
import RepositoryItem from '../repositoryitem';
import * as S from './styled';

const Repositories = () => {
    const { githubState , getUserRepos } = useGithub();
    const [hasUserForSearchrepos, sethasUserForSearchrepos] = useState(false) 

    useEffect(() =>{
        if(!!githubState.user.login){
            getUserRepos();
        }
        sethasUserForSearchrepos(!!githubState.user.login);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [githubState.user]);
    return(
        <> 
            {hasUserForSearchrepos ? (
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
        ) : (
            <></>
            )}
    </>
    );
};

export default Repositories;
