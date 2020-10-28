import React from 'react';
import styled from 'styled-components';

import LoadingGif from "./assets/LoadingGif2Final";

const Main = styled.div`
    width: 100vw;
    height: 90vh;
    margin-top: 0vh;
`;

const HeaderMain = styled.h1`
    margin-top: -15vh;
    font-weight: 300;
    word-spacing: 5px;
    letter-spacing: 0.5px;
`;

const MainContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

function Week1() {
    return (
    <Main>
        <MainContainer>
            <img src={LoadingGif} alt="Main Loading Logo" />
            <HeaderMain>Webpage Loading...</HeaderMain>
        </MainContainer>
    </Main>
    );
}

export default Week1;