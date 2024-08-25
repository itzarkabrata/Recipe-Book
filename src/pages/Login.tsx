import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [Password, setPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const toggleEye = ()=>{
    setShowPassword(!showPassword)
  }

  return (
    <div id='container' className=' flex items-center mb-20 justify-center'>
      <div id="login" className=' mt-10 rounded-lg bg-white h-[450px] w-[320px] max-sm:w-[90%] max-sm:max-w-[356px] text-darkShade shadow-[0_10px_30px_rgba(0,0,0,0.4)]'>
        <h2 className='text-2xl pt-4 pl-4 font-semibold'>Sign In</h2>
        <form id="input-section" className='flex flex-col mt-4'>
          <div id="input" className='flex flex-col p-3 gap-2'>
            <span>Email</span>
            <input type="email" placeholder='you@example.com' className='p-2 focus:outline-none focus:border-lightShade border-gray-300 w-full border-[1px] focus:border-2 rounded-lg' /></div>
          <div id="input" className='flex flex-col p-3 gap-2'>
            <span>Password</span>
            <div className='relative'>
            <input type={showPassword ? "text" : "password"} 
            value={Password}
            onChange={(e)=>{setPassword(e.target.value)}}
            placeholder='Enter Your Password' 
            className='p-2 focus:outline-none focus:border-lightShade border-gray-300 w-full border-[1px] focus:border-2 rounded-lg' />
            <i onClick={toggleEye}
            className={showPassword ? "fa-solid fa-eye-slash absolute inset-y-0 right-0 px-3 mt-3 text-gray-600" : "fa-solid fa-eye absolute inset-y-0 right-0 px-3 mt-3 text-gray-600"}></i>
            </div>
          </div>
          <div className="button w-full flex items-center justify-center pt-12 pb-12">
            <button type='submit' className=' w-[90%] text-white rounded-xl py-2 bg-darkShade'>Log In</button>
          </div>

        </form>
        <span className='pl-4'>
          Don't have account <Link to='/signup' className='text-darkShade font-bold'>Sign Up</Link>
        </span>
      </div>
    </div>
  )
}

export default Login
