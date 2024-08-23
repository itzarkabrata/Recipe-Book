
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import MyRecipes from './pages/MyRecipes'
import { useState } from 'react'

function App() {
  
  const [formData,setFormData] = useState<string>("")

  const handle = (data:string)=> {
    setFormData(data)
  }
  
  return (
    <div className='font-moderustic min-h-screen flex flex-col'>
      <BrowserRouter>
      <Header/>
      <div className='flex flex-grow'>
        <Routes>
          <Route
            path='/'
            element={<Home/>}
          ></Route>
          <Route
            path='/myrecipes'
            element={<MyRecipes/>}
          ></Route>
        </Routes>
      </div>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
