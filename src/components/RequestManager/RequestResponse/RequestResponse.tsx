import { FaAngleDown } from 'react-icons/fa6';
import './RequestResponse.style.scss';
import { useEffect, useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import { useAppSelector } from '../../../hooks';

export function RequestResponse() {
  const [active, setActive] = useState(true);
  const response = useAppSelector((state) => state.httpResponse.value);

  useEffect(() => {
    console.log('Subscribed to resize event.');
    window.addEventListener('resize', () => {
      setActive(false);

      setTimeout(() => setActive(true));
    });
  }, []);

  return (
    <>
      <div id="response" className={`${active ? 'response__active' : ''}`}>
        <div id="response--header">
          <span>Response</span>
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
          <i
            onClick={() => {
              setActive(!active);
              window.restman.events.optionsMaxHeight.notify();
            }}
          >
            <FaAngleDown />
          </i>
        </div>
        <div id="response--value">
          {active && (
            <MonacoEditor
              width="100%"
              height="100%"
              editorWillMount={() => {}}
              editorDidMount={() => {}}
              editorWillUnmount={() => {}}
              onChange={() => {}}
              value={JSON.stringify(response, null, 4)}
              options={{ readOnly: true, minimap: { enabled: false } }}
              language="json"
              theme="vs-dark"
            />
          )}
        </div>
      </div>
    </>
  );
}
