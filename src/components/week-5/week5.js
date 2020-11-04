import React, { useState }  from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Swipeable} from 'react-swipeable';
import { keyframes } from 'styled-components'

// Icons //
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line
import styling from '../../style.css';

const becomevisible = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

const becomeinvisible = keyframes`
    from { opacity: 1; }
    to { opacity: 0; }
`;

const StyledContainerMain = styled.div`
    width: 80%;
    margin-left: 10%;
    height: 100%;
    border-left: 2px solid #000;
    border-right: 2px solid #000;
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
    background-color: #fafafa;
`;

const StyledSideNav = styled.div`
    height: 76.5vh;
    width: ${(props) => props.open ? '350px' : '0px'};
    position: relative;
    top: 0;
    left: 0;
    background-color: #333;
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
    color: #00D7A3;
    flex-direction: column;
    margin-top: 5%;

    & li {
        list-style-type: none;
        text-align: center;
        margin-top: 4rem;
        cursor: pointer;
        font-size: 32px;
        transition: all 0.5s ease-in-out;
        &:hover {
            color: #ffff;
        }
    }
`;

const NavOpen = styled.button`
    color: #000;
    background-color: ${(props) => props.color};
    padding: 0.25rem 1rem;
    font-size: 48px;
    font-weight: 300;
    text-align: center;
    border: 0.5px solid #000;
    border-radius: 0.25rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    cursor: pointer;
    margin: 2%;
    margin-left: -0.25vw;
    transition: all 0.5s ease-in-out;

    &:hover {
        color: #000;
        background-color: ${(props) => props.hoverColor};
    }
`;

const StyledOverlayDiv = styled.div`
    width: 69.9vw;
    margin-left: 10vw;
    height: 76.8vh;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    display: ${(props) => props.display ? 'block' : 'none'};
    opacity: 0;
    animation: ${becomevisible} 1s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
    transition: all 0.5s ease-in-out;
`;

function Week5() {

    const [navOpen, setNavOpen] = useState(false);

    const handleClose = () => {
        setNavOpen(false); 
    }

    const handleOpen = () => {
        setNavOpen(true);
    }

    const handleSwipe = (event) => {
        if(event.dir === "Right") {
            setNavOpen(true);
        }

         if (event.dir === "Left") {
            setNavOpen(false);
        }
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
    
    return (
       <StyledContainerMain>
           {Page===1 && (
            <div>
                <Swipeable onSwiped={handleSwipe}>
                <StyledWrapper>
                { navOpen && ( 
                    <StyledOverlayDiv display={NavOpen} onClick={handleClose}/>
                )}
                    <StyledSideNav open={navOpen}>
                        <StyledCloseIcon onClick={handleClose}>
                            <FontAwesomeIcon icon={faTimes} color="#00D7A3" />
                        </StyledCloseIcon>
                        { navOpen &&
                        (<StyledNav>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Gallery</li>
                            <li>Privacy</li>
                        </StyledNav>)
                        }
                    </StyledSideNav>
                    <NavOpen open={navOpen} onClick={handleOpen} color="#00D7A3" hoverColor="#00FFC2">
                        <FontAwesomeIcon icon={faBars} color="#fff" />
                    </NavOpen>
                </StyledWrapper>
                <BulletedSliderMain>
                    <BulletedContainer>
                        <SliderTitle>
                            <SliderTitleText>Navigation Sidebar</SliderTitleText>
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
                </Swipeable>
            </div>
            )}

            {Page===2 && (
            <div>
                <StyledWrapper>
                    <h1>Coming Soon</h1>
                </StyledWrapper>
                <BulletedSliderMain>
                    <BulletedContainer>
                        <SliderTitle>
                            <SliderTitleText id="SliderText">Tabular Navigation</SliderTitleText>
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
                <StyledWrapper>
                    <h1>Coming Soon</h1>
                </StyledWrapper>
                <BulletedSliderMain>
                    <BulletedContainer>
                        <SliderTitle>
                            <SliderTitleText id="SliderText">Navigation Primary</SliderTitleText>
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