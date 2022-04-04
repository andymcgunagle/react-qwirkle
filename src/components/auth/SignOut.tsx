import { useTypedDispatch } from '../../redux/store';
import { resetUser } from '../../redux/userSlice';

import { useNavigate } from 'react-router-dom';

import { signOut } from 'firebase/auth';
import { firebaseAuth } from '../../firebase';

export default function SignOut() {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  const signOutUser = async () => {
    try {
      dispatch(resetUser());
      await signOut(firebaseAuth);
      navigate({ pathname: '/sign-in' });
    } catch (error) {
      console.error(error);
    };
  };

  return <button onClick={signOutUser} className="outlined">Sign Out</button>;
};
