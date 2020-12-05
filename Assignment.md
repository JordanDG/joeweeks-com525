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

![Material Design Buttons](https://i.imgur.com/Nr035YV.png)

<h5 align="center">
  <a href="https://material.io/components/buttons#specs">Full Button Design Guidelines</a>
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


<iframe width="1060" height="520" src="https://www.youtube.com/embed/H9O7x9IBKOQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

 <h3 align="center">
     Feedback & Reflection
</h3>

Initial feedback on my designs from classmates indicated that the colour palette made the button text illegible. This feedback was remedied by creating another set of buttons with different typography & colours, and carrying out a small-scale A/B test, resulting in the new buttons emerging triumphant. Purely from a conceptual standpoint, the components function as intended. They are scalable, clear and incorporate different states to enhance the components. 

Developing the components using props & scalable units allows for repeated use, making them easily adaptable to any use scenario. The main critique I have of my components, and the change I'd make to my approach, had I the opportunity, would be to use a full icon menu. As stated by Joe Natoli, "For mobile use, icons make excellent touch targets. When sized large enough (e.g. 48 px), they’re easily activated. And as a bonus, this also makes it very easy to hit them with a desktop or laptop cursor." ([Link](https://givegoodux.com/the-right-way-to-use-icons-in-your-ui/), 2020). An example of an icon menu can be seen below. This type of menu is prominent in mobile applications.

![Google Icon Menu](https://i.imgur.com/DIXNUtg.png)

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

​																					 ![password example](https://i.imgur.com/uW6UR7f.png)

As shown above, another design guideline is to allow for space to provide users with error messages to further assist their login / signing up process. This includes specified constraints or incorrect inputs from the user. As reaffirmed by Nomensa ([link](https://www.nomensa.com/blog/2010/ux-design-four-ways-display-error-messages), 2010), "The error message needs to be clear, precise, short and punchy. Users should be able to immediately understand what ‘mistakes they have made’ and how to recover the error." My login form will allow for the use of error messages and verification. 

 <h3 align="center">
  Planning & design prototyping
</h3>

Figma was used to design & simulate a users login experience. The login form will be developed using a mobile first approach, with its intended implementation intended to be in a mobile application. This will be reflected in Figma using mobile-sized frames. The execution of this can be seen below. 

![login design in Figma](https://i.imgur.com/cu0VLvg.png)

Each row of screens is designed to accommodate each scenario a user can take. Shown below is the interactions used between pages to simulate a working prototype, along with a video of the working prototype. 

![login design function in Figma](https://i.imgur.com/iqn8AcP.png)

<iframe width="1060" height="520" src="https://www.youtube.com/embed/ULI6SPfJxdA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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

 <h3 align="center">
     Working Component Video: Login Form
</h3>


<iframe width="1060" height="520" src="https://www.youtube.com/embed/PB02KFfZp0o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  <h3 align="center">
     Feedback & Reflection
</h3>

This component represented a resounding success. The component was fully functional, with quality of life features such as forgotten password & password retention. Conditional rendering was utilized to ensure the component remained as a single page application, whilst displaying continually relevant information. Utilization of yup allowed for necessary constraints on password & email information to be enacted, such as length, format, and character set. The main issue regarding my login form is the lack of an option to sign-in using external methods, such as Facebook or Google. Whilst this feature was reflected in my prototyping, the implementation of it became too strenuous. Next time, utilizing an external sign-in method would be the preferred additional approach, this can be achieved by using the Facebook for Developers documentation available [here](https://developers.facebook.com/docs/facebook-login).

<h2 align="center">
  Component 3: Dropdown Menu
</h2>

![Dropdown Menu final](https://i.imgur.com/8tFJjc5.png)

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
  <a href="https://material.io/components/menus#specs">Full Dropdown Menu Design Guidelines</a>
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

<iframe width="1060" height="520" src="https://www.youtube.com/embed/2GY7DHYaOYk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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

  <h3 align="center">
     Working Component Video: Dropdown Menu
</h3>

<iframe width="1060" height="520" src="https://www.youtube.com/embed/ytzvy7p7XEw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  <h3 align="center">
     Feedback & Reflection
</h3>

This component functions arguably more effectively than any of the other components featured in this portfolio. The selection of languages featured within the component offer a wide range of options for a large audience. The component was implemented with minimal content, only featuring a basic navigation menu and some splash text. This was implemented mainly for example purposes to demonstrate the success of the component. Feedback received from this component was generally positive, with only a minor change regarding the languages available, with additional options being added to remedy this. 

Further feedback received post-production identified that further indication of the option being hovered over by the user would be preferred. This could be achieved by highlighting the background colour of the option on hover. This is the main change I would make, should I reattempt this or change it. Despite this, overall I feel that this is a successful component, and I have achieved precisely what I set out to do.

<h2 align="center">
  Component 4: Modal Dialog Alert 
</h2>






























 
