import { useState } from "react"
import {Link} from 'react-router-dom';

const Header = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="w-full min-h-16 shadow-md flex items-center justify-between sticky top-0 z-50 bg-slate-200">
            <div id="logo" className=" font-semibold text-4xl ml-10">logo</div>
            <div>
                <div className="sm:hidden mr-4 text-2xl" onClick={() => { setIsOpen(!isOpen) }}>
                    <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
                </div> 
                    <nav className={`${isOpen?"max-h-screen opacity-100":"opacity-0 max-h-0"} sm:hidden flex flex-col items-start justify-around  w-full min-h-[170px] h-auto top-16 absolute right-0 bg-[#34396da1] font-medium pl-4 pb-2  text-white z-50 rounded-b-lg transition-max-height transition-opacity overflow-hidden duration-1000 ease-in-out`}>
                        <Link to="/">Home</Link>
                        <Link to="/myrecipes">My Recipes</Link>
                        <Link to="#">
                            <div className="text-white bg-green-400 py-2 px-4 rounded-md">Login</div>
                        </Link>
                </nav>
                <nav className="max-sm:hidden flex items-center justify-around w-[350px] font-medium">
                    <Link to="/">Home</Link>
                    <Link to="/myrecipes">My Recipes</Link>
                    <Link to="#">
                        <div className="text-white bg-green-400 py-2 px-4 rounded-md">Login</div>
                    </Link>
                </nav>
            </div>

        </div>
    )
}

export default Header
