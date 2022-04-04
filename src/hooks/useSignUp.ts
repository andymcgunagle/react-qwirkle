import { useState } from "react";

import { useTypedDispatch } from "../redux/store";
import { setUser } from "../redux/userSlice";

import { useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../firebase";

import { createUserObject } from "../utils/createUserObject";

import { useErrorMessage } from "./useErrorMessage";

export function useSignUp() {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  const {
    errorMessage,
    showErrorMessage,
    setErrorMessage,
    setShowErrorMessage,
  } = useErrorMessage();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value);

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

  return {
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
  };
};