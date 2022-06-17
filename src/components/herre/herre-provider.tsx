import React, { useEffect, useState } from "react";
import { HerreContext } from "./herre-context";
import { Herre, HerreUser } from "./herre-types";
import { useFakts } from "../fakts/fakts-config";
import {  AuthService } from "./pkce";
import useIsBrowser from "@docusaurus/useIsBrowser";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export type WrappedHerreProps = {};

export type HerreProps = {};

export const WrappedHerre: React.FC<WrappedHerreProps> = (props) => {

  const isBrowser = useIsBrowser();
  const { siteConfig: {baseUrl} } = useDocusaurusContext()
  const [service, setService] = useState<AuthService | undefined>();
  const [user, setUser] = useState<HerreUser | null>(null);
  const [access_token, setAccessToken] = useState<string | null>(null);
  const [staging_token, setStagingToken] = useState<string | null>(null);
  const { fakts } = useFakts();

  useEffect(() => {
    if (fakts && fakts.herre && isBrowser) {
      const authService = new AuthService({
        clientId: fakts.herre.client_id.trim(),
        clientSecret: fakts.herre.client_secret.trim(), // TODO: figure out why space?
        location: window.location,
        provider: fakts.herre.base_url,
        redirectUri: window.location.origin + baseUrl,
        scopes: fakts.herre.scopes, 
      }, window);
      console.log(`Setting service`, fakts.herre);
      setService(authService);
    }
    else {
      setAccessToken(null)
    }
  }, [fakts]);

  useEffect(() => {
    if (service && service.isAuthenticated()) {
      console.log("soinsoisn");
      let token = service.getAuthTokens().access_token;
      console.log("token", token);
      setStagingToken(token);
    }
  }, [service]);

  useEffect(() => {
    if (staging_token && fakts && fakts.herre && service) {
      fetch(`${fakts.herre.base_url}/userinfo/`, {
        headers: {
          Authorization: `Bearer ${staging_token}`,
        },
      }).then(
        (result) => {
          if (result) {
            result.json().then((data) => {
              if (data.error) {
                service.logout();
              }
              if (data.sub) {
                console.log(data);
                setUser(data);
                setAccessToken(staging_token);
              }
            });
          } else {
            console.log("Didnt receive an Associated User", result);
          }
        },
        (error) => {
          console.error(error);
          service.logout();
        }
      );
    }
  }, [staging_token, service]);

  const logout = () => {
    console.log("Logging Out");
    service.logout();
    setUser(null);
    setAccessToken(null);
  };

  const login = () => {
    console.log("Logging in");
    service.authorize();
  };

  return (
    <HerreContext.Provider
      value={{
        logout: logout,
        login: login,
        user: user,
        token: access_token,
      }}
    >
      {props.children}
    </HerreContext.Provider>
  );
};

export const HerreProvider: React.FC<HerreProps> = (props) => {
  const { fakts } = useFakts();

  return <WrappedHerre>{props.children}</WrappedHerre>;
};
