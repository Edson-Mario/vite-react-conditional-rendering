import {useState} from 'react'

const UserGreetElementVariables = () =>{

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [textButton, setTextButton] = useState('Log out');
    const changeMassage = () =>{
        setIsLoggedIn(!isLoggedIn)
    }

    let message

    if(isLoggedIn){
        message =  <h1 
            className=' bg-slate-400 py-2 text-center duration-500'
        >Welcome Edson Manuel Mário</h1>
    }else{
        message = <h1 
            className=' bg-green-400 py-2 text-center duration-500 text-xl'
        >The user is not logged</h1>
    }

    return(
        <div className='mx-auto bg-lime-300 py-2'>
            <h1 className='text-center text-xl'>Rendering with Element Variable</h1>
            {message}
            <button 
            className='bg-blue-500 hover:bg-blue-400 text-lg py-2 px-4 mt-2 rounded-md 
            block mx-auto text-white'
            onClick={changeMassage}
            >{isLoggedIn ? "Lon out" : "Log in"}</button>
        </div>
        
    )
}

export default UserGreetElementVariables