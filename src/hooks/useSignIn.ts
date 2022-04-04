import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../firebase";
import { useTypedDispatch } from "../redux/store";
import { setUser } from "../redux/userSlice";
import { createUserObject } from "../utils/createUserObject";
import { useErrorMessage } from "./useErrorMessage";

export function useSignIn() {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {
    errorMessage,
    showErrorMessage,
    setErrorMessage,
    setShowErrorMessage,
  } = useErrorMessage();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);

  const submitUserData = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (email === '' || password === '') {
      setErrorMessage('Please fill out all fields.');
      setShowErrorMessage(true);
      return;
    };

    try {
      const { user } = await signInWithEmailAndPassword(firebaseAuth, email, password);

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
    email,
    errorMessage,
    handleEmailChange,
    handlePasswordChange,
    password,
    setErrorMessage,
    setShowErrorMessage,
    showErrorMessage,
    submitUserData,
  };
};