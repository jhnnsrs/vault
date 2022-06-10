/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import { MikroGuard } from '../../components/mikro/mikro-guard';

function Header({ children }) {
  return <div className={clsx(styles.playgroundHeader)}>{children}</div>;
}

export const NoLiveResult = () => {


  return <div>Please connect with Fakts first to see results here</div>;
}


function ResultWithHeader() {
  return (
    <>
      <Header>
        <Translate
          id="theme.Playground.result"
          description="The result label of the live codeblocks">
          Result
        </Translate>
      </Header>
      <MikroGuard fallback={<NoLiveResult />}>
        <div className={styles.playgroundPreview}>
          <LivePreview />
          <LiveError />
        </div>
      </MikroGuard>
    </>
  );
}

export const NoLiveMikro = () => {


  return <div>No live mikro</div>;
}





function EditorWithHeader() {
  return (
    <>
      <Header>
        <Translate
          id="theme.Playground.liveEditor"
          description="The live editor label of the live codeblocks">
          Mikro Live Editor
        </Translate>
      </Header>
      <LiveEditor className={styles.playgroundEditor} />
    </>
  );
}








export default function Playground({ children, transformCode, ...props }) {

  const {
    isClient,
    siteConfig: {
      themeConfig: {
        liveCodeBlock: { playgroundPosition },
      },
    },
  } = useDocusaurusContext();

  return (
    <div className={styles.playgroundContainer}>
      <div id="tailwind">
        <LiveProvider
          key={isClient}
          code={isClient ? children.replace(/\n$/, '') : ''}
          transformCode={transformCode || ((code) => `${code};`)}
          {...props}>
          {playgroundPosition === 'top' ? (
            <>
              <ResultWithHeader />
              <EditorWithHeader />
            </>
          ) : (
            <>
              <EditorWithHeader />
              <ResultWithHeader />
            </>
          )}
        </LiveProvider>
      </div>
    </div>
  );
}
