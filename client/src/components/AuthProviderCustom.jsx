/* eslint-disable react/prop-types */
import { Auth0Provider } from '@auth0/auth0-react';

const AuthProviderCustom = ({ children }) => {
  const domain = import.meta.env.VITE_AUTH_DOMAIN;
  const rdr_url = import.meta.env.VITE_REDIRECT_URL;
  const clientId = import.meta.env.VITE_CLIENT_ID;
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri:rdr_url,
        audience:import.meta.env.VITE_AUDIENCE,
      }}
      cacheLocation="localstorage"

    >
      {children}
    </Auth0Provider>
  );
};
export default AuthProviderCustom;