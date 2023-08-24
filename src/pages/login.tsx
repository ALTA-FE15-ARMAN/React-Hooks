import { useState } from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

import Button from "../component/Button";
import Input from "../component/Input";

const Login = () => {
  const navigate: NavigateFunction = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    Cookies.set("username", username, { path: "/" });
    Cookies.set("password", password, { path: "/" });

    if (username !== "" && password !== "") {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: `Welcome to News App, ${username}`,
        confirmButtonText: "OK",
      }).then((response) => {
        if (response.isConfirmed) {
          navigate("/news", {
            state: {
              username: username,
            },
          });
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Please check your username or password",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 w-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-md">
        <Input
          id="username"
          name="username"
          type="text"
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          id="password"
          name="password"
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button id="login" label="Login" onClick={() => handleLogin()} />
      </div>
    </div>
  );
};

export default Login;