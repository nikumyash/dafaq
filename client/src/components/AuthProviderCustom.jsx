/* eslint-disable react/prop-types */
import { Auth0Provider } from '@auth0/auth0-react';

const AuthProviderCustom = ({ children }) => {
  const domain = import.meta.env.VITE_AUTH_DOMAIN;
  const clientId = import.meta.env.VITE_CLIENT_ID;
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri:"http://localhost:5173/",
        audience:import.meta.env.VITE_AUDIENCE,
        scope:"read:current_user update:current_user_metadata"
      }}
      cacheLocation="localstorage"

    >
      {children}
    </Auth0Provider>
  );
};
export default AuthProviderCustom;