import React from 'react';
import { FaktsProvider } from '../components/fakts/fakts-provider';
import { HerreProvider } from '../components/herre/herre-provider';
import { MikroProvider } from '../components/mikro/mikro-provider';
import "../tailwind.css";

function Only({ children }) {
  return (
    <>
      <FaktsProvider clientId='Zvc8fwLMMINjcAxoaTBG2L6ATlV746D3Zc4T4Wiu' clientSecret='bPDJKpvrZkhqsIvytwJuuLv8SEKeybPaPeMVpIRtdByLUERtyES2v18Dm38PUbVO0myUFAwLzwyWjo4jk91Yrhlfn51DPXN7MxYCIRedXSaNabvINv8EKv3kcWSY8Wos'>
        <HerreProvider>
          <MikroProvider>

            {children}
          </MikroProvider>
        </HerreProvider>
      </FaktsProvider>
    </>
  );
}

export default Only; 