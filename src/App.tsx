
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import MyRecipes from './pages/MyRecipes'
import { useState } from 'react'

function App() {
  
  const [searchOpen,setSearchOpen] = useState<boolean>(false)
  const handleSearchButton = (data:boolean)=> {
    // console.log(data)
    setSearchOpen(data)
  }
  
  return (
    <div className='font-moderustic min-h-screen flex flex-col'>
      <BrowserRouter>
      <Header handleSearchButton={handleSearchButton}/>
      <div className='flex flex-grow bg-[#ffdb9e] flex-col w-full'>
        <Routes>
          <Route
            path='/'
            element={<Home searchButton={searchOpen}/>}
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
