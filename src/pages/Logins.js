import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Logins = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://reqres.in/api/login",
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(JSON.stringify(res?.data?.token));
      localStorage.setItem("token", JSON.stringify(res?.data?.token));
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full bg-cover h-full bg-gradient-to-bl from-white to-yellow-300 justify-center items-center">
      <section className="max-w-7xl mx-auto justify-center items-center ">
        <div className="min-h-screen flex justify-center items-center">
          <div className="w-full mx-auto justify-center items-center px-6 lg:px-0">
            <div className="max-w-xl mx-auto h-auto rounded-3xl p-10 bg-gray-300 bg-opacity-10 shadow-xl justify-center items-center">
              <form>
                <div className="justify-center flex mb-8">
                  <img src="/IMG/logo.png" alt="Logo" />
                </div>
                <h1 className="text-white font-bold text-4xl mb-8">Sign in</h1>
                <div className="py-3">
                  <input
                    className="visible bg-transparent border rounded-md w-full py-3 px-4 text-black leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
                    value={email}
                    onChange={handleEmail}
                    placeholder="Email Address"
                    type="email"
                    required
                  />
                </div>
                <div className="py-3">
                  <input
                    className="block bg-transparent appearance-none border rounded-md w-full py-3 px-4 text-black leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
                    value={password}
                    onChange={handlePassword}
                    placeholder="Password"
                    type="password"
                    required
                  />
                </div>
                <div className="flex justify-between mt-4">
                  <div className="flex">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded cursor-pointer mt-1 align-top mr-2"
                    />
                    <p className="text-gray-500">Keep me signed in</p>
                  </div>
                  <div>
                    <a
                      className="text-blue-500 hover:border hover:border-b-blue-500"
                      href="/#"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <div className="py-3 pt-4">
                  <button
                    type="submit"
                    className="w-full bg-yellow-300 text-white font-bold py-3 px-4 rounded text-2xl hover:bg-yellow-400"
                    onClick={login}
                  >
                    Sign In
                  </button>
                </div>
                <p className="text-center text-gray-400">
                  Not registered yet?
                  <span>
                    <RouterLink className="font-semibold text-blue-500 hover:border hover:border-b-blue-500">
                      Create a new account
                    </RouterLink>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Logins;
