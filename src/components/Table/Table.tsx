import { useState } from 'react';
import './Table.style.scss';
import { FaTrash } from 'react-icons/fa6';

export type BodyType = {
  id: string;
  fields: string[];
};

export type TableProps = {
  head: string[];
  body: Array<BodyType>;
  onChange?: () => void;
  onRowCreation?: () => void;
  readOnly?: boolean;
};

export function Table(props: TableProps) {
  const [body, setBody] = useState(props.body);
  const [changes, setChanges] = useState<string[]>([]);

  function onChange(e: BodyType) {
    props.onChange?.();
    if (changes.includes(e.id)) return;

    setBody((b) => [
      ...b,
      { id: `${Math.random() * 999} `, fields: b[0].fields },
    ]);
    setChanges((c) => [...c, e.id]);
    setTimeout(() => props.onRowCreation?.());
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            {props.head.map((h, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <td key={i}>{h}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((_body) => (
            <tr key={_body.id}>
              {_body.fields.map((b, i) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <td key={i}>
                  <input
                    readOnly={props.readOnly || false}
                    onChange={() => onChange(_body)}
                    type="text"
                    placeholder={b}
                  />
                </td>
              ))}
              {!props.readOnly && (
                <i className="rowDelete">
                  <FaTrash />
                </i>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
