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

const StyledContainerLogin = styled.div`
    position: relative;
    margin: 0 auto;
    margin-top: 15vh;
    width: 375px;
    background-color: #fff;
    height: 50vh;
    border-radius: 15px;
    border: 2px solid #000;
`;

const StyledTop = styled.div`
    width: 100%;
    height: 5vh;
    background-color: #00D7A3;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

const BackArrow = styled.div`
    width: 100px;
    height: 100%;
    font-size: 3rem;
    line-height: 140%;
    text-align: center;
    font-weight: 300;
`;

const TopTitle = styled.div`
    width: 400px;
    height: 100px;
`;

const TopTitleText = styled.p`
    font-size: 2rem;
    line-height: 200%;
    font-weight: 300;
    letter-spacing: 0.5px;
    margin-left: 75px;
    color: #000;
`;

const TopTitleLogin = styled.div`
    width: 400px;
    height: 100px;
`;

const TopTitleTextLogin = styled.p`
    font-size: 2rem;
    line-height: 200%;
    font-weight: 300;
    letter-spacing: 0.5px;
    display: block;
    text-align: center;
    color: #000;
`;

const StyledIconSplash = styled.div`
    width: 100%;
    height: 14vh;
`;

const UserIcon = styled.img`
    width: 40%;
    margin-left: 30%;
    margin-top: 1.5vh;
`;

const StyledInputContainer = styled.div`
    width: 100%;
    height: 6vh;
`;

const LoginInput = styled.input`
    width: 80%;
    margin-left: 10%;
    height: 60%;
    margin-top: 1.5%;
    border-radius: 5px;
    border: 1px solid #000;
    line-height: 100%;
    font-size: 18px;
    padding-left: 5px;
    background-color: #fafafa;
    transition: all 0.5s ease-in-out;

    &::placeholder {
        font-size: 18px;
    }

    &:focus {
        border: 1px solid #000;
        border-radius: 5px;
        background-color: #fff;
    }
`;

const StyledPasswordCheckbox = styled.div`
    width: 80%;
    height: 50px;
    margin-left: 10%;
    margin-top: -5%;
`;

const PasswordRetentionCheckbox = styled.input`
    width: 20px;
    height: 20px;
    border: 1px solid #000;

    &:checked {
        background-color: #00D7A3;
        color: #00D7A3;
    }
`;

const PasswordRetention = styled.p`
    display: inline-block;
    margin-left: 5px;
    font-weight: 500;
    color: #000;
`;

const PasswordForgot = styled.a`
    color: #00D7A3;
    font-weight: bold;
    text-decoration: none;
    display: block;
    transition: all 0.5s ease-in-out;

    &:hover {
        color: #00F3B8;
    }
`;

const StyledSubmitContainer = styled.div`
    width: 100%;
    height: 15%;
`;

const SubmitButton = styled.button`
    width: 80%;
    margin-left: 10%;
    height: 60px;
    margin-top: 2.5%;
    font-size: 2rem;
    font-weight: 300;
    border-radius: 5px;
    border: 0;
    color: #333;
    background-color: #00D7A3;
    transition: all 0.5s ease-in-out;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    margin-bottom: 20px;

    &:hover {
        background-color: #00F3B8;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25), 0 1px 2px 0 rgba(0, 0, 0, 0.25);
    }
`;

const SignupSplashContainer = styled.div`
    width: 50%;
    margin-left: 25%;
    height: 50px;
    margin-top: -10px;
`;

const SignUpPartOne = styled.p`
    color: #333;
    font-weight: 500;
    text-align: center;
    display: inline-block;
`;

const SignUpPartTwo = styled.a`
    color: #00D7A3;
    font-weight: bold;
    display: inline-block;
    margin-left: 10px;
    text-decoration: none;
    transition: all 0.5s ease-in-out;

    &:hover {
        color: #00F3B8;
    }
`;

const PasswordReveal = styled.img`
    width: 25px;
    position: relative;
    left: -35px;
    top: 5px;
`;

const StyledErrorMessage = styled.p`
    color: red;
    margin-left: 10%;
    margin-top: 1%;
`;

const StyledLoginSuccessContainer = styled.div`
    width: 100%;
    height: 80%;
    margin-top: 20%;
`;

const SuccessText = styled.div`
    width: 80%;
    margin-left: 10%;
    text-align: center;
    font-weight: 300;
`;

const SuccessTextHeader = styled.h1`
    font-weight: 300;
    color: #333;
`;

const SuccessContinueButton = styled.button`
    width: 80%;
    margin-left: 10%;
    height: 60px;
    margin-top: 2.5%;
    font-size: 2rem;
    font-weight: 300;
    border-radius: 5px;
    border: 0;
    color: #333;
    background-color: #00D7A3;
    transition: all 0.5s ease-in-out;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    margin-bottom: 20px;

    &:hover {
        background-color: #00F3B8;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25), 0 1px 2px 0 rgba(0, 0, 0, 0.25);
    }
`;

function Week4() {;

    const [showPassword, setShowPassword] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [login, setLogin] = useState(false);

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
    }

    return (
        <StyledContainerLogin>
            {submitted && (
            <div>
                <StyledTop>
                    <BackArrow>
                        <FontAwesomeIcon icon={faChevronLeft} color="#000" fixedWidth onClick={Logout} />
                    </BackArrow>
                    <TopTitle>
                        <TopTitleText>Success</TopTitleText>
                    </TopTitle>
                </StyledTop>
                <StyledLoginSuccessContainer>
                    <UserIcon src={success} alt="User Icon" />
                    <SuccessText>
                        <SuccessTextHeader>Welcome, Jordan</SuccessTextHeader>
                    </SuccessText>
                    <SuccessContinueButton onClick={LoginContinue}>Continue</SuccessContinueButton>
                </StyledLoginSuccessContainer>
            </div>
            )}

            {!submitted && login && (
                <div>
                <StyledTop>
                    <BackArrow>
                        <FontAwesomeIcon icon={faChevronLeft} color="#000" fixedWidth onClick={Logout} />
                    </BackArrow>
                    <TopTitle>
                        <TopTitleText>Home</TopTitleText>
                    </TopTitle>
                </StyledTop>
                <StyledLoginSuccessContainer>
                    <UserIcon src={success} alt="User Icon" />
                    <SuccessText>
                        <SuccessTextHeader>Working.</SuccessTextHeader>
                    </SuccessText>
                    <SuccessContinueButton onClick={LoginContinue}>Continue</SuccessContinueButton>
                </StyledLoginSuccessContainer>
                </div>
            )}

            {!submitted && !login && (
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
                    <LoginInput placeholder="password" type={showPassword ? "text" : "password"} name="password" ref={register({ pattern: /^[a-zA-Z]\w{3,14}$/, minLength: 5, maxLength: 20 })} />
                    <PasswordReveal src={showPassword ? ClosedEye : OpenEye} alt="Show / Hide Password" onClick={handleClick}/>
                    <StyledErrorMessage>{errors.password?.message}</StyledErrorMessage>
                </StyledInputContainer>
                <StyledPasswordCheckbox>
                    <PasswordRetentionCheckbox type="checkbox" />
                    <PasswordRetention>Remember Password</PasswordRetention>
                    <PasswordForgot href="#resetpassword">FORGOT PASSWORD?</PasswordForgot>
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
        </StyledContainerLogin>
    );
}

export default Week4;