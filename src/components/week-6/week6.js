import React, { useState } from 'react';
import styled, {keyframes} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Icons //
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const StyledContainerLogin = styled.div`
    width: 100vw;
    height: 92vh;
`;

const StyledMenu = styled.ul`
    animation: 1s ${keyframes({from: {opacity: 0}, to: {opacity: 1}})}
    animation-fill-mode: forwards;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 180px;
    right: 0px;
    top: 215px;
    margin-right: 2%;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    position: absolute;
    background-color: #fff;
    z-index: 50;

    & li {
        &:hover {
            background-color: #e8e8e8
        }
        text-align: center;
        height: 30px;
        cursor: pointer;
        width: 100%;
        list-style: none;
        transition: all 0.5s ease-in-out;
        padding: 5px 0px;
    
`;

const StyledButton = styled.button`
    color: #000;
    background-color: ${(props) => props.color};
    width: 180px;
    display: flex;
    flex-direction: row
    align-items: center;
    justify-content: space-around;
    height: 50px;
    font-size: 26px;
    font-weight: 300;
    text-align: center;
    border: 0;
    border-radius: 0.25rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    cursor: pointer;
    margin: 2%;
    padding-top: 7px;
    float: right;
    transition: all 0.5s ease-in-out;

    &:hover {
        color: #000;
        background-color: ${(props) => props.hoverColor};
    }
`;

const StyledNavigationMenuContainer = styled.div`
    width: 100vw;
    height: 12vh;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
`;

const StyledNavMenu = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    width: 80vw;
    float: right;
    font-size: 32px;
    font-weight: 300;
    margin-right: 0%;
    @media (max-width: 768px) {
        justify-content: center;
    }
    @media (max-width: 665px) {
        justify-content: center;
        flex-direction: column;
    }

    & li {
        @media (max-width: 665px) {
            width: 100%;
            text-align: center;
        }
        margin-left: 5vw;
        border-bottom: 3px solid transparent;
        cursor: pointer;
        transition: all 0.5s;
        @media (max-width: 768px) {
            margin-left: 3vw;
        }
        &:hover {
            border-bottom: 3px solid #00D7A3;
            @media (max-width: 665px) {
                border-bottom: 3px solid transparent;
            }
        }
    }
`;

const StyledAlignmentIconographer = styled.div`
    padding-top: 2px;
    margin-left: -25px;
    @media (max-width: 768px) {
        display: none;
    }
`;

const StyledPageContentsContainer = styled.div`
    width: 100vw;
    height: 82vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Menu = (props) => {

    const { open, onClickSetEnglish, onClickSetFrench, onClickSetGerman, onClickSetSpanish, onClickSetSwedish, onClickSetRussian, onClickSetChinese } = props;

    return (<>
    { 
        open && (<StyledMenu>
            <li onClick={onClickSetEnglish}>English</li>
            <li onClick={onClickSetFrench}>French</li>
            <li onClick={onClickSetGerman}>German</li>
            <li onClick={onClickSetSpanish}>Spanish</li>
            <li onClick={onClickSetSwedish}>Swedish</li>
            <li onClick={onClickSetRussian}>Russian</li>
            <li onClick={onClickSetChinese}>Chinese</li>
        </StyledMenu>
        )}
        </>
    )
}

