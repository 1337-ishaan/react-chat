import * as React from "react";
import AuthInput from "../utils/AuthInput";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  // make a single object for credentials and pass that as body
  // registering the user
  const registerUser = (event: any) => {
    event.preventDefault();
    console.log("registering");
    fetch("http://172.105.61.111:3010/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  return (
    <form
      onSubmit={registerUser}
      className="flex flex-col items-center align-middle my-40 justify-evenly space-y-10 content-between"
    >
      <div className="text-5xl text-yellow-300">Let's get registered</div>
      <input
        placeholder="Username"
        className="shadow-lg rounded-b-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-100"
        type="text"
        onChange={(e) => setUsername(e.target.value)}
      />{" "}
      <input
        placeholder="Password"
        className="shadow-lg rounded-b-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-100"
        type="text"
        onChange={(e) => setPassword(e.target.value)}
      />{" "}
      <div
        onClick={registerUser}
        className="px-4 py-2 bg-gradient-to-r from-yellow-100 to-blue-100 hover:from-blue-100 hover:to-yellow-100 shadow-md cursor-pointer"
      >
        Sign Up
      </div>
    </form>
  );
};

export default Register;
