import styled from 'styled-components';

const ErrorMessageModalStyles = styled.dialog`
  animation: var(--animation-fade-in);
  width: fit-content;

  & * {
    color: var(--clr-danger-700);
  }
`;

export default function ErrorMessageModal({
  errorMessage,
  showErrorMessage,
}: ErrorMessageModalProps) {
  return (
    <>
      {showErrorMessage &&
        <ErrorMessageModalStyles className="modal top column-center card danger light">
          <span className="material-icons">
            Error
          </span>
          <p>{errorMessage}</p>
        </ErrorMessageModalStyles>
      }
    </>
  );
};

interface ErrorMessageModalProps {
  errorMessage: string,
  showErrorMessage: boolean,
};
