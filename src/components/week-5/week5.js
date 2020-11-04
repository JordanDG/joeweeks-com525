import React, { useState }  from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Swipeable} from 'react-swipeable';

// Icons //
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const StyledContainerMain = styled.div`
    width: 80%;
    margin-left: 10%;
    height: 100%;
`;

const BulletedSliderMain = styled.div`
    width: 100%;
    height: 15%;
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #fafafa;
`;

const BulletedContainer = styled.div`
    width: 80%;
    margin-left: 10%;
    height: 100%;
`;

const Slider = styled.div`
    width: 80%;
    height: 30%;
    margin-left: 10%;
    font-size: 38px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const SliderContents = styled.div`
    width: 150px;
    height: 100%;
    padding-top: 10px;
    font-size: 18px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const SliderTitle = styled.div`
    width: 200px;
    margin: 0 auto;
    padding-top: 20px;
`;

const SliderTitleText = styled.h1`
    text-align: center;
    font-weight: 300;
    color: #000;
`;

const StyledWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    height: 76.5vh;
    width: 100vw;
    background-color: yellow;
`;

const StyledSideNav = styled.div`
    height: 76.5vh;
    width: ${(props) => props.open ? '350px' : '0px'};
    position: relative;
    top: 0;
    left: 0;
    background-color: #111;
    transition: all 1s ease-in-out;
`;

const StyledCloseIcon = styled.div`
    float: right;
    font-size: 48px;
    margin: 1rem 1rem;
    cursor: pointer;
    margin-top: 0;
`;

const StyledNav = styled.ul`
    display: flex;
    color: #fafafa;
    flex-direction: column;
    margin-top: 5%;

    & li {
        list-style-type: none;
        text-align: center;
        margin-top: 4rem;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
        &:hover {
            color: #ffff;
        }
    }
`;

const NavOpen = styled.button`
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

function Week5() {

    const [navOpen, setNavOpen] = useState(false);

    const handleClose = () => {
        setNavOpen(false);
    }

    const handleOpen = () => {
        setNavOpen(true);
    }

    const [Page, setPage] = useState(1);
    const pageChangeUp = () => {
        switch (Page) {
            case 1:
                setPage(2);
                break;
            case 2:
                setPage(3);
                break;
            case 3: 
                setPage(1);
                break;
            default:
                break;
        }
    };

    const pageChangeDown = () => {
        switch (Page) {
            case 1:
                setPage(3);
                break;
            case 2:
                setPage(1);
                break;
            case 3: 
                setPage(2);
                break;
            default:
                break;
        }
    };
    
    // 
    
    return (
       <StyledContainerMain>
           {Page===1 && (
            <div>
                <StyledWrapper>
                    <StyledSideNav open={navOpen}>
                        <StyledCloseIcon onClick={handleClose}>
                            <FontAwesomeIcon icon={faTimes} color="#fff" />
                        </StyledCloseIcon>
                        { navOpen &&
                        (<StyledNav>
                            <li>Home</li>
                            <li>About</li>
                            <li>Privacy</li>
                        </StyledNav>)
                        }
                    </StyledSideNav>
                    <NavOpen open={navOpen} onClick={handleOpen} color="#00D7A3" hoverColor="#00FFC2">Open Nav</NavOpen>
                </StyledWrapper>
                <BulletedSliderMain>
                    <BulletedContainer>
                        <SliderTitle>
                            <SliderTitleText>Nav 1</SliderTitleText>
                        </SliderTitle>
                        <Slider>
                            <FontAwesomeIcon icon={faArrowCircleLeft} color="#000" onClick={pageChangeDown}/>
                            <SliderContents>
                                <FontAwesomeIcon icon={faCircle} color="#00D7A3" />
                                <FontAwesomeIcon icon={faCircle} color="#000" />
                                <FontAwesomeIcon icon={faCircle} color="#000" />
                            </SliderContents>
                            <FontAwesomeIcon icon={faArrowCircleRight} color="#000" onClick={pageChangeUp}/>
                        </Slider>
                    </BulletedContainer>
                </BulletedSliderMain>
            </div>
            )}

            {Page===2 && (
            <div>
                <BulletedSliderMain>
                    <BulletedContainer>
                        <SliderTitle>
                            <SliderTitleText id="SliderText">Nav 2</SliderTitleText>
                        </SliderTitle>
                        <Slider>
                            <FontAwesomeIcon icon={faArrowCircleLeft} color="#000" onClick={pageChangeDown}/>
                            <SliderContents>
                                <FontAwesomeIcon icon={faCircle} color="#000" />
                                <FontAwesomeIcon icon={faCircle} color="#00D7A3" />
                                <FontAwesomeIcon icon={faCircle} color="#000" />
                            </SliderContents>
                            <FontAwesomeIcon icon={faArrowCircleRight} color="#000" onClick={pageChangeUp}/>
                        </Slider>
                    </BulletedContainer>
                </BulletedSliderMain>
            </div>
            )}

            {Page===3 && (
            <div>
                <BulletedSliderMain>
                    <BulletedContainer>
                        <SliderTitle>
                            <SliderTitleText id="SliderText">Nav 3</SliderTitleText>
                        </SliderTitle>
                        <Slider>
                            <FontAwesomeIcon icon={faArrowCircleLeft} color="#000" onClick={pageChangeDown}/>
                            <SliderContents>
                                <FontAwesomeIcon icon={faCircle} color="#000" />
                                <FontAwesomeIcon icon={faCircle} color="#000" />
                                <FontAwesomeIcon icon={faCircle} color="#00D7A3" />
                            </SliderContents>
                            <FontAwesomeIcon icon={faArrowCircleRight} color="#000" onClick={pageChangeUp}/>
                        </Slider>
                    </BulletedContainer>
                </BulletedSliderMain>
            </div>
            )}
       </StyledContainerMain>
    );
}

export default Week5;