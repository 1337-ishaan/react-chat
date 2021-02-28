import * as React from "react";
import AuthInput from "../utils/AuthInput";

const Login = () => {
  return (
    <div className="flex flex-col items-center align-middle my-40 justify-evenly space-y-10 content-between">
      <div className="text-5xl text-yellow-300">Let's get talking</div>
      <AuthInput placeholder="Username" type="text" />
      <AuthInput placeholder="Password" type="password" />
      <div className="px-4 py-2 bg-gradient-to-r from-yellow-100 to-blue-100 hover:from-blue-100 hover:to-yellow-100 shadow-md cursor-pointer">Log In</div>
    </div>
  );
};

export default Login;
