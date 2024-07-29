import {useState} from 'react'

const UserGreet = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const changeRendering = () => {
        setIsLoggedIn(!isLoggedIn)
    }
    return(
        <div className='bg-slate-300 text-slate-600 rounded-sm p-2 text-center mt-4'>
            <h1>Rendering with Ternary Operator</h1>
            {isLoggedIn && 
            <div className='bg-slate-300 text-blue-600 rounded-sm p-2'> 
               <h1>I'm Logged in</h1> 
            </div>
            }
        
            {!isLoggedIn && 
            <div className='bg-slate-300 text-blue-600 rounded-sm p-2'> 
                <h1>I'm not Logged in</h1> 
            </div>
            
            }
            <button 
                className='bg-blue-600 py-2 px-4 hover:bg-blue-500 text-white text-base
                rounded-md mt-2'
                onClick={changeRendering}
            >{isLoggedIn ? "Lon out" : "Log in"}</button>
        </div>
    )
}
export default UserGreet