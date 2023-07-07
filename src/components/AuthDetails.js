import { signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from './Auth';
import Navbar from './Navbar';
import Login from './Login';

export const authentication = createContext();

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
  }, []);

  const signoutHandler = () => {
    setAuthUser(null);
    console.log("signout");
    signOut(auth);
  };

  return (
    <div>
      {authUser ? (
        <div>
          <Navbar />
        </div>
      ) : (
        <div>
          <Login />
         
        </div>
      )}
    </div>
  );
};

export default AuthDetails;
