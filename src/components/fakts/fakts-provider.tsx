import React, { useEffect, useState } from "react";
import { FaktsContext, NoFaktsContext } from "./fakts-context";
import { EndpointGrant } from "./grants/EndpointGrant";

const window_host = window.location.hostname;
console.log(`Is hosted on ${window_host}`);

export type FaktsProviderProps = {
  hardFakts?: any;
};

export const FaktsProvider: React.FC<FaktsProviderProps> = ({
  children,
  hardFakts,
}) => {
  const [activeFakts, setActiveFakts] = useState<Object | null>(null);

  useEffect(() => {
    const value = localStorage.getItem("fakts");
    console.log("loaded", value);

    if (value) {
      setActiveFakts(JSON.parse(value));
    }
  }, []);

  const setFakts = (fakts: any) => {
    localStorage.setItem("fakts", JSON.stringify(fakts));
    setActiveFakts(fakts);
  };

  const deleteFakts = () => {
    localStorage.removeItem("fakts");
    setActiveFakts(undefined);
  };

  return (
    <FaktsContext.Provider
      value={{
        fakts: activeFakts,
        setFakts: setFakts,
        deleteFakts: deleteFakts,
      }}
    >
      {children}
    </FaktsContext.Provider>
  );
};
