import { useState,useEffect } from "react"
import { Link, useLocation } from 'react-router-dom';


type PropsType = {
    handleSearchButton:(data:boolean,path:string)=>void;
}

const Header = ({handleSearchButton}:PropsType) => {
    
    const location = useLocation()
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [searchOpen, setSearchOpen] = useState<boolean>(false);

    const handleSearchOpen = ()=>{
        setSearchOpen(true)
        console.log(window.location.pathname)
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(()=>{
        setSearchOpen(false)
    },[location.pathname])

    useEffect(()=>{
        handleSearchButton(searchOpen,window.location.pathname)
    },[searchOpen])

    const handleHamburger = ()=>{
           setIsOpen(!isOpen)
    }
    
    return (
        <div className="w-full px-4 min-h-16 shadow-md flex max-md:flex-row-reverse items-center justify-between sticky top-0 z-50 bg-slate-200">

            <div className=" cursor-pointer text-xl text-lightShade" title="Search Here" onClick={()=>{handleSearchOpen();scrollToTop()}}><i className="fa-solid fa-magnifying-glass text-darkShade"></i></div>
            <div id="logo" className=" font-semibold text-2xl md:ml-48">
                <span className="text-darkShade">Recipe </span><span className="text-lightShade">Book</span>
            </div>

            <div>

                <div className="md:hidden text-xl text-lightShade" onClick={handleHamburger}>
                    <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
                </div>
                <nav className={`${isOpen?"opacity-100 max-h-screen":"opacity-0 max-h-0"} z-40 md:hidden text-lightShade flex flex-col items-start justify-around  w-full min-h-[170px] h-auto top-16 absolute right-0 bg-[#040418a1] font-medium pl-4 pb-2 rounded-b-lg transition-all overflow-hidden duration-[800ms] ease-in-out`}>
                    <Link onClick={() => { setIsOpen(!isOpen) }} to="/">Home</Link>
                    <Link onClick={() => { setIsOpen(!isOpen) }} to="/myrecipes">My Recipes</Link>
                    <Link onClick={() => { setIsOpen(!isOpen) }}  to="/login">
                        <div className="text-white bg-darkShade py-2 px-4 rounded-md">Login</div>
                    </Link>
                </nav>
                

                <nav className="max-md:hidden text-darkShade flex items-center justify-between w-[250px] font-medium text-sm">
                    <Link to="/">Home</Link>
                    <Link to="/myrecipes">My Recipes</Link>
                    <Link to="/login">
                        <div className="text-white bg-darkShade py-2 px-4 rounded-md">Login</div>
                    </Link>
                </nav>

            </div>

        </div>
    )
}

export default Header
