import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Wallpaper from './assets/wallpaper.jpg';
// eslint-disable-next-line
import Gif from './assets/gif.gif';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const StyledContainer = styled.div`
    width: 80%;
    margin-left: 10%;
    height: 91.5vh;
`;

const StyledContents = styled.div`
    width: 100%;
    height: 93%;
    padding: 30px 100px;
`;

const StyledLoremGenerator = styled.p`

`;

const StyledModalButton = styled.button`
    width: 100px;
    height: 50px;
    display: block;
    margin: 0 auto;
    margin-top: 15px;
    font-size: 18px;
`;

const ModalOutterWrapper = styled.div`
    animation: 0.1s ${keyframes({from: {opacity: 0}, to: {opacity: 1}})} ease-in-out;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: rgb(0,215,163, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledModalSlideInLeft = keyframes`
    0% {
        transform: translateY(-200px);
        opacity: 0;
    }

    100% {
        transform: translateY(0px);
        opacity: 1;
    }
`;

const StyledModal = styled.div`
    position: fixed;
    border-radius: 15px;
    z-index: 1000;
    width: 35vw;
    height: 50vh;
    animation: ${StyledModalSlideInLeft} 0.5s ease-in-out forwards;
`;

const StyledModalHeader = styled.header`
    display: flex;
    justify-content: flex-end;
    padding: 0.5rem 0.75rem;
    font-size: 24px;

    & span {
        cursor: pointer;
    }
`;

const StyledFlexModal = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -3.5vh;
`;

const StyledModalContent = styled.div`
    width: 60%;
    background-color: #fafafa;
    height: 100%;
`;

const StyledModalImageContainerImage = styled.div`
    width: 40%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${Wallpaper});
`;

const ModalCloserButton = styled.div`
    width: 8%;
    height: 3vh;
    float: right;
    font-size: 32px;
    text-align: center;
    cursor: pointer;
    font-weight: 300;
`;

const StyledModalTitle = styled.div`
    width: 100%;
    height: 30vh;
    margin-top: 5vh;
    text-align: center;
    margin-top: 15vh;

    & p {
        font-size: 18px;
    }

    & h1 {
        font-weight: 300;
        font-size: 32px;
    }
`;

const StyledModalForm = styled.form`
    width: 100%;
    height: 20vh;
    margin-top: 2vh;

    & input {
        width: 30%;
        height: 3vh;
        font-size: 18px;
        margin-left: 15px;
    }
`;

const StyledFormLineEmail = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    & p {
        margin-left: 0px;
    }
`;

const StyledFormLineName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1vh;

    & p {
        margin-left: -45px;
    }

    & input {
        width: 30%;
    }
`;

const StyledFormLineSubmit = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledButton = styled.button`
    color: #000;
    background-color: #00D7A3;
    padding: 0.5rem 1.5rem;
    font-size: 1.5rem;
    font-weight: 300;
    text-align: center;
    border: 0.5px solid #000;
    border-radius: 0.25rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    margin-top: 1.5vh;

    &:hover {
        color: #000;
        background-color: #00FFC2;
    }
`;

const Modal = (props) => {

    const { show, onClose, children } = props;

    const blockClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    return (
        <>
            {show && (<ModalOutterWrapper onClick={onClose}>
                <StyledModal onClick={blockClick}>
                    <StyledModalHeader>
                        Test
                    </StyledModalHeader>
                    {children}
                </StyledModal>
            </ModalOutterWrapper>)}
        </>
    )
}

