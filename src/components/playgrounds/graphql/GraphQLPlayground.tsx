
import React, { Suspense } from 'react';
import { FaktsGuard } from '../../fakts/fakts-guard';
import { ChangeFaktsButton } from '../../fallbacks/ChangeFaktsButton';
import { LoginButton } from '../../fallbacks/LoginButton';
import { HerreGuard } from '../../herre/herre-guard';
import { MikroGuard } from '../../mikro/mikro-guard';
import { useMikro } from '../../mikro/mikro-types';

const UnconnectedGraphQLPlayground = React.lazy(() => import('./UnconnectedGraphQLPlayground'));


type Props = {
    initialQuery: string
    height: any
    width: any
}


export const  GraphQLPlayground = (props: Props) => {


  return (
    <div>
        <FaktsGuard fallback={<ChangeFaktsButton/>}>
            <HerreGuard fallback={<LoginButton/>}>
                <MikroGuard>
                    <Suspense fallback={<div>Loading...</div>}>
                        <UnconnectedGraphQLPlayground {...props}/>
                    </Suspense>
                 </MikroGuard>
            </HerreGuard>
        </FaktsGuard>
    </div>
  );
}