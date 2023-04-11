import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Header from "../Header";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>

      <Header></Header>
    
    <div className="bg-white p-6 rounded-lg shadow-lg">
      {authUser ? (
        <>
          <p className="text-lg font-semibold mb-4">
            Signed in  {authUser.name}
          </p>
          <button
            onClick={userSignOut}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Sign out
          </button>
        </>
      ) : (
        <p className="text-lg font-semibold">Signed out</p>
      )}
    </div>
    </div>
  );
};

export default AuthDetails;
