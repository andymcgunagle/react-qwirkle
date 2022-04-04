import React from "react";

import { useSignUp } from "../../hooks/useSignUp";

import styled from "styled-components";

import ErrorMessageDialog from "./ErrorMessageDialog";
import HorizontalRuleWithText from "../_reusables/HorizontalRuleWithText";
import GoogleAuthButton from "./GoogleAuthButton";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--space-2);
`;

export default function SignUp() {

  const {
    confirmPassword,
    email,
    errorMessage,
    handleConfirmPasswordChange,
    handleEmailChange,
    handlePasswordChange,
    password,
    setErrorMessage,
    setShowErrorMessage,
    showErrorMessage,
    signUpNewUser,
  } = useSignUp();

  return (
    <Form
      onSubmit={signUpNewUser}
      className="card"
    >
      <ErrorMessageDialog
        errorMessage={errorMessage}
        showErrorMessage={showErrorMessage}
      />

      <h2 className="font-6 font-weight-2">
        Sign up with one click...
      </h2>

      <GoogleAuthButton
        setErrorMessage={setErrorMessage}
        setShowErrorMessage={setShowErrorMessage}
      />

      <HorizontalRuleWithText text="OR" />

      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email"
      />
      <input
        autoComplete="new-password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Password"
      />
      <input
        autoComplete="new-password"
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        placeholder="Confirm Password"
      />

      <button type="submit">
        Sign Up
      </button>
    </Form>
  );
};
