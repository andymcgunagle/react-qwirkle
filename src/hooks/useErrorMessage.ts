import { useEffect, useState } from "react";

export function useErrorMessage() {
  const [errorMessage, setErrorMessage] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowErrorMessage(false);
    }, 3 * 1000);

    return () => clearTimeout(timer);
  }, [showErrorMessage]);

  return {
    errorMessage,
    showErrorMessage,
    setErrorMessage,
    setShowErrorMessage,
  };
};
