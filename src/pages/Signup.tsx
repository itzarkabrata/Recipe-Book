import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Login_bg from '../assets/images/login_bg.jpg'

const Login = () => {
  const [Password, setPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [show,setShow] = useState<boolean>(false)

  const toggleEye = ()=>{
    try {
      setShowPassword(!showPassword)
    } catch (error) {
      // redirect to not found
      console.log(error);
    }
  }

  useEffect(()=>{
    setTimeout(()=>setShow(true),100)
  },[])

  return (
    <div id='container' className=' flex items-center justify-center' style={{backgroundImage:`url(${Login_bg})`,height:"100vh"}}>
      <div id="login" className={`mt-10 mb-10 rounded-lg bg-orange-100 h-[550px] w-[420px] max-sm:w-[90%] max-sm:max-w-[356px] text-darkShade shadow-[0_40px_100px_rgba(0,0,0,0.4)] transition-opacity duration-[600ms] ease-in ${show ? "opacity-100":"opacity-0"}`}>
        <h2 className='text-2xl pt-4 pl-4 font-semibold'>Create Account</h2>
        <form id="input-section" className='flex flex-col mt-4'>
        <div id="input" className='flex flex-col p-3 gap-2 font-medium'>
            <span>Name</span>
            <input type="text" placeholder='Enter Your Name' className='p-2 focus:outline-none focus:border-lightShade border-gray-300 w-full border-[1px] focus:border-2 rounded-lg' /></div>
          <div id="input" className='flex flex-col p-3 gap-2 font-medium'>
            <span>Email</span>
            <input type="email" placeholder='you@example.com' className='p-2 focus:outline-none focus:border-lightShade border-gray-300 w-full border-[1px] focus:border-2 rounded-lg' /></div>
          <div id="input" className='flex flex-col p-3 gap-2 font-medium'>
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
            <button type='submit' className=' w-[90%] text-white rounded-xl py-2 bg-darkShade'>Sign up</button>
          </div>

        </form>
        <span className='pl-4'>
        Already have an account <Link to='/login' onClick={()=>{window.scrollTo({top:0})}} className='text-darkShade font-bold pb-6'>Log In</Link>
        </span>
      </div>
    </div>
  )
}

export default Login
