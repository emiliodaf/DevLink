import { Link } from 'react-router-dom'
import { Input } from '../../components/Input'

export function Login(){
    return(
        <div className="flex flex-col w-full h-screen items-center justify-center">
           <Link to="/">
             <h1 className='mt-11 mb-7 text-white font-bold text-5xl'>Dev
             <span className='bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent'>Link</span></h1>
           </Link>
          
         <form className='w-full max-w-xl flex flex-col px-1'>
           <Input/>
         </form>

        </div>
    )

}