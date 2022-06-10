import React, { useState } from "react";
import { useFluss } from "./fluss-types";

export const FlussGuard: React.FC<{
  key?: string;
  fallback?: React.ReactNode;
  children: React.ReactNode;
}> = ({ key, children, fallback }) => {
  const { client } = useFluss();

  if (client) return <>{children}</>;

  return <>{fallback || `Not yet with Arkitekt`}</>;
};

export const flussGuarded = (Child, fallback?) => {
  return (props) => (
    <FlussGuard fallback={fallback}>
      <Child {...props} />
    </FlussGuard>
  );
};
