import { FaAngleDown } from 'react-icons/fa6';
import './RequestResponse.style.scss';
import { useEffect, useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import { useAppSelector } from '../../../hooks';
import { OptionTab } from '../OptionsTab/OptionTab';
import { Table } from '@components/Table';

export type ResponseMetricProps = {
  label: string;
  value: string;
};

export function ResponseMetric(props: ResponseMetricProps) {
  return (
    <span className="response--metric">
      {props.label}:{' '}
      <span className="response--metric__highlight">{props.value}</span>
    </span>
  );
}

const tabs = [
  {
    id: 0,
    label: 'Body',
  },
  {
    id: 1,
    label: 'Headers',
  },
];

export function RequestResponse() {
  const [active, setActive] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const response = useAppSelector((state) => state.httpResponse.value);

  useEffect(() => {
    console.log('Subscribed to resize event.');
    window.addEventListener('resize', () => {
      setActive(false);

      setTimeout(() => setActive(true));
    });
  }, []);

  function calcResponseSize(bytes: number) {
    const units = ['B', 'KB', 'MB', 'GB'];
    let size = bytes;
    let i = 0;

    while (size >= 1024 && i <= units.length - 1) {
      size /= 1024;
      i++;
    }

    console.log(response.headers);
    return `${size.toFixed(2)} ${units[i]}`;
  }

  return (
    <>
      <div id="response" className={`${active ? 'response__active' : ''}`}>
        <div id="response--header">
          {response.statusCode ? (
            <div id="response--tabs">
              {tabs.map((tab) => (
                <OptionTab
                  key={tab.id}
                  label={tab.label}
                  id={tab.id}
                  active={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                />
              ))}
            </div>
          ) : (
            <span>Response</span>
          )}
          <div id="response--metrics">
            <ResponseMetric
              label="Status"
              value={`${response.statusCode} ${response.statusText}`}
            />
            <ResponseMetric label="Time" value={`${response.elapsedTime} ms`} />
            <ResponseMetric
              label="Size"
              value={`${calcResponseSize(response.size)}`}
            />
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
        </div>
        <div id="response--value">
          {active && activeTab === 0 ? (
            <MonacoEditor
              width="100%"
              height="100%"
              editorWillMount={() => {}}
              editorDidMount={() => {}}
              editorWillUnmount={() => {}}
              onChange={() => {}}
              value={JSON.stringify(response.data, null, 4)}
              options={{ readOnly: true, minimap: { enabled: false } }}
              language="json"
              theme="vs-dark"
            />
          ) : (
            active &&
            activeTab === 1 && (
              <Table
                head={['Key', 'Value']}
                readOnly
                body={Object.entries<string>(response.headers).map(
                  (entry: string[]) => {
                    return {
                      id: `${Math.random() * 999}`,
                      fields: [entry[0], entry[1]],
                    };
                  },
                )}
              />
            )
          )}
        </div>
      </div>
    </>
  );
}
