import React from 'react';
import { FaktsProvider } from '../components/fakts/fakts-provider';
import { HerreProvider } from '../components/herre/herre-provider';
import { MikroProvider } from '../components/mikro/mikro-provider';

function Only({ children }) {
  return (
    <>
      <FaktsProvider clientId='PsdU71PlUYeC4hP4aDf8pTdm2Hv9xYKdrxCFI5RO' clientSecret='8jXSNhrH7fllN8cGjxg7y2Jl1INb22wlDSmUBepb9aRDGV3al5pfNzswS85MPEvpN5vnfrPkrIERQ6kcMHLiISr4HcYirivdtrnyMjFMlzKGvlCrwfkNJmtQgCLZmH4X'>
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