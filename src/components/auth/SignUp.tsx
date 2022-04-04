import React, { useState } from "react";

import { useTypedDispatch } from "../../redux/store";
import { setUser } from "../../redux/userSlice";

import { useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../firebase";

import { useErrorMessage } from "../../hooks/useErrorMessage";

import { createUserObject } from "../../utils/createUserObject";

import ErrorMessageDialog from "./ErrorMessageDialog";
import HorizontalRuleWithText from "../_reusables/HorizontalRuleWithText";
import UseGoogleAuthButton from "./UseGoogleAuthButton";

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const {
    errorMessage,
    showErrorMessage,
    setErrorMessage,
    setShowErrorMessage,
  } = useErrorMessage();

  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  const signUpNewUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (email === '' || password === '') {
      setErrorMessage('Please fill out all fields.');
      setShowErrorMessage(true);
      return;
    };

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      setShowErrorMessage(true);
      return;
    };

    try {
      const { user } = await createUserWithEmailAndPassword(firebaseAuth, email, password);

      dispatch(setUser(createUserObject(user, null)));

      navigate({ pathname: '/' });
    } catch (error: any) {
      if (error.message) {
        setErrorMessage(error.message);
        setShowErrorMessage(true);
        console.error(error.message);
      };
    };
  };

  return (
    <form
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

      <UseGoogleAuthButton
        setErrorMessage={setErrorMessage}
        setShowErrorMessage={setShowErrorMessage}
      />

      <HorizontalRuleWithText text="OR" />

      <input
        type="email"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        autoComplete="new-password"
        type="password"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <input
        autoComplete="new-password"
        type="password"
        value={confirmPassword}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
        placeholder="Confirm Password"
      />

      <button type="submit">
        Sign Up
      </button>
    </form>
  );
};
