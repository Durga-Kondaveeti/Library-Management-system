import { onAuthStateChanged } from 'firebase/auth'
import React,{useEffect,useState} from 'react'
import { auth } from './Auth'

const AuthDetails = () => {
    const[authUser,setAuthUser]=useState(null)
   
    useEffect(()=>
    {
            const listen = onAuthStateChanged(auth,(user)=>
            {
                    if(user)
                    {
                        setAuthUser(user);
                    }
                   
                    else
                     {
                        setAuthUser(null)
                    }
                });
                return () => listen();
    },[]);

    const signoutHandler=()=>
    [
        setAuthUser(null).then(()=>console.log("signout")).catch(error=>console.log(error))
    ]
  return (
    <div>
      {authUser ? <div><h1>signin</h1>
      <button onClick={()=>signoutHandler()}>signout</button>
      </div>
      :<p>shit!!!!!</p> }
    </div>
  )
}

export default AuthDetails;
