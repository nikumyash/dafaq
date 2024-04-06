import { Auth0Provider } from '@auth0/auth0-react';

const AuthProviderTeachers = ({ children }) => {
  const domain = import.meta.env.VITE_STUDENTS_AUTH_DOMAIN;
  const clientId = import.meta.env.VITE_STUDENTS_CLIENT_ID;
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      {children}
    </Auth0Provider>
  );
};
export default AuthProviderTeachers;