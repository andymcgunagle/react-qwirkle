import { useSignIn } from "../../hooks/useSignIn";

import ErrorMessageModal from "./ErrorMessageModal";
import HorizontalRuleWithText from "../_reusables/HorizontalRuleWithText";
import GoogleAuthButton from "./GoogleAuthButton";

import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--space-2);
`;

export default function SignIn() {

  const {
    email,
    errorMessage,
    handleEmailChange,
    handlePasswordChange,
    password,
    setErrorMessage,
    setShowErrorMessage,
    showErrorMessage,
    submitUserData,
  } = useSignIn();

  return (
    <Form
      onSubmit={submitUserData}
      className="card"
    >
      <ErrorMessageModal
        errorMessage={errorMessage}
        showErrorMessage={showErrorMessage}
      />

      <h3 className=" font-6 font-weight-2">
        Welcome back!
      </h3>

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
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Password"
      />

      <button type="submit">
        Sign In
      </button>
    </Form>
  );
};
