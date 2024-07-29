import {useState} from 'react'

const UserGreetingIfElse = () =>{

    const [isChage, setChange] = useState(false)

    if(isChage){
        return(
           <div className='bg-slate-300 text-slate-600 rounded-sm p-2 text-center mt-4 mb-4'>
                <h1 className='mb-5'>Rendiring with If Else</h1>
                <h1>Welcome, Edson Mário</h1>
                <button className='bg-blue-600 py-2 px-4 hover:bg-blue-500 text-white text-base
                rounded-md mt-2 block mx-auto'
                defaultChecked={isChage} 
                onClick={()=> {
                    setChange(!isChage)
                }}>change</button>
           </div>
        )
    }else{
        return(
            <div className='bg-slate-300 text-slate-600 rounded-sm p-2 text-center mt-4 mb-4'>
                <h1 className='mb-5'>Rendiring with If Else</h1>
                Welcome, Joaquim Mário
                <button className='bg-blue-600 py-2 px-4 hover:bg-blue-500 text-white text-base
                rounded-md mt-2 block mx-auto'
                onClick={() =>{
                    setChange(!isChage)
                }}
                >change</button>
            </div>
        )
    }
}

export default UserGreetingIfElse