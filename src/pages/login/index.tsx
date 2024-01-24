import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../../components/Input'
import { auth } from '../../services/firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'

export function Login(){
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");

 function handleSubmit(e: FormEvent){
  e.preventDefault();

 if(email === '' || password === ''){
  alert("Fill in the blanks")
  return;
 }

 signInWithEmailAndPassword(auth, email, password)
 .then(() => {
   console.log('successfully logged in')
     
 })
 .catch((error) => {
  console.log('unable to log in')
  console.log(error);

 })

 }


    return(
        <div className="flex flex-col w-full h-screen items-center justify-center">
           <Link to="/">
             <h1 className='mt-11 mb-7 text-white font-bold text-5xl'>Dev
             <span className='bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent'>Link</span></h1>
           </Link>
          
         <form onSubmit={handleSubmit} className='w-full max-w-xl flex flex-col px-2'>
           <Input
             placeholder='Type your Email...'   
             type='email' 
             value={email}
             onChange={(e) => setEmail(e.target.value)}
           />
           <Input
             placeholder='********************'   
             type='password' 
             value={password}
             onChange={(e) => setPassword(e.target.value)}
           />
           <button 
           type='submit'
           className='h-9 bg-sky-500 rounded border-0 text-lg font-medium text-white'>
             Join Now
           </button>
          
         </form>

        </div>
    )

}