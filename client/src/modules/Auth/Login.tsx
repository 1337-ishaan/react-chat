import * as React from "react";
import AuthInput from "../utils/AuthInput";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { LOGIN } from "../../store/types/actionTypes";

const Login = (props: any) => {
  const checkAuth = useSelector((state) => state);
  const dispatch = useDispatch();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  console.log(dispatch);
  console.log(checkAuth);

  console.log(username, password);
  const loginUser = () => {
    fetch("http://172.105.61.111:3010/login", {
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
    <div className="flex flex-col items-center align-middle my-40 justify-evenly space-y-10 content-between">
      <div className="text-5xl text-yellow-300">Let's get talking</div>
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
      />
      <div
        onClick={loginUser}
        className="px-4 py-2 bg-gradient-to-r from-yellow-100 to-blue-100 hover:from-blue-100 hover:to-yellow-100 shadow-md cursor-pointer"
      >
        Log In
      </div>
    </div>
  );
};

export default Login;
