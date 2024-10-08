import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios, { AxiosResponse } from 'axios'
import Cookies from 'js-cookie';
import Login_bg from '../assets/images/login_bg.jpg'


interface LoginData {
  "database_connectivity_status": {
    "status": number;
    "msg": string;
  };
  "status": number;
  "msg": string;
  "user_token": string;
}

const Login = () => {
  const [Password, setPassword] = useState<string>('')
  const [Email, setEmail] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [show, setShow] = useState<boolean>(false)

  const toggleEye = ()=>{
    try {
      setShowPassword(!showPassword)
    } catch (error) {
      //redirect to error page
      console.log(error);
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {

    e.preventDefault()
    const loginData = {
      email: Email,
      Password: Password
    }

    try {
      const response: AxiosResponse<LoginData> = await axios.post('', loginData)
      alert(response.data.msg)
      Cookies.set('login_data', response.data.user_token, { expires: 7, path: '/', secure: true })
    }
    catch (error) {
      if (axios.isAxiosError(error)) {
        // Axios error handling
        console.error('Axios error posting data:', error.message);
      } else {
        // Generic error handling
        console.error('Error posting data:', error);
      }
    }
  }

  useEffect(() => {
    setTimeout(() => setShow(true), 100)
  }, [])


  return (
    <div id='container' className='flex items-center justify-center h-full' style={{ backgroundImage: `url(${Login_bg})`, height: "100vh" }}>
      <div id="login" className={` mt-10 mb-10 rounded-lg  bg-orange-100 h-[450px] w-[320px] max-sm:w-[90%] max-sm:max-w-[356px] text-darkShade shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-opacity duration-[600ms] ease-in ${show ? "opacity-100" : "opacity-0"}`}>
        <h2 className='text-2xl pt-4 pl-4 font-semibold'>Sign In</h2>
        <form id="input-section" className='flex flex-col mt-4' onSubmit={handleSubmit}>
          <div id="input" className='flex flex-col p-3 gap-2 font-medium'>
            <span>Email</span>
            <input type="email" value={Email}
              onChange={(e) => { setEmail(e.target.value) }} placeholder='you@example.com' className='p-2 focus:outline-none focus:border-lightShade border-gray-300 w-full border-[1px] focus:border-2 rounded-lg' /></div>
          <div id="input" className='flex flex-col p-3 gap-2 font-medium'>
            <span>Password</span>
            <div className='relative'>
              <input type={showPassword ? "text" : "password"}
                value={Password}
                onChange={(e) => { setPassword(e.target.value) }}
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
          Don't have account <Link to='/signup' onClick={() => { window.scrollTo({ top: 0 }) }} className='text-darkShade font-bold'>Sign Up</Link>
        </span>
      </div>
    </div>
  )
}

export default Login
