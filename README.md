<h1 align="center">
  Interaction Design (COM525) Component Production Portfolio
</h1>

![COM525 Main Menu](https://i.imgur.com/MghGUUz.png)

<h3 align="center">
  Summary
</h3>

This portfolio documents the research, planning and development of five interactive React components commonly used in modern web development. Video evidence of each component working alongside the coding required to accomplish this is also presented. The five chosen components are interactive and scalable, to allow for usage on multiple platforms.

---

<h2 align="center">
  Component 1: Buttons
</h2>

![Button Component Completed](https://i.imgur.com/HWJks92.png)

<h3 align="center">
  Research
</h3>

My first component was developed in week 3. Buttons are essential to any website,  allowing users to interact with and navigate through the website. While researching current trends in button design, a particular emphasis on states became clear. Allocating additional styling to accommodate for user interactions (such as clicking or hovering) further provides users with the necessary indications of what elements are interactable. As stated by Nick Babich ([Link](https://uxplanet.org/7-basic-rules-for-button-design-63dcdf5676b4), 2018), "users need to know instantly what is ‘clickable’ and what’s not. Every item in a design requires effort by the user to decode. Generally, the more time needed for users to decode the UI the less usable it becomes for them." From this it became clear that while states enhance your pages features, they're also necessary to ensure user retention and engagement with a website remains consistent. Further research into the design of buttons indicated there was a few commonly used designs, such as:

- Rounded buttons.
- Ghost/line buttons.
- Floating Action Buttons (FABs).
- Icon and label buttons.
- Icon buttons.

As a result of my research, common conventions of button design became clear. Best practices varied depending on the design of the button, however square buttons & rounded edges are "recommended because it is easy for users to recognize them as buttons" ([Link](https://www.uxpin.com/studio/blog/button-design/), 2020). 

<h3 align="center">
  Evaluation of guidelines
</h3>

Material Design provides updated design guidelines for component development. Their documentation for buttons is extensive, including best practices for each state / button type (as mentioned prior.) Sizing specifications are also presented on the site, as shown below.

<p align="center">
  <img src="https://i.imgur.com/Nr035YV.png" alt="button design guidelines">
</p>
<h5 align="center">
  <a href="https://material.io/components/buttons#specs">Full Button Design Guidelines Source Link</a>
</h5>

Opting for a user-centric design methodology appears to be essential. Design constraints such as sizing, text formatting and colour theory are all considerations covered by the Material Design guidelines. Whilst the guidelines further elaborate on each of these, the clear indication was to ensure buttons appeared to enhance the page, without becoming the central focus of it. Strong calls to action such as primary buttons, allow pointed and targeted information to be presented to users, as clarified by O'Reilly ([Link](https://www.oreilly.com/library/view/ux-for-beginners/9781491912676/ch67.html), 2020) when stating "Buttons that execute primary actions - primary buttons -should be as visible as possible". Typography used in modern button development is often capitalized to ensure clarity and present this call to action as significant. Proportionate typography & clear colour schemes are also essential, whilst indication of state changes (such as hovering) is often achieved through colour changes or size manipulation. 

<h3 align="center">
  Planning & design prototyping
</h3>

To accommodate all current styles of button designs, 3 variants were prototyped. state management was also taken into consideration at the prototyping stage, with variants created for hovering and clicking upon the buttons. As gleaned from earlier guidelines, colours with visible, similar shades are preferred to account for interaction. Figma was used to model these components, utilizing a 'house style' of typography and colours throughout. Particular focus will be placed on icon buttons for the purpose of mobile use. These buttons will expand on hover, revealing additional typography further indicating the buttons purpose. 

![Button prototyping In Figma](https://i.imgur.com/kwsKDXJ.png)

<h3 align="center">
     Coding
</h3>

```react
import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

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
```

``` react
export const Button = (props) => {
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
```

These components were created for the different types of button. They used props in order to ensure they could be exported and used efficiently within other pages of the website.

``` react
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
```

<h3 align="center">
     Working Component Video: Buttons
</h3>

[![](https://i.imgur.com/kzUtpph.png)](https://www.youtube.com/watch?v=H9O7x9IBKOQ&feature=youtu.be)
<h5 align="center">
  <a href="https://youtu.be/H9O7x9IBKOQ">Working Button Component Video Link</a>
</h5>

<h3 align="center">
     Feedback & Reflection
</h3>

Initial feedback on my designs from classmates indicated that the colour palette made the button text illegible. This feedback was remedied by creating another set of buttons with different typography & colours, and carrying out a small-scale A/B test, resulting in the new buttons emerging triumphant. Purely from a conceptual standpoint, the components function as intended. They are scalable, clear and incorporate different states to enhance the components. 

Developing the components using props & scalable units allows for repeated use, making them easily adaptable to any use scenario. The main critique I have of my components, and the change I'd make to my approach, had I the opportunity, would be to use a full icon menu. As stated by Joe Natoli, "For mobile use, icons make excellent touch targets. When sized large enough (e.g. 48 px), they’re easily activated. And as a bonus, this also makes it very easy to hit them with a desktop or laptop cursor." ([Link](https://givegoodux.com/the-right-way-to-use-icons-in-your-ui/), 2020). An example of an icon menu can be seen below. This type of menu is prominent in mobile applications.

<p align="center">
  <img src="https://i.imgur.com/DIXNUtg.png" alt="Google Icon Menu">
</p>
<h5 align="center">
  <a href="https://www.google.co.uk/">Google Mobile Icon Menu Source Link</a>
</h5>

---

<h2 align="center">
  Component 2: Login Form
</h2>

![Final Login Form Designs](https://i.imgur.com/oBLDXJU.png)

<h3 align="center">
  Research
</h3>

All modern websites utilize forms to an extent, whether it be to login, checkout, or sign up to a newsletter. As stated by UsabilityGeek, "If done right, it can be the trigger to a massive user retention. If done poorly it can have the exact opposite effect." ([Link](https://usabilitygeek.com/perfect-mobile-app-login-screen/), 2020). Best practices for login screens became apparent through research, such as: 

- Simplified registration.
- Allow login via external accounts (such as Gmail, Facebook, etc).
- Use email instead of usernames for signing in.
- Facilitate password remembrance & resetting.

As confirmed by the Adobe Blog, "Successfully logging into their account is extremely unlikely to be your users’ primary task." This clearly emphasizes that logging in must be efficient, and an action taken to achieve the users goal, not as the goal itself. Another result of my research was the newfound emphasis on 'quality of life features' such as forgotten passwords, remembering passwords, logging in from external sites, etc. Because of this, these features were implemented within my login form. 

<h3 align="center">
  Evaluation of guidelines
</h3>

Design guidelines for login form design vary depending on their intended use. Generally, a clear emphasis on where to login & the information required to do so is essential. This could include providing users with placeholder text in each input box. Another design guideline necessary is the ability for users to toggle the discretion of their password, such as being able to reveal the text.

<p align="center">
  <img src="https://i.imgur.com/uW6UR7f.png" alt="password example">
</p>
<h5 align="center">
  <a href="https://uxplanet.org/18-ux-design-tips-for-registration-and-login-forms-f897557358ba">Login Form Password Guidelines Source Link</a>
</h5>

As shown above, another design guideline is to allow for space to provide users with error messages to further assist their login / signing up process. This includes specified constraints or incorrect inputs from the user. As reaffirmed by Nomensa ([link](https://www.nomensa.com/blog/2010/ux-design-four-ways-display-error-messages), 2010), "The error message needs to be clear, precise, short and punchy. Users should be able to immediately understand what ‘mistakes they have made’ and how to recover the error." My login form will allow for the use of error messages and verification. 

<h3 align="center">
  Planning & design prototyping
</h3>

Figma was used to design & simulate a users login experience. The login form will be developed using a mobile first approach, with its intended implementation intended to be in a mobile application. This will be reflected in Figma using mobile-sized frames. The execution of this can be seen below. 

![login design in Figma](https://i.imgur.com/cu0VLvg.png)

Each row of screens is designed to accommodate each scenario a user can take. Shown below is the interactions used between pages to simulate a working prototype, along with a video of the working prototype. 

![login design function in Figma](https://i.imgur.com/iqn8AcP.png)

[![](https://i.imgur.com/UE7qE35.png)](https://youtu.be/ULI6SPfJxdA)
<h5 align="center">
  <a href="https://youtu.be/H9O7x9IBKOQ">Login Form Component Prototype Video Link</a>
</h5>

<h3 align="center">
     Coding
</h3>

``` react
import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Experimental //
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

// Images //
import UserIconSrc from './assets/User_ICON.png';
import OpenEye from './assets/Eye_ICON.png';
import ClosedEye from './assets/EyeClosed_ICON.png';

// eslint-disable-next-line
import success from './assets/Success_ICON.png';

// Regular Expression Description //
// The password's first character must be a letter, 
// it must contain at least 4 characters and no more 
// than 15 characters and no characters other than 
// letters, numbers and the underscore may be useDebugValue.

const schema = yup.object().shape({
    email: yup.string()
    .required("Email is required")
    .min(5, "Must be between 5-40 characters")
    .max(40, "Must be between 5-40 characters")
    .email("Not a valid email"),

    password: yup.string()
    .required('Password is required')
    .min(5, 'Must be between 5-20 characters')
    .max(20, 'Must be between 5-20 characters')
    .matches( /^[a-zA-Z]\w{3,14}$/, "Must be alphanumeric"),
  });
```

Using Yup and useform allowed for a customisable form with configurable constraints. As shown here, constraints such as a minimum & maximum length, character set and whether information is required can be configured.

``` react
const [showPassword, setShowPassword] = useState(false);
    const [start, setStart] = useState(true);
    const [submitted, setSubmitted] = useState(false);
    const [login, setLogin] = useState(false);
    const [forgotPassword, setForgotPassword] = useState(false);
    const [passwordRequest, setPasswordRequest] = useState(false);

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        setSubmitted(!submitted)
    }

    const LoginContinue = () => {
        setLogin(!login);
        setSubmitted(!submitted);
    }

    const handleClick = () => {
        setShowPassword(!showPassword);
    }

    const Logout = () => {
        setSubmitted(false);
        setLogin(false);
        setForgotPassword(false);
        setPasswordRequest(false);
        setStart(true);
    }

    const passwordForgotten = () => {
        setForgotPassword(true)
        setStart(false);
    }

    const passwordReset = () => {
        setForgotPassword(false);
        setPasswordRequest(true);
    }
```

These functions detect user interactions and update the state accordingly. Doing so allowed for multiple screens to be displayed whilst remaining on the same page. Single page applications are preferential for React development, as these are more efficient & scalable.

``` react
{!submitted && !login && start && (
            <form onSubmit={handleSubmit(onSubmit)}>
                <StyledTop>
                    <TopTitleLogin>
                        <TopTitleTextLogin>Login</TopTitleTextLogin>
                    </TopTitleLogin>
                </StyledTop>
                <StyledIconSplash>
                    <UserIcon src={UserIconSrc} alt="User Icon" />
                </StyledIconSplash>
                <StyledInputContainer>
                    <LoginInput placeholder="username / email" type="text" name="email" ref={register({ minLength: 5, maxLength: 40 })} />
                    <StyledErrorMessage>{errors.email?.message}</StyledErrorMessage>
                </StyledInputContainer>
                <StyledInputContainer>
                    <LoginInput required placeholder="password" type={showPassword ? "text" : "password"} name="password" ref={register({ pattern: /^[a-zA-Z]\w{3,14}$/, minLength: 5, maxLength: 20 })} />
                    <PasswordReveal src={showPassword ? ClosedEye : OpenEye} alt="Show / Hide Password" onClick={handleClick}/>
                    <StyledErrorMessage>{errors.password?.message}</StyledErrorMessage>
                </StyledInputContainer>
                <StyledPasswordCheckbox>
                    <PasswordRetentionCheckbox type="checkbox" />
                    <PasswordRetention>Remember Password</PasswordRetention>
                    <PasswordForgot href="#resetpassword" onClick={passwordForgotten}>FORGOT PASSWORD?</PasswordForgot>
                </StyledPasswordCheckbox>
                <StyledSubmitContainer>
                    <SubmitButton type="submit">Submit</SubmitButton>
                </StyledSubmitContainer>
                <SignupSplashContainer>
                    <SignUpPartOne>No Account?</SignUpPartOne>
                    <SignUpPartTwo href="#signup">Sign Up</SignUpPartTwo>
                </SignupSplashContainer>
            </form>
            )}
```

``` react
{!forgotPassword && !login && !start && passwordRequest && (
            <form onSubmit={handleSubmit(onSubmit)}>
                <StyledTop>
                    <BackArrow>
                        <FontAwesomeIcon icon={faChevronLeft} color="#000" fixedWidth onClick={Logout} />
                    </BackArrow>
                    <TopTitleLogin>
                        <TopTitleTextLogin>Success</TopTitleTextLogin>
                    </TopTitleLogin>
                </StyledTop>
                <StyledIconSplash>
                    <UserIcon src={success} alt="User Icon" />
                </StyledIconSplash>
                <PasswordResetConfirm>Please check your email for further instructions</PasswordResetConfirm>
                <SignupSplashContainer>
                    <SignUpPartOne>Didn't Recieve?</SignUpPartOne>
                    <SignUpPartTwo href="#signup">Resend</SignUpPartTwo>
                </SignupSplashContainer>
            </form>
            )}
        </StyledContainerLogin>
```

Conditional rendering was utilized to display the various necessary screens (such as login, logged in, and password reset.)

<h3 align="center">
     Working Component Video: Login Form
</h3>

[![](https://i.imgur.com/mm8seVd.png)](https://youtu.be/PB02KFfZp0o)
<h5 align="center">
  <a href="https://youtu.be/PB02KFfZp0o">Login Form Component Prototype Video Link</a>
</h5>

<h3 align="center">
     Feedback & Reflection
</h3>

This component represented a resounding success. The component was fully functional, with quality of life features such as forgotten password & password retention. Conditional rendering was utilized to ensure the component remained as a single page application, whilst displaying continually relevant information. Utilization of yup allowed for necessary constraints on password & email information to be enacted, such as length, format, and character set. The main issue regarding my login form is the lack of an option to sign-in using external methods, such as Facebook or Google. Whilst this feature was reflected in my prototyping, the implementation of it became too strenuous. Next time, utilizing an external sign-in method would be the preferred additional approach, this can be achieved by using the Facebook for Developers documentation available [here](https://developers.facebook.com/docs/facebook-login).

<h2 align="center">
  Component 3: Dropdown Menu
</h2>
<p align="center">
  <img src="https://i.imgur.com/8tFJjc5.png" alt="Completed Dropdown Menu Component">
</p>

<h3 align="center">
  Research
</h3>

Dropdown menus are often used to toggle between states of various components or aspects of the website, such as colour themes, fonts or languages. As confirmed by DesignSmarts ([link](https://designsmarts.co/the-problem-with-dropdowns/), 2020) by saying "Dropdowns are great if you need to give a user options with very little space. The dropdown can be very small and can pack a lot of information in a small space." Whilst components such as radio buttons or toggle switches may be used as an alternative, these components are not scalable, only allowing for a limited number of options. What quickly became clear from my research, were the best practices. These mainly focused on the formatting of the options available, ensuring they're clear, logically ordered & descriptive. 

<h3 align="center">
  Evaluation of guidelines
</h3>

Owing to the simplicity of the component, there are limited guidelines available regarding its usage. Guidelines focused mainly on its use, promoting accessibility as the primary reason for implementation. Being able to offer a wide range of accessibility options to users greatly broadens a websites audience, as identified by  the ONS ([link](https://www.ons.gov.uk/businessindustryandtrade/itandinternetindustry/bulletins/internetusers/2019#:~:text=91%25%20of%20adults%20in%20the,%2C%2078%25%20of%20disabled%20adults.), 2019) in saying "In 2019, the number of disabled adults who were recent internet users reached over 10 million for the first time, 78% of disabled adults." For this reason, I decided to focus my component on an accessibility feature. Sizing guidelines were later identified through Material Design, the likes of which can be seen below. 

![material design dropdown](https://i.imgur.com/0veIq9G.png)
<h5 align="center">
  <a href="https://material.io/components/menus#specs">Full Dropdown Menu Design Guidelines Source Link</a>
</h5>

<h3 align="center">
  Planning & design prototyping
</h3>

Once the thematic of accessibility was decided upon, the list of options quickly narrowed down to the following:

- Language Selection.
- Colour blindness settings.
- Font / font sizing.
- Audio settings.

In this instance, a language selection was decided upon, as I believe it is essential to any website intending to appeal to an international audience. Whilst most websites adapt its contents to the users respective language upon loading the page, this component is purely to act as an additional option to change this. Whilst there is (potentially) no limit on how extensive this component could be (or simply put, how many languages it could support,) In the interest of simplicity this will be limited to 10 common languages internationally. Prototyping this in Figma was relatively easy, hover & click states were implemented to accommodate micro-interactions to communicate to the user their intended selection. This can be seen below.

![dropdown menu Figma prototype](https://i.imgur.com/98dG88Y.png)

[![](https://i.imgur.com/ooGBZLf.png)](https://youtu.be/2GY7DHYaOYk)
<h5 align="center">
  <a href="https://youtu.be/2GY7DHYaOYk">Dropdown Menu prototype Example Video Link</a>
</h5>

<h3 align="center">
  Coding
</h3>

``` react
import React, { useState } from 'react';
import styled, {keyframes} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Icons //
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
```

``` react
const StyledNavMenu = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    width: 80vw;
    float: right;
    font-size: 32px;
    font-weight: 500;
    margin-right: 0%;
    margin-bottom: 5px;
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
```

``` react
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
```

Using multiple props in a component allowed these to be accessed from other local components. Each prop allowed for conditional re-rendering of all text content on a page dependent on the language selected from the dropdown menu.

``` react
const [open, setOpen] = useState(false);
    const [language, setLanguage] = useState("English");

    const handleClick = () => {
        setOpen(!open);
    }

    const onClickSetEnglish = () => {
        setLanguage("English");
        setOpen(!open);
    }
```

The above process was repeated for each language, determining which language was selected through the menu.

``` react
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
```

``` react
{ language==="English" && (
                <>
                    <h1>Hello!</h1>
                    <p>This is sample text to showcase the language conversion functionality.</p>
                </>
            )}
```

The above process was also repeated for each language, with the appropriately modified content replacing the english text.

<h3 align="center">
     Working Component Video: Dropdown Menu
</h3>

[![](https://i.imgur.com/B9HIuKU.png)](https://youtu.be/ytzvy7p7XEw)
<h5 align="center">
  <a href="https://youtu.be/ytzvy7p7XEw">Dropdown Menu Working Example Video Link</a>
</h5>

<h3 align="center">
     Feedback & Reflection
</h3>

This component functions arguably more effectively than any of the other components featured in this portfolio. The selection of languages featured within the component offer a wide range of options for a large audience. The component was implemented with minimal content, only featuring a basic navigation menu and some splash text. This was implemented mainly for example purposes to demonstrate the success of the component. Feedback received from this component was generally positive, with only a minor change regarding the languages available, with additional options being added to remedy this. 

Further feedback received post-production identified that further indication of the option being hovered over by the user would be preferred. This could be achieved by highlighting the background colour of the option on hover. This is the main change I would make, should I reattempt this or change it. Despite this, overall I feel that this is a successful component, and I have achieved precisely what I set out to do.

<h2 align="center">
  Component 4: Modal Dialog box
</h2>
<p align="center">
  <img src="https://i.imgur.com/NK9GQBs.png" alt="modalfinal">
</p>

<h3 align="center">
     Research
</h3>

Researching this component identified two key types of dialog box. Modal & modeless boxes can be used on websites and applications, with each achieving a different goal. Simply put, a modeless box allows users to utilize and interact with the parent window without being impacted by its presence. In contrast to this, a modal box is designed to prevent users from interacting with any other elements on the page, forcing a 'call-to-action' or invoking a response from the user. A common usage example of this is to prompt visitors to subscribe to a recurring newsletter or advertising media. As concluded by envatotuts ([link](https://webdesign.tutsplus.com/articles/modal-and-modeless-boxes-in-web-design--webdesign-2282), 2012), "Always start a design by trying to use modeless boxes whenever you can... they are unintrusive and allow a user to work in their own way." Whilst modeless boxes appeared to be suitable for most usage cases, my component was intending to prompt users to sign up to a newsletter, so a modal dialog box is more suitable.

Another essential use for modal dialog boxes is through notifying users of a websites cookies policy, and allowing them to accept or deny this policy. Whilst the majority of users blindly accept or close these windows, they are still essential to cater to those who would benefit from them. 

<h3 align="center">
  Evaluation of guidelines
</h3>

As stated by Material Design ([link](https://material.io/components/dialogs#usage), 2020), "Dialogs are purposefully interruptive, so they should be used sparingly." It quickly became clear that the response a user chooses to take regarding the dialog box, should not negatively impact their ability to interact with the website. Smooth entry and exit transitions were notably present in all guideline documentation presented, despite being solely for aesthetics. Having clear and visible information presented to the user immediately is also essential, as well as a method for closing the pop-up swiftly, to ensure it remains as unintrusive as possible. Information gleaned from the guidelines presented to me focus on ensuring relevant information is conveyed in a visually appealing - yet clear, manner, while not inherently negatively impacting the users experience whilst using the site. Dialog boxes are essential aspects of any mobile application, with any action taken on most popular applications being accompanied by a dialog box, often acting as a confirmation or a request for information, such as adding a new contact. 

<p align="center">
  <img src="https://miro.medium.com/max/700/1*u-PKrM6xROs5P5Gihurkwg.png" alt="exampledeletebutton">
</p>
<h5 align="center">
  <a href="https://medium.com/@arunkumar_c/designing-confirmation-dialog-box-for-web-632a1876b907">Example Modal Alert Box Source Link</a>
</h5>

<h3 align="center">
     Planning & Design Prototyping
</h3>

During the planning stage, I established that my dialog box would prompt users to sign up to a newsletter or subscribe to regular updates. It would enable them to do this by providing a name & an email, through which they would receive communications. Utilizing the same shade of green present in all other components throughout the portfolio allows for cohesion and easy implementation onto a live website. Prototyping took place in Figma, utilizing the overlay feature to simulate a modal dialog box appearing over a websites contents. This simulation worked flawlessly, almost perfectly replicating the intended design. A video of this can be seen below.

<p align="center">
  <img src="https://i.imgur.com/Ii4tNvx.png" alt="modaldialogprototype">
</p>

As shown here, the right screen is designed to emulate a functional website, which for the purpose of replicating the modal dialog, also provides a prompt button to display the dialog box. The second screen is then projected on top of the page, only closing if the user interacts with the close button. 

[![](https://i.imgur.com/Hglp8Lx.png)](https://youtu.be/lP1rFW23TE4)
<h5 align="center">
  <a href="https://youtu.be/lP1rFW23TE4">Modal Dialog Box Prototype Example Video Link</a>
</h5>

<h3 align="center">
  Coding
</h3>

```react
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
```

```react
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
```

```react
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
```

A basic toggling state was used to display the modal dialog box. This could also be closed using the appropriate methods once the dialog box was visible.

<h3 align="center">
     Working Component Video: Modal Dialog Box
</h3>

[![](https://i.imgur.com/LMYYbZj.png)](https://youtu.be/xkQ-BU5HR08)
<h5 align="center">
  <a href="https://youtu.be/xkQ-BU5HR08">Modal Dialog Box Working Example Video Link</a>
</h5>

<h3 align="center">
     Feedback & Reflection
</h3>

Unlike my previous components, I am not overall totally content with the outcome of this component. From a conceptual point of view, it is fully functional and achieves what is expected of it, however it lacks the detail & complexity to validate itself as an advanced component. The main aspect missing from the component is the lack of any real verification on the email input area of the component. I also feel that the component could be far more fluid in its animation both entering and exiting the screen. If I was to undertake the design process of this component again, I wouldn't attempt to create a newsletter or cookies modal dialog box, but instead focus on emulating a mobile application, utilising multiple instances of simpler dialog boxes, such as those displayed below. 

![dialogs](C:\Users\Jordan\Desktop\ID_writeup\dialogs.PNG)
<h5 align="center">
  <a href="https://material.io/components/dialogs#usage">Example Mobile Application Modal Dialog Boxes Source Link</a>
</h5>
---

<h2 align="center">
  Component 5: Toggle Switch
</h2>

![togglefinal](C:\Users\Jordan\Desktop\ID_writeup\togglefinal.PNG)

<h3 align="center">
     Research
</h3>

The final component documented in this portfolio was a toggle switch. These are often used to affect the look of a website or toggling a user setting. The function of this component must compose of two mutually exclusive states, in that it can either be active or disabled. Toggling user settings can be an effective use of this component, enabling or disabling settings accordingly. The creation process of this component is more complex than similar components (such as checkboxes, or dropdowns) as HTML provides no default element to support a toggle switch creation, "Therefore, the implementation of switches usually requires additional HTML markup and CSS to create the switch interface and Javascript for the interactivity." ([link](https://www.queness.com/post/14585/toggle-switches-in-web-development), 2013).  

A common usage case for toggle switches is the ability to toggle a colour scheme for a website, namely 'dark-mode' and 'light mode.' This option is essential in providing an accessible site for a wider range of users, as some users may find bright websites with darker text illegible, or vice-versa. 

<h3 align="center">
  Evaluation of guidelines
</h3>

There are a number of guidelines & principles regarding the design of a toggle switch. Toggle switches should always display a default value, with labels being clear & indicative of their use.  Actions triggered as a result of the toggle should take effect immediately, to clearly communicate to the user that their action was successful. Remaining consistent to commonly used design systems is essential to the ease of use. Ensuring the toggle consists of two clearly defined states, with a toggle being visually represented by the circle sliding to the opposite side it was on prior. Examples of this can be seen below.

![](https://uxmovement.com/wp-content/uploads/2019/08/toggle-system-state.png)

<h5 align="center">
  <a href="https://uxmovement.com/mobile/stop-misusing-toggle-switches/">Toggle Switches In Action Source Link</a>
</h5>

A toggle switch is only appropriate if the following conditions are met: ([link](https://uxmovement.com/mobile/stop-misusing-toggle-switches/), 2019)

- Its use would be "Applying a system state, not a contextual one".
- it'd be "Presenting binary options, not opposing ones".
- and its use would be in "activating a state, not performing an action"

<h3 align="center">
  Planning & design prototyping
</h3>

Whilst documenting the design in Figma was not difficult to do (along with the animated user interactions using states), Further thought had to be considered on the best approach for developing the functional component. Unlike other components featured, the lack of official support through an HTML element infers that a bespoke element must be created using existing HTML features (such as divs), styling to position and size it, and react state management to toggle between the two options. The Figma prototype can be seen below:

![toggleswitchplanning](C:\Users\Jordan\Desktop\ID_writeup\toggleswitchplanning.PNG)

As seen in the image above, the usage of the toggle switch is emulated by creating two identical pages (only differentiating by the changes the switch would cause) and navigating between the two pages based when a user clicks or drags. 

[![](https://i.imgur.com/Om3ycD8.png)](https://youtu.be/rXzXDssnhAs)
<h5 align="center">
  <a href="https://youtu.be/rXzXDssnhAs">Toggle Switch Working Prototype Video Link</a>
</h5>

<h3 align="center">
  Coding
</h3>

```react
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
```

```react
const time = '0.25s';
const setAnimation = (from, to) => keyframes({ from: from, to: to });
```

Animation duration and syntax was assigned as a variable to make reusability efficient. 

```react
const StyledContainer = styled.div`
    animation: ${time} ${({ showBackground }) => (showBackground && setAnimation({backgroundColor: '#fff', color: '#333'}, {backgroundColor: '#333', color: '#fff'})) || (!showBackground && setAnimation({backgroundColor: '#333', color: '#fff'}, {backgroundColor: '#fff', color: '#333'}))} linear;
    animation-fill-mode: forwards;
    width: 100%;
    height: 91.5vh;
`;
```

Conditional rendering utilizing hooks & ternary operators was used to toggle between the two page states. This action could be repeated on any element efficiently to allow for a change dependant on the toggle switch.

```react
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
```

```react
    const [showBackground, setShowBackground] = useState(false);
    const handleNotActive = () => {
        setShowBackground(false);
    }
    const handleActive = () => {
        setShowBackground(true);
    }
```

<h3 align="center">
     Working Component Video: Toggle Switch
</h3>

[![](https://i.imgur.com/Ts8ZWtg.png)](https://youtu.be/w94FCPwoAMg)
<h5 align="center">
  <a href="https://youtu.be/w94FCPwoAMg">Toggle Switch Working Prototype Video Link</a>
</h5>

<h3 align="center">
     Feedback & Reflection
</h3>

Feedback from classmates clearly indicated this component was a success. Feedback allowed me to gain an invaluable insight into how easy it is to observe the function of the switch. Because of this, the splash text was added to the middle of the screen to further indicate a clear change, with the colour switching between dark and light depending on the toggle state of the switch. Utilizing conditional CSSstyling through React was paramount to the success of the component. Doing so allowed me to efficiently toggle between different colour schemes based on the input of the user. The main complaint I would have about my design is the lack of any real complexity to the component. Whilst the component functions effectively, its function is simplistic in nature, lacking any real depth. If I was going to attempt this component at a later date, I would take a different approach by abandoning the idea of the dark & light toggle, moving away from accessibility features in favour of something more creative. 
