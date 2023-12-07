import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Import the AuthContext

export const AuthRequired = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth(); // Use the useAuth hook to access authentication state

  if (!isAuthenticated) {
    return <Navigate to={'/login'} replace />;
  }

  return children;
};
