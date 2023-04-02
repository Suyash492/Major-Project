import React, { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const navigate = useNavigate();
  const HandleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        window.location.href = "/authDetails";
        // navigate("/authdetails"); 
      })
      .catch((error) => {
        console.error(error);
        alert(error);
      });
  };
  const HandleSignUp = (e) => {
    
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        window.location.href = "/authDetails";
        // navigate("/authdetails"); 
      })
      .catch((error) => {
        console.error(error);
        alert(error);
      });
  };

  const [isSignIn, setIsSignIn] = useState(true);

  const handleSwitch = () => {
    setIsSignIn(!isSignIn);
  };
<div></div>
  return (
    
    <div className="h-screen bg-gray-200 flex flex-col justify-center items-center">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-5">
          <h3 className="text-2xl font-bold mb-6">{isSignIn ? "Sign In" : "Sign Up"}</h3>
          <form onSubmit={isSignIn ? HandleSignIn : HandleSignUp}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-400 p-2 w-full rounded-md focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="border border-gray-400 p-2 w-full rounded-md focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </form>
          <div className="text-gray-500 mt-4">
            {isSignIn ? (
              <>
                Don't have an account yet?{" "}
                <button className="text-blue-500 focus:outline-none" onClick={handleSwitch}>
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button className="text-blue-500 focus:outline-none" onClick={handleSwitch}>
                  Sign In
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
