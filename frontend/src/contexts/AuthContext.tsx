import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { saveToken, removeToken, Token } from '../helpers/localStorage';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

type AuthContextProps = {
  token?: Token,
  signIn: (token: Token) => void,
  signOut: () => void
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<Token | undefined>(undefined);
  const navigate = useNavigate();

  const signIn = async (token: Token) => {
    setToken(token);
    saveToken(token);
  }

  
  const signOut = () => {
    setToken(undefined);
    removeToken();
    navigate('/login');
  }

  const everyTenMinutes = (callback: () => void): NodeJS.Timer => {
    const TEN_MINUTES_IN_MILLISECONDS = 1000 * 60 * 10;
    return setInterval(callback, TEN_MINUTES_IN_MILLISECONDS);
  }

  const { refreshToken } = token || {};

  useEffect(() => {
  if (!refreshToken?.value) {
    return;
  }

  everyTenMinutes(async () => {
    try {
      const response = await axios.post('/api/refreshToken', {
        refreshToken: refreshToken.value
      });

      if (response.data.accessToken && token) {
        signIn({
          ...token,
          accessToken: response.data.accessToken
        });
      }
    } catch (error) {
      signOut();
    }
  });

  //TODO: id was used here....
  return () => clearInterval(0);
}, [token?.refreshToken]);


  return (
    <AuthContext.Provider value={{ token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be within AuthProvider');
  }

  return context;
}
