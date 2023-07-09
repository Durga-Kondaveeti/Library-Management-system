import { signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from './Auth';
import Navbar from './Navbar';
import Login from './Login';
import Sign from './Sign';

export const authentication = createContext();

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const [checkout , setCheckout] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
  }, []);

  const handleCheckoutUpdate = (newCheckout) => {
    setCheckout(newCheckout);
  };

  return (
    <div>
      {authUser ? (
        <div>
          <Navbar />
        </div>
      ) : (
        <div>
      {checkout ?
          <Login redirectButton={setCheckout}/>:<Sign redirectButton={handleCheckoutUpdate}/>
         }
        </div>
      )}
    </div>
  );
};

export default AuthDetails;
