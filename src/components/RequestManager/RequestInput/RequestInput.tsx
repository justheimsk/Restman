import './RequestInput.style.scss';

export function RequestInput() {
  return (
    <>
      <div id="input--container">
        <div id="input--inner-container">
          <select name="method" id="input--method-select">
            <option value="get">GET</option>
          </select>
          <input type="text" id="input" placeholder="Enter url or paste text" />
        </div>
        <button type="button" id="input--button">
          Send
        </button>
      </div>
    </>
  );
}
