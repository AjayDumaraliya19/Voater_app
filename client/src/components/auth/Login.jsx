import React, { useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import loginImage from "../../assets/images/Vote.png";
import { BASE_URL, LOGIN } from "../../redux_saga/constant";

const Login = () => {
  const name = useRef();
  const email = useRef();
  const password = useRef();

  const handleLogin = () => {
    const data = {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
    };

    axios
      .post(BASE_URL + LOGIN, data)
      .then((res) => {
        console.log("response loggin auth", res);
      })
      .catch((error) => {
        console.log("login jsx error", error.message);
      });
  };

  return (
    <section>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">
        <div className="size-1/4">
          <img src={loginImage} alt="Login-Image" />
        </div>
        <div className="px-10 py-16 flex flex-col justify-center">
          <div className="max-w-lg">
            <h1 className="font-bold text-5xl text-center">Welcome back!</h1>
            <p className="text-center mt-3 font-semibold text-gray-500">
              Democracy is based upon the conviction there are extraordinary
              possibilities in ordinary people.
            </p>
          </div>

          <form action="post">
            <div className="mt-10 grid grid-col-1 gap-x-6 gap-y-6 sm:grid-col-6">
              <div className="col-span-full">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  className="px-5 block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus: focus:ring-gray-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>

              <div className="col-span-full">
                <input
                  type="password"
                  name="password"
                  id="fPassword"
                  placeholder="Enter your password"
                  className="px-5 block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus: focus:ring-gray-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
            </div>

            <div className="px-5 mt-4 font-semibold text-sm flex justify-end text-gray-800 hover:text-gray-600">
              <Link>Forgot Password?</Link>
            </div>

            <div className="col-span-1/2 mt-6 pb-6">
              <input
                type="submit"
                value="Login"
                onClick={handleLogin}
                className="rounded-full w-full bg-gray-950 px-3 py-2 text-md font-bold text-white shadow-sm hover:bg-gray-800"
              />
            </div>

            {/* <div className="col-span-1/2 mt-3">
              <Link
                to={"/signup"}
                className="rounded-full w-full bg-gray-950 px-3 py-2 text-md font-bold text-white shadow-sm hover:bg-gray-800"
              >
                Register Here
              </Link>
            </div> */}

            {/* <div className="col-span-1/2 mt-3">
              <input
                type="submit"
                value="Register here"
                className="rounded-full w-full bg-gray-950 px-3 py-2 text-md font-bold text-white shadow-sm hover:bg-gray-800"
              />
            </div> */}

            <div>
              <p className="mt-6 text-center font-semibold text-sm">
                Not a member?
                <Link
                  to={"/register"}
                  className="text-gray-800 hover:text-gray-600"
                >
                  {" "}
                  Register now
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
