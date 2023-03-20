import { useContext } from 'react';
import UserContext from '../context/UserInfo';

export const useUserContext = () => {
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  return user, setUser, isLoggedIn, setIsLoggedIn;
};
