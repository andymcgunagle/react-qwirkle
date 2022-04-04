import styled from 'styled-components';

const ErrorMessageDialogStyles = styled.dialog`
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  gap: 0.5rem;
  
  width: calc(100% - 2rem);
  max-width: calc(500px - 2rem);

  padding: 1rem;
  border-radius: var(--border-radius);
  
  border: var(--border-width) solid var(--clr-danger);
  background-color: var(--clr-danger-light);

  & * {
    color: var(--clr-danger);
  }
`;

export default function ErrorMessageDialog({
  errorMessage,
  showErrorMessage,
}: ErrorMessageDialogProps) {
  return (
    <>
      {showErrorMessage &&
        <ErrorMessageDialogStyles>
          <span className="material-icons">
            error
          </span>
          <p>{errorMessage}</p>
        </ErrorMessageDialogStyles>
      }
    </>
  );
};

interface ErrorMessageDialogProps {
  errorMessage: string,
  showErrorMessage: boolean,
};
