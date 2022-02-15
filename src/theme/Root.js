import React from 'react';
import { RootProvider } from '../components/wrappers/RootProvider';
import { FaktsProvider } from '../components/fakts/fakts-provider';

function Root({children}) {
  return (
    <>
      <FaktsProvider>
        <RootProvider>
          {children}
        </RootProvider>
      </FaktsProvider>
    </>
  );
}

export default Root; 