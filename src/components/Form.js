import React from "react";

const Form = (props) => {
  return (
    <>
      <form onSubmit={props.submit}>
        <input
          type="text"
          name=""
          id=""
          placeholder="search by name"
          onChange={props.change}
          value={props.value}
        />
        <button>show drink</button>
      </form>
    </>
  );
};

export default Form;
