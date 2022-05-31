import React, { useState } from "react";

const Input = ({ htmlFor, type, id, name, children, ...props }) => {
  const [text, setText] = useState("");

  return (
    <div>
      <div className="container-input">
        <label htmlFor={htmlFor}>{children}</label>
        <input
          onChange={(e) => setText(e.target.value)}
          type={type}
          id={id}
          name={name}
          value={text}
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;