function Week6() {;

    const [open, setOpen] = useState(false);
    const [language, setLanguage] = useState("English");

    const handleClick = () => {
        setOpen(!open);
    }

    const onClickSetEnglish = () => {
        setLanguage("English");
        setOpen(!open);
    }

    const onClickSetFrench = () => {
        setLanguage("French");
        setOpen(!open);
    }

    const onClickSetGerman = () => {
        setLanguage("German");
        setOpen(!open);
    }
    
    const onClickSetSpanish = () => {
        setLanguage("Spanish");
        setOpen(!open);
    }

    const onClickSetSwedish = () => {
        setLanguage("Swedish");
        setOpen(!open);
    } 

    const onClickSetRussian = () => {
        setLanguage("Russian");
        setOpen(!open);
    } 

    const onClickSetChinese = () => {
        setLanguage("Chinese");
        setOpen(!open);
    } 

    return (
        <StyledContainerLogin>
            <StyledNavigationMenuContainer>
                { language==="English" && !open && (
                    <>
                        <StyledButton color="#00D7A3" hoverColor="#00FFC2" onClick={handleClick}>
                            Language
                            <StyledAlignmentIconographer>
                                <FontAwesomeIcon icon={faChevronDown} color="#000" fixedWidth />
                            </StyledAlignmentIconographer>
                        </StyledButton>
                    </>
                )}
                { language==="English" && open && (
                    <>
                        <StyledButton color="#00D7A3" hoverColor="#00FFC2" onClick={handleClick}>
                            Language
                            <StyledAlignmentIconographer>
                                <FontAwesomeIcon icon={faChevronUp} color="#000" fixedWidth />
                            </StyledAlignmentIconographer>
                        </StyledButton>
                    </>
                )}
                { language==="French" && !open && (
                    <>
                        <StyledButton color="#00D7A3" hoverColor="#00FFC2" onClick={handleClick}>
                            Langue
                            <StyledAlignmentIconographer>
                                <FontAwesomeIcon icon={faChevronDown} color="#000" fixedWidth />
                            </StyledAlignmentIconographer>
                        </StyledButton>
                    </>
                )}
                { language==="French" && open && (
                    <>
                        <StyledButton color="#00D7A3" hoverColor="#00FFC2" onClick={handleClick}>
                            Langue
                            <StyledAlignmentIconographer>
                                <FontAwesomeIcon icon={faChevronUp} color="#000" fixedWidth />
                            </StyledAlignmentIconographer>
                        </StyledButton>
                    </>
                )}
                { language==="German" && !open && (
                    <>
                        <StyledButton color="#00D7A3" hoverColor="#00FFC2" onClick={handleClick}>
                            Sprache
                            <StyledAlignmentIconographer>
                                <FontAwesomeIcon icon={faChevronDown} color="#000" fixedWidth />
                            </StyledAlignmentIconographer>
                        </StyledButton>
                    </>
                )}
                { language==="German" && open && (
                    <>
                        <StyledButton color="#00D7A3" hoverColor="#00FFC2" onClick={handleClick}>
                            Sprache
                            <StyledAlignmentIconographer>
                                <FontAwesomeIcon icon={faChevronUp} color="#000" fixedWidth />
                            </StyledAlignmentIconographer>
                        </StyledButton>
                    </>
                )}
                { language==="Spanish" && !open && (
                    <>
                        <StyledButton color="#00D7A3" hoverColor="#00FFC2" onClick={handleClick}>
                            Idioma
                            <StyledAlignmentIconographer>
                                <FontAwesomeIcon icon={faChevronDown} color="#000" fixedWidth />
                            </StyledAlignmentIconographer>
                        </StyledButton>
                    </>
                )}
                { language==="Spanish" && open && (
                    <>
                        <StyledButton color="#00D7A3" hoverColor="#00FFC2" onClick={handleClick}>
                            Idioma
                            <StyledAlignmentIconographer>
                                <FontAwesomeIcon icon={faChevronUp} color="#000" fixedWidth />
                            </StyledAlignmentIconographer>
                        </StyledButton>
                    </>
                )}
                { language==="Swedish" && !open && (
                    <>
                        <StyledButton color="#00D7A3" hoverColor="#00FFC2" onClick={handleClick}>
                            Språk
                            <StyledAlignmentIconographer>
                                <FontAwesomeIcon icon={faChevronDown} color="#000" fixedWidth />
                            </StyledAlignmentIconographer>
                        </StyledButton>
                    </>
                )}
                { language==="Swedish" && open && (
                    <>
                        <StyledButton color="#00D7A3" hoverColor="#00FFC2" onClick={handleClick}>
                            Språk
                            <StyledAlignmentIconographer>
                                <FontAwesomeIcon icon={faChevronUp} color="#000" fixedWidth />
                            </StyledAlignmentIconographer>
                        </StyledButton>
                    </>
                )}
                { language==="Russian" && !open && (
                    <>
                        <StyledButton color="#00D7A3" hoverColor="#00FFC2" onClick={handleClick}>
                            Язык
                            <StyledAlignmentIconographer>
                                <FontAwesomeIcon icon={faChevronDown} color="#000" fixedWidth />
                            </StyledAlignmentIconographer>
                        </StyledButton>
                    </>
                )}
                { language==="Russian" && open && (
                    <>
                        <StyledButton color="#00D7A3" hoverColor="#00FFC2" onClick={handleClick}>
                            Язык
                            <StyledAlignmentIconographer>
                                <FontAwesomeIcon icon={faChevronUp} color="#000" fixedWidth />
                            </StyledAlignmentIconographer>
                        </StyledButton>
                    </>
                )}
                { language==="Chinese" && !open && (
                    <>
                        <StyledButton color="#00D7A3" hoverColor="#00FFC2" onClick={handleClick}>
                            语言
                            <StyledAlignmentIconographer>
                                <FontAwesomeIcon icon={faChevronDown} color="#000" fixedWidth />
                            </StyledAlignmentIconographer>
                        </StyledButton>
                    </>
                )}
                { language==="Chinese" && open && (
                    <>
                        <StyledButton color="#00D7A3" hoverColor="#00FFC2" onClick={handleClick}>
                            语言
                            <StyledAlignmentIconographer>
                                <FontAwesomeIcon icon={faChevronUp} color="#000" fixedWidth />
                            </StyledAlignmentIconographer>
                        </StyledButton>
                    </>
                )}
                <StyledNavMenu>
                    { language==="English" && (
                        <>
                            <li>Home</li>
                            <li>About</li>
                            <li>Gallery</li>
                            <li>Contact</li>
                        </>
                    )}
                    { language==="French" && (
                        <>
                            <li>Accueil</li>
                            <li>À propos</li>
                            <li>Galerie</li>
                            <li>Contact</li>
                        </>
                    )}
                    { language==="German" && (
                        <>
                            <li>Zuhause</li>
                            <li>Über</li>
                            <li>Galerie</li>
                            <li>Kontakt</li>
                        </>
                    )}
                    { language==="Spanish" && (
                        <>
                            <li>Hogar</li>
                            <li>Acerca de</li>
                            <li>Galería</li>
                            <li>Contacto</li>
                        </>
                    )}
                    { language==="Swedish" && (
                        <>
                            <li>Hem</li>
                            <li>Handla om</li>
                            <li>Galleri</li>
                            <li>Kontakt</li>
                        </>
                    )}
                    { language==="Russian" && (
                        <>
                            <li>Дом</li>
                            <li>Около</li>
                            <li>Галерея</li>
                            <li>контакт</li>
                        </>
                    )}
                    { language==="Chinese" && (
                        <>
                            <li>家</li>
                            <li>关于</li>
                            <li>画廊</li>
                            <li>联系</li>
                        </>
                    )}
                </StyledNavMenu>
            </StyledNavigationMenuContainer>
            <Menu open={open} onClickSetEnglish={onClickSetEnglish} onClickSetFrench={onClickSetFrench} onClickSetGerman={onClickSetGerman} onClickSetSpanish={onClickSetSpanish} onClickSetSwedish={onClickSetSwedish} onClickSetRussian={onClickSetRussian} onClickSetChinese={onClickSetChinese} />
            <StyledPageContentsContainer>
            { language==="English" && (
                <>
                    <h1>Hello!</h1>
                    <p>This is sample text to showcase the language conversion functionality.</p>
                </>
            )}
            { language==="French" && (
                <>
                    <h1>Salut!</h1>
                    <p>Ceci est un exemple de texte pour présenter la fonctionnalité de conversion de langue.</p>
                </>
            )}
            { language==="German" && (
                <>
                    <h1>Hallo!</h1>
                    <p>Dies ist ein Beispieltext zur Darstellung der Sprachkonvertierungsfunktion.</p>
                </>
            )}
            { language==="Spanish" && (
                <>
                    <h1>¡Hola!</h1>
                    <p>Este es un texto de muestra para mostrar la funcionalidad de conversión de idioma.</p>
                </>
            )}
            { language==="Swedish" && (
                <>
                    <h1>Hallå!</h1>
                    <p>TDetta är exempeltext för att visa språkkonverteringsfunktionaliteten.</p>
                </>
            )}
            { language==="Russian" && (
                <>
                    <h1>Здравствуйте!</h1>
                    <p>Это образец текста, демонстрирующий функциональность преобразования языка.</p>
                </>
            )}
            { language==="Chinese" && (
                <>
                    <h1>你好!</h1>
                    <p>这是示例文本，展示了语言转换功能.</p>
                </>
            )}
            </StyledPageContentsContainer>
        </StyledContainerLogin>
    );
}

export default Week6;