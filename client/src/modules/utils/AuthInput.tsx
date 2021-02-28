import React, { useState } from "react";

interface PropTypes {
  type: string;
  placeholder: string;
}

const AuthInput = (props: PropTypes) => {
  const [seePassword, setSeePassword] = useState(props.type);

  // toggle password visibility
  const showPassword = () => {
    seePassword === "password"
      ? setSeePassword("text")
      : setSeePassword("password");
  };

  return (
    <>
       <input
        placeholder={props.placeholder}
        className="shadow-lg rounded-b-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-100"
        type={seePassword}
      />
      {props.type === "password" && (
        <button onClick={showPassword}>Toggle Password Visibility</button>
      )}
    </>
  );
};

export default AuthInput;
