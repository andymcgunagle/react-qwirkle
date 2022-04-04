import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../../firebase";

import GoogleLogo from "../../images/google-logo.png";

export default function UseGoogleAuthButton(
  {
    setErrorMessage,
    setShowErrorMessage,
  }: UseGoogleAuthButtonProps
) {
  const navigate = useNavigate();

  const useGoogleAuth = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(firebaseAuth, provider);
      navigate({ pathname: `/` });
    } catch (error: any) {
      if (error.message) {
        setErrorMessage(error.message);
        setShowErrorMessage(true);
        console.error(error.message);
      };
      console.error(error);
    };
  };

  return (
    <button
      type="button"
      onClick={useGoogleAuth}
      className="with-icon"
    >
      <img
        src={GoogleLogo}
        alt="Google logo"
        height={15}
        width={15}
      />
      <span>
        Use Google account
      </span>
    </button>
  );
};

interface UseGoogleAuthButtonProps {
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
  setShowErrorMessage: React.Dispatch<React.SetStateAction<boolean>>,
};