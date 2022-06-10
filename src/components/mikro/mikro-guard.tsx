import React, { useState } from "react";
import { useMikro } from "./mikro-types";

export const MikroGuard: React.FC<{
  key?: string;
  fallback?: React.ReactNode;
  children: React.ReactNode;
}> = ({ key, children, fallback }) => {
  const { client } = useMikro();

  if (client) return <>{children}</>;

  return <>{fallback || `Not yet with Arkitekt`}</>;
};

export const mikroGuarded = (Child, fallback?) => {
  return (props) => (
    <MikroGuard fallback={fallback}>
      <Child {...props} />
    </MikroGuard>
  );
};
