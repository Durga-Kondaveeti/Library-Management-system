import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from './Auth';


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
    return () => listen();
  }, []);

  const signoutHandler = () => {
    console.log(authUser);
    setAuthUser(null);
    console.log("signout");
    console.log(authUser);
    signOut(auth);

  }

  return (
    <div>
      {authUser ? 
        <div>
          <h1>signin</h1>
          <button onClick={signoutHandler}>signout</button>
        </div>
       : 
       <div>
        <p>shit!!!!!</p>
    
      </div>
      }
    </div>
  );
}

export default AuthDetails;
