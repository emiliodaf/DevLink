import { auth } from '../services/firebaseConnection'
import { onAuthStateChanged } from 'firebase/auth'
import { ReacttNode, useState, useEffect  } from 'react'
import { Navigate } from 'react-router'



interface PrivateProps{
    children: ReactNode

}


export function Private({children}: PrivateProps): any{

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if(user){
        console.log(user);
      }else{
        console.log("no user logged in")
      }
    })
  }, [])

    return children;
}