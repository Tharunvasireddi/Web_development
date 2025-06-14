import React, { useState } from "react";
import { useAuth } from "../assets/Context/context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get("http://localhost:5000/users");
      const user = res.data.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        login(user);
        navigate("/dashboard");
      } else {
        alert("invalid email, pleas try again");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md "
      >
        <h1 className="text-xl mb-4">Login</h1>
        <input
          type="email"
          name=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="enter the email"
          className="p-2 border min-w-full"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.current  Target.value)}
          className="p-2 border min-w-full"
          value={password}
          placeholder="enter the password"
        />
        <button className="bg-blue-500 px-4 py-2 rounded-lg" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
