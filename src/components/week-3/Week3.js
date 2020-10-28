import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

const becomevisible = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

const StyledWrapper = styled.div`
    width: 100vw;
    margin-left: 0vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

const StyledButton = styled.button`
    color: #000;
    background-color: ${(props) => props.color};
    padding: 1rem 2rem;
    font-size: 1.5rem;
    font-weight: 300;
    text-align: center;
    border: 0.5px solid #000;
    border-radius: 0.25rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    cursor: pointer;
    margin: 2%;
    transition: all 0.5s ease-in-out;

    &:hover {
        color: #000;
        background-color: ${(props) => props.hoverColor};
    }
`;

const StyledButtonOutline = styled.button`
    color: #000;
    background-color: ${(props) => props.color};
    padding: 1rem 2rem;
    font-size: 1.5rem;
    font-weight: 300;
    border: 0.5px solid #000;
    border-radius: 0.25rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    cursor: pointer;
    margin: 2%;
    transition: all 0.5s ease-in-out;

    &:hover {
        color: #000;
        background-color: ${(props) => props.hoverColor};
    }
`;

const StyledButtonMinimal = styled.button`
    color: #000;
    background-color: ${(props) => props.color};
    padding: 1rem 2rem;
    font-size: 1.5rem;
    font-weight: 300;
    border: 0;
    border-radius: 0.25rem;
    cursor: pointer;
    margin: 2%;
    transition: all 0.5s ease-in-out;

    &:hover {
        color: #000;
        background-color: ${(props) => props.hoverColor};
    }
`;

const StyledButtonRounded = styled.button`
    color: #000;
    background-color: ${(props) => props.color};
    font-size: 1.5rem;
    font-weight: 300;
    border: ${(props) => props.border};
    width: 60px;
    height: 60px;
    border-radius: 50%;
    cursor: pointer;
    margin: 2%;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    padding-top: 14px;

    &:hover {
        color: #000;
        background-color: ${(props) => props.hoverColor};
        width: 200px;
        border-radius: 0.25rem;

        & .BecomeVisible {
            animation: ${becomevisible} 0.5s;
            animation-delay: 0.5s;
            animation-fill-mode: forwards;
        }

        & .Floater {
            margin-top: 0px;
            left: 14px;
        }
    }
`;

const BecomeVisible = styled.p`
    color: #000;
    opacity: 0;
`;

const Floater = styled.div`
    float: left;
    margin-left: 14px;
    height: 100%;
`;

const Breaker = styled.div`
    flex-basis: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 0vw;
`

const Button = (props) => {
    const { children, color, hoverColor } = props;
    return <StyledButton color={color} hoverColor={hoverColor}> {children} </StyledButton>
};

const ButtonOutline = (props) => {
    const { children, color, hoverColor } = props;
    return <StyledButtonOutline color={color} hoverColor={hoverColor}> {children} </StyledButtonOutline>
};

const ButtonMinimal = (props) => {
    const { children, color, hoverColor } = props;
    return <StyledButtonMinimal color={color} hoverColor={hoverColor}> {children} </StyledButtonMinimal>
};

const ButtonRounded = (props) => {
    const { children, color, hoverColor, border } = props;
    return <StyledButtonRounded color={color} hoverColor={hoverColor} border={border}> {children} </StyledButtonRounded>
};

function Week3() {
    return (
        <StyledWrapper>
            <Breaker>
                <Button color="#00D7A3" hoverColor="#00FFC2">CONTACT</Button>
                <ButtonOutline color="transparent" hoverColor="#00FFC2">CONTACT</ButtonOutline>
                <ButtonMinimal color="transparent" hoverColor="#00FFC2">CONTACT</ButtonMinimal>
            </Breaker>
            <Breaker>
                <Button color="#00D7A3" hoverColor="#00FFC2">
                    <FontAwesomeIcon icon={faPlus} color="#000" fixedWidth/> ADD NEW
                </Button>
                <ButtonOutline color="transparent" hoverColor="#00FFC2">
                    <FontAwesomeIcon icon={faPlus} color="#000" fixedWidth/> ADD NEW
                </ButtonOutline>
                <ButtonMinimal color="transparent" hoverColor="#00FFC2">
                    <FontAwesomeIcon icon={faPlus} color="#000" fixedWidth/> ADD NEW
                </ButtonMinimal>
            </Breaker>
            <Breaker>
                <ButtonRounded color="#00D7A3" hoverColor="#00FFC2" border="0.5px solid #000">
                    <Floater className="Floater">
                        <FontAwesomeIcon icon={faPlus} color="#000" fixedWidth/>
                    </Floater>
                    <BecomeVisible className="BecomeVisible">ADD NEW</BecomeVisible>
                </ButtonRounded>
                <ButtonRounded color="transparent" hoverColor="#00FFC2" border="0.5px solid #000">
                    <Floater className="Floater">
                        <FontAwesomeIcon icon={faPlus} color="#000" fixedWidth/>
                    </Floater>
                    <BecomeVisible className="BecomeVisible">ADD NEW</BecomeVisible>
                </ButtonRounded>
                <ButtonRounded color="transparent" hoverColor="#00FFC2" border="0">
                    <Floater className="Floater">
                        <FontAwesomeIcon icon={faPlus} color="#000" fixedWidth/>
                    </Floater>
                    <BecomeVisible className="BecomeVisible">ADD NEW</BecomeVisible>
                </ButtonRounded>
            </Breaker>
        </StyledWrapper>
    );
}

export default Week3;