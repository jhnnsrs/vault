import React, { useState, useEffect, useContext } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import "./test.css";
import "./tailwind.css";
import { Link } from "react-bootstrap-icons";
import { useFakts } from "./fakts/fakts-config";
import { FaktsGuard } from "./fakts/fakts-guard";
import { HerreGuard } from "./herre/herre-guard";
import { MikroGuard } from "./mikro/mikro-guard";
import { useHerre } from "./herre/herre-context";

export const FaktsFallback = (props: any) => {
  const { load } = useFakts();

  return (
    <div className="fallback">
      {" "}
      <button
        className="connect"
        onClick={() =>
          load({ base_url: "http://localhost:8000/f/", name: "Johannes" })
        }
      >
        Connect to Localhost{" "}
      </button>{" "}
    </div>
  );
};

export const HerreFallback = (props: any) => {
  const { login } = useHerre();

  return (
    <div className="fallback">
      {" "}
      <button className="connect" onClick={() => login()}>
        Login
      </button>{" "}
    </div>
  );
};

export const faktsGuarded = (Child) => {
  return (props) => (
    <FaktsGuard fallback={<FaktsFallback />}>
      <Child {...props} />
    </FaktsGuard>
  );
};

export const turtleGuarded = (Child) => {
  return (props) => (
    <FaktsGuard fallback={<FaktsFallback />}>
      <HerreGuard fallback={<HerreFallback />}>
        <MikroGuard>
          <Child {...props} />
        </MikroGuard>
      </HerreGuard>
    </FaktsGuard>
  );
};
