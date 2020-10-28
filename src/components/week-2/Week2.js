import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

const AlertFloatIn = keyframes`
    from { transform: translateY(280px); opacity: 0; }
    to { transform: translateY(40px); opacity: 1; }
`;

const AlertFloatOut = keyframes`
    from { transform: translateY(40px); opacity: 1; }
    to { transform: translateY(280px); opacity: 0; }
`;

const Main = styled.div`
    width: 100vw;
    height: 90vh;
    margin-top: 0vh;
    text-align: center;

    & h1 {
        font-weight: 300;
    }
`

const ToasterContainer = styled.div`
    width: 10vw;
    margin-left: 45vw;
    height: 10vh;
    position: relative;
    bottom: -90%;
`;

const Alert = styled.div`
    width: 100%;
    height: 50%;
    background-color: #00D7A3;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    transform: translateY(280px);
    transition: all 1s ease-in-out;

    &.Open {
        animation: ${AlertFloatIn} 1s;
        animation-fill-mode: forwards;
        transition: all 1s ease-in-out;
    }

    &.Closed {
        animation: ${AlertFloatOut} 1s;
        animation-fill-mode: forwards;
        transition: all 1s ease-in-out;
    }
`;

const HeaderAlert = styled.h1`
    color: #000;
    line-height: 200%;
    height: 100%;
`;

const AlertCreationButton = styled.button`
    font-size: 28px;
    position: absolute;
    width: 5vw;
    left: 47.5vw;
`;

function Week2() {

    function handleCLick(f) {
        f.preventDefault();
        document.getElementById("AlertBox").classList.toggle("Closed");
    }

    function DisplayAlert(e) {
        e.preventDefault();;
        document.getElementById("AlertBox").classList.toggle("Open");
    }

    return (
        <Main>
            <AlertCreationButton onClick={DisplayAlert}>Save</AlertCreationButton>
            <ToasterContainer>
                <Alert className="Alert" id="AlertBox">
                    <FontAwesomeIcon icon={faTimes} color="#000" fixedWidth onClick={handleCLick}/>
                    <HeaderAlert>Saved</HeaderAlert>
                </Alert>
            </ToasterContainer>
        </Main>
    );
}

export default Week2;