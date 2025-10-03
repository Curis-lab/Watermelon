/**
 * Design Pattern: compound components and Render Props
 * @returns
 */

import { useState } from "react";

function Box({ style }) {
  return <div style={style}>Hello</div>;
}

const textBox = {
  main: ({ error }) => (error ? <div>main</div> : <div>error</div>),
  __proto__: {
    Box,
  },
};

function Hello({ flag }) {
  return flag ? <div>Hello</div> : <div>Hell</div>;
}
const componentArray = [new Hello(true), new Hello(false)];

console.log(componentArray);

// console.log(TextBox.Box);
function FormHandler({ template }) {
  const [collectData, setCollectData] = useState({});
  const [errorMsg, setErrorMsg] = useState("");

  const onChangeHandler =()=>{}
  const onSubmit = () => {console.log('submit')};
  return (
    <form onSubmit={onSubmit}>
        {template(onChangeHandler)}
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormHandler;
