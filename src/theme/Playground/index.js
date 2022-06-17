import React, { useState } from 'react';
import clsx from 'clsx';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { usePrismTheme } from '@docusaurus/theme-common';
import styles from './styles.module.css';
import { MikroGuard } from '../../components/mikro/mikro-guard';
import { useFakts } from '../../components/fakts/fakts-config';
import { DoorClosed, DoorOpen, Link, PersonCircle } from "react-bootstrap-icons"
import { useHerre } from '../../components/herre/herre-context';
import { Field, Form, Formik } from "formik"


function Header({ children }) {
  return <div className={clsx(styles.playgroundHeader)}>{children}</div>;
}
function LivePreviewLoader() {
  // Is it worth improving/translating?
  // eslint-disable-next-line @docusaurus/no-untranslated-text
  return <div>Loading...</div>;
}


function ConnectFirst() {
  return <>Please Connect First</>
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
      {/* https://github.com/facebook/docusaurus/issues/5747 */}
      <div className={styles.playgroundPreview}>
        <BrowserOnly fallback={<LivePreviewLoader />}>
          {() => (
            <div id="tailwind">
              <MikroGuard fallback={<ConnectFirst />}>
                <LivePreview />
                <LiveError />
              </MikroGuard>
            </div>
          )}
        </BrowserOnly>
      </div>
    </>
  );
}
function ThemedLiveEditor() {
  const isBrowser = useIsBrowser();
  return (
    <LiveEditor
      // We force remount the editor on hydration,
      // otherwise dark prism theme is not applied
      key={String(isBrowser)}
      className={styles.playgroundEditor}
    />
  );
}
function EditorWithHeader() {

  const { fakts, changeFakts, load } = useFakts()
  const { user, logout, login } = useHerre()
  const [show, setShow] = useState(false)



  return (
    <>
      <Header>
        <div className='flex flex-row'>
          <Translate
            id="theme.Playground.liveEditor"
            description="The live editor label of the live codeblocks">
            Mikro Live Editors
          </Translate>
          <div className="flex-grow"></div>
          {!fakts &&
            <>
              {show && <>
                <Formik
                  initialValues={{ host: 'localhost:8000' }}
                  onSubmit={({ host }, actions) => {
                    load({
                      base_url: `http://${host}/f/`,
                      name: host
                    })
                  }}
                >
                  <Form>
                    <Field type="input" name="host" placeholder="localhost:8000" />
                    <button className="ml-2 text-white border bg-gray-700 p-1 border-gray-900" type="submit"> Connect</button>
                  </Form>
                </Formik>
              </>}
              <div className="cursor-pointer ml-1" onClick={() => setShow(!show)}><Link /></div>
            </>
          }


          {fakts && !user && <div className="text-white flex-row flex"><div className="text-white cursor-pointer" onClick={() => changeFakts(undefined)}><Link /></div><div className='text-white ml-2 cursor-pointer' onClick={() => login()}><DoorOpen /></div> </div>}
          {fakts && user && <div className="text-white  flex-row flex" onClick={() => logout()}>{user.preferred_username} <div className="ml-3 cursor-pointer"><DoorClosed /></div></div>}

        </div>
      </Header>
      <ThemedLiveEditor />
    </>
  );
}
export default function Playground({ children, transformCode, ...props }) {
  const {
    siteConfig: { themeConfig },
  } = useDocusaurusContext();
  const {
    liveCodeBlock: { playgroundPosition },
  } = themeConfig;
  const prismTheme = usePrismTheme();
  return (
    <div className={styles.playgroundContainer}>
      {/* @ts-expect-error: type incompatibility with refs */}

      <div id="tailwind">
        <LiveProvider
          code={children.replace(/\n$/, '')}
          transformCode={transformCode ?? ((code) => `${code};`)}
          theme={prismTheme}
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
