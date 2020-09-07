import React from "react";

const Form = (props) => {
  return (
    <>
      <form onSubmit={props.submit}>
        <input
          type="text"
          name=""
          id=""
          placeholder="hold my beer"
          onChange={props.change}
          value={props.value}
        />
        <button>show drink</button>
      </form>
    </>
  );
};

export default Form;
