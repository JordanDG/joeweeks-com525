import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

import FeaturedImage from './assets/BackgroundColourImage.jpg';

const time = '0.25s';
const setAnimation = (from, to) => keyframes({ from: from, to: to });

const StyledContainer = styled.div`
    animation: ${time} ${({ showBackground }) => (showBackground && setAnimation({backgroundColor: '#fff', color: '#333'}, {backgroundColor: '#333', color: '#fff'})) || (!showBackground && setAnimation({backgroundColor: '#333', color: '#fff'}, {backgroundColor: '#fff', color: '#333'}))} linear;
    animation-fill-mode: forwards;
    width: 100%;
    height: 91.5vh;
`;

const StyledButton = styled.div`
    animation: ${time} ${({ active }) => (active && setAnimation({backgroundColor: '#fafafa', color: '#333'}, {backgroundColor: '#fff', color: '#fff'})) || (!active && setAnimation({backgroundColor: '#333', color: '#fff'}, {backgroundColor: '#313130', color: '#333'}))} linear;
    animation-fill-mode: forwards;
    background-color: #313130;
    color: #333;
    border-radius: 5rem;
    padding: 0.5rem;
    height: 3rem;
    width: 6rem;
    margin-right: 10vw;
`;

const ToggleContainer = styled.div`
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledSwitch = styled.div`
    border-radius: 5rem;
    animation: ${time} ${({ active }) => (active && setAnimation({marginLeft: 0, backgroundColor: '#fafafa', color: '#333'}, {marginLeft: '47px', backgroundColor: '#333', color: '#fff'})) || (!active && setAnimation({marginLeft: '47px', backgroundColor: '#333', color: '#fff'}, {marginLeft: 0, backgroundColor: '#fafafa', color: '#333'}))} linear;
    animation-fill-mode: forwards;
    height: 2rem;
    width: 2rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
`;

const NavMenu = styled.ul`
    width: 60vw;
    margin-left: 10vw;

    & li {
        display: inline-block;
        list-style-type: none;
        border-bottom: 2px solid transparent;
        transition: all 0.5s ease-in-out;

        &:not(:first-of-type) {
            margin-left: 100px;
        }

        &:hover {
            border-bottom: 2px solid #00D7A3;
        }
        
        & a {
            text-decoration: none;
            animation: ${time} ${({ showBackground }) => (showBackground && setAnimation({color: '#333'}, {color: '#fff'})) || (!showBackground && setAnimation({color: '#fff'}, {color: '#333'}))} linear; 
            animation-fill-mode: forwards;
            font-weight: 300;
            font-size: 32px;
        }
    }
`;

const ContentContainer = styled.div`
    width: 80%;
    height: 25vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin-top: 2%;
    margin-left: 10%;
    animation: ${time} ${({ showBackground }) => (showBackground && setAnimation({color: '#333'}, {color: '#fff'})) || (!showBackground && setAnimation({color: '#fff'}, {color: '#333'}))} linear; 
    animation-fill-mode: forwards;
`;

const Toggle = (props) => {
    const [active, setActive] = useState(false);
    const { onActive, onNotActive } = props;
    
    useEffect(() => {
        if (!active) {
            onNotActive();
            return;
        }

        onActive();
    }, [active]);

    const handleCLick = () => {
        setActive(!active);
    }

    return (
        <StyledButton active={active}>
            <StyledSwitch active={active} onClick={handleCLick}>
                { active && (
                    <FontAwesomeIcon icon={faMoon}/>
                )}
                { !active && (
                    <FontAwesomeIcon icon={faSun}/>
                )}
            </StyledSwitch>
        </StyledButton>
    );
}

function Week9() {

    const [showBackground, setShowBackground] = useState(false);
    const handleNotActive = () => {
        setShowBackground(false);
    }
    const handleActive = () => {
        setShowBackground(true);
    }

    return (
        <StyledContainer showBackground={showBackground}>
            <ToggleContainer>
                <NavMenu showBackground={showBackground}>
                    <li><a href="#link1">Home</a></li>
                    <li><a href="#link2">About</a></li>
                    <li><a href="#link3">Gallery</a></li>
                    <li><a href="#link4">Contact</a></li>
                </NavMenu>
                <Toggle onNotActive={handleNotActive} onActive={handleActive} />
            </ToggleContainer>
            <ContentContainer showBackground={showBackground}>
                <p>This is test text to verify if the dark / light mode settings are working as intended.</p>
                <h2>I sure hope so.</h2>
            </ContentContainer>
        </StyledContainer>
    );
}

export default Week9;