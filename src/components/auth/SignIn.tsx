import { useState } from "react";

import { useTypedDispatch } from "../../redux/store";
import { setUser } from "../../redux/userSlice";

import { useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../firebase";

import { useErrorMessage } from "../../hooks/useErrorMessage";

import ErrorMessageDialog from "./ErrorMessageDialog";
import HorizontalRuleWithText from "../_reusables/HorizontalRuleWithText";
import UseGoogleAuthButton from "./UseGoogleAuthButton";
import { createUserObject } from "../../utils/createUserObject";

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {
    errorMessage,
    showErrorMessage,
    setErrorMessage,
    setShowErrorMessage,
  } = useErrorMessage();

  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);

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

  return (
    <form
      onSubmit={submitUserData}
      className="card"
    >
      <ErrorMessageDialog
        errorMessage={errorMessage}
        showErrorMessage={showErrorMessage}
      />

      <h3 className=" font-6 font-weight-2">
        Welcome back!
      </h3>

      <UseGoogleAuthButton
        setErrorMessage={setErrorMessage}
        setShowErrorMessage={setShowErrorMessage}
      />

      <HorizontalRuleWithText text="OR" />

      <input
        type="email"
        value={email}
        onChange={onEmailChange}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={onPasswordChange}
        placeholder="Password"
      />

      <button type="submit">
        Sign In
      </button>
    </form>
  );
};