function Week8() {

    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleClick = () => setShowModal(true);

    return (
        <StyledContainer>
            <Modal show={showModal} onClose={handleClose}>
                <StyledFlexModal>
                    <StyledModalImageContainerImage />
                    <StyledModalContent>
                        <ModalCloserButton>
                            <FontAwesomeIcon icon={faTimesCircle} color="#00D7A3" onClick={handleClose} />
                        </ModalCloserButton>
                        <StyledModalTitle>
                            <p>Love What You See?</p>
                            <h1>Signup to our newsletter!</h1>
                            <StyledModalForm>
                                <StyledFormLineEmail>   
                                    <p>Email:</p><input type="email" placeholder="Email"/>
                                </StyledFormLineEmail>
                                <StyledFormLineName>   
                                    <p>First Name:</p><input type="text" placeholder="Name"/>
                                </StyledFormLineName>
                                <StyledFormLineSubmit>   
                                    <StyledButton type="submit">Submit</StyledButton>
                                </StyledFormLineSubmit>
                            </StyledModalForm>
                        </StyledModalTitle>
                    </StyledModalContent>
                </StyledFlexModal>
            </Modal>
            <StyledContents>
                <StyledLoremGenerator>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel auctor erat. Nulla ut odio ac orci pretium volutpat sed eget velit. Cras tempus dui et nulla elementum tincidunt. Maecenas id magna eu tortor vulputate dictum. Donec porttitor justo vitae mi lacinia pretium. Proin vel ligula leo. Duis magna orci, sollicitudin posuere nulla id, efficitur bibendum dui. Nullam at sagittis mi. Vestibulum ornare massa quis diam accumsan, non semper sapien tincidunt.

Sed malesuada scelerisque neque, in interdum dui mollis ut. Fusce sed quam in turpis dapibus imperdiet. Mauris in erat eu quam interdum blandit. Phasellus ut erat porttitor, bibendum velit ac, porta diam. Nullam aliquet justo diam, vitae finibus lorem rhoncus vitae. Sed luctus et est eget volutpat. Vivamus tempus, est non eleifend iaculis, orci tellus mattis nibh, vel laoreet magna mauris vel lectus. Aliquam erat volutpat. Nam congue enim sit amet turpis eleifend varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec sed diam nibh. Donec urna libero, feugiat eu dui rutrum, mollis aliquet orci. Etiam a mi non odio tincidunt feugiat at ut risus. Donec vel eleifend neque.

Sed pharetra tempus augue, at auctor est feugiat eget. Donec tincidunt in tellus et feugiat. Fusce sed rhoncus dolor, at mollis sem. Suspendisse magna enim, blandit sed est ut, volutpat suscipit sapien. Suspendisse eu metus vel magna ultricies lacinia eget sed neque. Nunc efficitur ut tortor vitae condimentum. Vestibulum feugiat lectus consectetur, interdum nunc at, auctor diam. Phasellus viverra in felis non vestibulum. Nam sed enim non sapien lobortis consectetur non at dolor. Sed vitae vulputate libero, nec ullamcorper neque. Donec id accumsan felis, vel tempor quam. Suspendisse quam dui, dictum at justo in, posuere suscipit ipsum. Quisque sit amet massa nec ligula ultrices congue ut at lacus. Suspendisse sagittis turpis non massa pulvinar sagittis. Aliquam quis ipsum in ante fringilla dictum a in velit. Fusce eu efficitur sem.

Fusce facilisis ante ut maximus viverra. Quisque iaculis sed metus vitae viverra. Aliquam convallis ut sapien id cursus. Nam id mi non felis mattis iaculis a vel elit. Sed in sodales leo. Pellentesque vitae lorem iaculis, malesuada sapien non, iaculis nibh. Donec sollicitudin lectus sit amet sapien pharetra porta.

Nullam dignissim ex a erat vestibulum egestas. Cras iaculis accumsan tortor, sed aliquet massa auctor sed. Proin convallis nunc nisl, a ultricies nulla tempor et. Sed eleifend ultricies odio, a vulputate lorem malesuada et. Nam ac aliquet lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam ultricies in massa blandit tincidunt. Pellentesque eget diam eu justo porttitor ultricies. Integer ornare hendrerit felis, a porttitor leo efficitur et. Morbi turpis dui, iaculis at dui id, varius sollicitudin magna.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus dapibus ipsum velit. Donec eu vestibulum erat, at sollicitudin diam. Donec dignissim nibh nisl, vitae mattis lorem malesuada aliquam. Aliquam in erat at nibh vestibulum iaculis eget a tortor. Ut eget sem a lacus bibendum facilisis. Cras vehicula dolor vel ipsum semper laoreet.

Vestibulum ac nisl nec ligula ultrices tempor. Maecenas consectetur commodo lacus eget sagittis. Phasellus vel felis pretium, posuere velit vitae, pharetra erat. Morbi eget nisl ac arcu dapibus ultricies. Proin eu velit massa. Sed elementum iaculis lobortis. Fusce suscipit accumsan arcu in suscipit.

Morbi vitae pulvinar risus, sed tristique diam. Praesent ac urna purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor fermentum ligula sit amet pretium. Fusce eget magna nisl. Vestibulum eleifend porta risus. Ut consequat lorem vitae nunc accumsan convallis. Etiam congue diam ac nulla gravida, id interdum mi laoreet. Morbi arcu enim, molestie in nunc eu, pellentesque blandit dui. Quisque mollis metus nec sagittis volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Nulla at metus eu erat vulputate rhoncus. Nunc eu aliquet odio. Sed ut venenatis nunc. Donec diam lacus, finibus sed elementum quis, pharetra sed felis. Aenean fermentum sollicitudin mi, ac ullamcorper felis tempus non. Nullam cursus faucibus sapien, sed tristique neque varius eget. Praesent arcu mauris, vulputate nec nunc non, luctus semper quam. Quisque cursus bibendum diam, vel finibus diam condimentum et. Praesent sagittis, nisl in mattis sollicitudin, est velit auctor nibh, quis mollis justo mi at massa. Pellentesque pharetra blandit dapibus.

Sed ultricies congue nunc ac dapibus. Vestibulum congue, mauris id tristique auctor, felis justo dapibus metus, pharetra posuere diam enim at diam. Ut sit amet ultricies nisl, ut gravida eros. Proin semper dolor id massa sollicitudin suscipit. Nunc vel rutrum nulla. Nunc ipsum massa, auctor fringilla nunc a, condimentum placerat quam. Morbi ornare ut elit at euismod. Mauris sit amet metus eget magna sagittis iaculis sit amet id lectus.

Praesent sagittis metus eu magna viverra, in tristique eros pharetra. Praesent bibendum libero nunc, a condimentum lectus sodales in. Duis scelerisque velit quam, eget finibus enim ultricies facilisis. Sed sed feugiat mi. Nunc imperdiet risus odio, vitae vehicula metus lacinia vel. Vivamus efficitur quam sodales pulvinar molestie. Cras semper mauris ut lacus viverra dictum. Nulla a faucibus nibh. Vestibulum ac justo consectetur, auctor urna non, aliquet neque. Proin pretium lorem neque, a egestas ex gravida in. Sed lobortis suscipit accumsan. Vestibulum est eros, maximus vitae turpis non, iaculis imperdiet ante. Donec sit amet diam a dolor molestie sollicitudin sit amet euismod enim. Nullam venenatis sapien non magna ultricies, at semper nisl aliquam. Vivamus et augue vel tellus hendrerit tristique in nec ipsum. Maecenas finibus euismod sapien, vitae congue eros tristique eget.

Morbi et tempus mi. Suspendisse viverra orci diam, at sodales risus scelerisque eget. Nulla id nunc et orci consequat luctus. Suspendisse at turpis sollicitudin, suscipit dui at, posuere mauris. Sed purus dui, consectetur eget tellus ut, maximus aliquam tellus. Nulla lobortis, metus scelerisque eleifend molestie, arcu enim convallis mauris, in placerat est diam blandit nisi. Vivamus non malesuada lectus.

Vestibulum et est fermentum, efficitur elit condimentum, tempus tortor. Nulla sed posuere dolor. Curabitur laoreet mi in mi dignissim lobortis. Integer vulputate ante neque, eget vehicula arcu pharetra in. Nunc pharetra lobortis lectus vel hendrerit. Duis suscipit est vel nulla convallis, vel dictum neque posuere. Aliquam iaculis felis sit amet nibh consequat tempor. Sed aliquet ex ut urna condimentum eleifend. Suspendisse commodo mi a orci finibus aliquet. Donec finibus quam nunc, id accumsan diam dictum ac. Mauris dignissim nisi malesuada eleifend suscipit. Ut sagittis, erat in fermentum luctus, lectus neque egestas nibh, vitae dapibus nisi arcu quis dolor. Duis eget tortor a est fermentum vulputate non eleifend ex. Donec ut ornare justo, non gravida arcu. Vivamus efficitur feugiat augue, a dictum odio convallis in. Etiam dapibus vel urna ac dictum.

Phasellus ac libero sit amet urna ornare aliquet placerat ac tortor. Curabitur non enim ac metus laoreet fringilla. Integer posuere dapibus purus, sit amet hendrerit massa ultricies sed. In malesuada enim non ipsum dignissim elementum. Etiam massa lacus, blandit placerat quam eu, aliquam blandit justo. Praesent at magna pretium, tempor nibh id, iaculis nisl. Pellentesque id bibendum ligula. Integer accumsan arcu tempus, aliquam lacus ac, maximus lacus. Nunc bibendum maximus arcu, non fringilla lorem iaculis fermentum. Maecenas aliquam tortor vitae consequat iaculis.

Praesent ac bibendum erat, nec eleifend odio. Phasellus justo massa, gravida id volutpat et, ullamcorper ac eros. Quisque convallis dolor ac nisi sollicitudin egestas. Aliquam quis nisl ipsum. Praesent neque urna, accumsan vel viverra a, pretium sit amet nibh. Vivamus egestas vulputate nulla, ut facilisis lorem eleifend a. Fusce porta sed lacus vitae varius. Sed fringilla venenatis tincidunt. Duis non nunc sed purus sagittis iaculis vel vitae nisl. Integer fermentum, nibh nec rhoncus sollicitudin, massa nunc pellentesque sem, id congue neque ipsum et metus. Proin dignissim mi ac tristique feugiat. Donec dictum facilisis orci, at pretium enim. Morbi ornare, odio in suscipit vehicula, enim elit rhoncus lorem, condimentum aliquet est dui non neque.

Sed accumsan velit nec diam tempus sagittis. Phasellus sit amet nulla augue. Morbi dui lorem, auctor et ex ut, ornare aliquam lorem. Aenean tincidunt gravida augue quis maximus. Nullam vitae ligula orci. Etiam ut malesuada dui. Nulla quis velit ut orci mollis elementum in tempus ipsum. Sed pellentesque, felis eget viverra fermentum, nulla felis mollis mi, et cursus lacus leo vel lacus. Proin iaculis pharetra augue, eget auctor nisi vehicula eu. Aenean justo sem, euismod non suscipit vitae, congue sit amet enim. Quisque efficitur, dolor et vehicula fringilla, ex felis venenatis quam, eu scelerisque ipsum nisl in odio.

Aliquam feugiat dapibus porta. Nulla id placerat dolor. Curabitur sed sodales nibh, id tempus arcu. Morbi consectetur, massa ut vestibulum viverra, lectus mauris rutrum felis, ut condimentum enim augue id massa. Etiam rhoncus ex nec leo finibus, et accumsan ante venenatis. Sed et ullamcorper odio. Phasellus eget mi ac leo pretium tempus vel vel ligula. Curabitur tincidunt, lorem eu rhoncus lacinia, arcu enim ultricies ex, vitae egestas nibh quam eget justo. Sed vestibulum odio non metus hendrerit, et iaculis nisi fermentum. In maximus elit et dolor viverra, quis dignissim massa semper. Donec volutpat odio ut nisi suscipit pellentesque. Nulla facilisi. Pellentesque erat lectus, iaculis eu turpis eu, semper pretium velit. Praesent vel turpis turpis.

Sed nec vestibulum nulla. Aliquam diam dolor, molestie nec tellus dictum, egestas convallis leo. Nam sit amet pretium velit. Morbi congue enim eget quam ultricies interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In gravida lectus non venenatis lacinia. Nam consequat leo a odio luctus hendrerit. In scelerisque metus ac dolor laoreet mattis. Sed tincidunt fermentum bibendum. Nunc sem quam, consequat quis risus eget, hendrerit gravida nisi. Pellentesque in orci risus.

Morbi aliquam scelerisque nisl, vel viverra leo auctor vel. Fusce ex ipsum, laoreet a nisi ac, molestie semper mi. Vestibulum nec lacinia dui, quis molestie eros. Mauris ultricies auctor suscipit. Aenean ut massa vel justo dapibus mollis. Curabitur et elit sed lorem commodo pretium eget et tellus. Nullam ut volutpat velit. Suspendisse rutrum vestibulum purus a vehicula. Suspendisse porttitor nibh sed dui pulvinar, eu tincidunt neque condimentum. Phasellus id lacus nunc. Suspendisse risus lacus, lacinia sed felis id, lacinia pharetra magna. Vestibulum eleifend arcu et orci aliquet, ac imperdiet nunc iaculis. Curabitur pellentesque ut lacus eu mattis.

Nunc condimentum placerat urna quis accumsan. Donec consectetur mauris metus. Etiam ac tincidunt ante. Pellentesque suscipit semper tellus id aliquam. Etiam placerat id odio sagittis commodo. Maecenas pellentesque orci sed massa dapibus, id aliquet libero tincidunt. Sed quam tellus, condimentum nec massa id, hendrerit tincidunt dui. Etiam venenatis elit nisl, vel sodales nisi volutpat id.

Nam ac nisl augue. Suspendisse elit tellus, luctus at imperdiet ut, consequat vel enim. Pellentesque semper pellentesque turpis, nec porta tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Aliquam egestas finibus nunc, posuere dapibus lectus efficitur quis. Integer purus massa, volutpat sit amet nisl a, semper euismod lacus. Donec quis egestas sem, at dapibus nisl. Vestibulum sodales rutrum accumsan. Nullam sit amet ullamcorper libero. Nunc finibus tincidunt orci eu posuere. Nulla elementum non orci malesuada faucibus. In eros justo, gravida a ultricies in, bibendum vel orci. Maecenas sed rutrum ipsum. Curabitur laoreet lacus sed arcu fermentum porta. Vivamus metus risus, rhoncus quis vulputate ut, tincidunt eu elit.

Sed ut pulvinar libero, non euismod orci. Morbi interdum elit hendrerit, vulputate magna nec, condimentum nisl. Donec vitae venenatis justo, eu condimentum erat. Phasellus malesuada, neque vel pellentesque vestibulum, turpis sem dignissim leo, ac pretium quam mi ac tortor. Aenean nec porttitor purus. Nullam tempus pulvinar posuere. Integer orci urna, elementum quis porttitor ut, bibendum in tellus. Nulla eget elit interdum, sollicitudin orci ac, rhoncus orci. Mauris ornare orci lectus. In gravida enim non viverra scelerisque. Donec ultrices rhoncus metus, eu ultrices nibh gravida eget. Nunc dapibus orci ut dui ultricies lobortis. Quisque gravida tristique lacus, sed gravida felis. Etiam id fringilla ex. Suspendisse nisl erat, lacinia tincidunt sapien at, malesuada blandit eros. Suspendisse a feugiat erat.

Cras condimentum ligula ac blandit euismod. In hac habitasse platea dictumst. Phasellus et quam quam. Suspendisse potenti. Praesent pulvinar nibh accumsan magna consectetur, vel condimentum odio congue. Integer pellentesque sed diam vitae auctor. Sed tristique nulla erat, at tincidunt libero sagittis sed. Nam eu rhoncus erat. Phasellus interdum, tellus id sollicitudin scelerisque, nulla mi varius ipsum, id ultrices nunc lacus sed diam. In consectetur magna odio, vitae finibus purus sagittis vel. Pellentesque at odio eget dolor volutpat interdum. Sed elementum orci fermentum leo vestibulum, ac sagittis nibh dictum. Aenean scelerisque euismod quam, vel aliquam quam varius ac. Sed vel sapien orci. Vivamus eleifend aliquam mauris, sit amet suscipit ex ullamcorper eu. Proin mattis ut magna eu tincidunt.
                </StyledLoremGenerator>
            </StyledContents>
            <StyledModalButton onClick={handleClick}>
                Newsletter
            </StyledModalButton>
        </StyledContainer>
    );
}

export default Week8;