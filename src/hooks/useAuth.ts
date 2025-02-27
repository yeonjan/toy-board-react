import { useState, useEffect } from 'react';
import { getCookie, deleteCookie } from '../utils/cookie';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    if (getCookie('isLoggedIn') === 'True') {
      setIsLoggedIn(true);
    }
  }, []);

  const login = () => {
    window.location.href = 'http://localhost:8080/login';
  };

  const logout = async () => {
    await fetch('http://localhost:8080/api/auth/logout', {
      method: 'POST',
      credentials: 'include',
    });
    deleteCookie('isLoggedIn');
    setIsLoggedIn(false);
    window.location.reload();
  };

  return { isLoggedIn, login, logout };
};
