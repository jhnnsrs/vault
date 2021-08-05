import React from 'react';
import { RootProvider } from '../components/wrappers/RootProvider';


function Root({children}) {
  return (
    <>
      <RootProvider>
        {children}
      </RootProvider>
    </>
  );
}

export default Root; 