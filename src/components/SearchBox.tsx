import { useState } from "react";

interface PropsType {
    searchShow : boolean
    // onsubmit : (data:string)=>void
}
const SearchBox = ({searchShow}:PropsType) => {
    const [formData,setFormData] = useState<string>("")

    
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(formData);
    }
    return (
        <>
            <form className={`${searchShow?"z-30":"hidden z-20"}  top-40 absolute left-0 w-full py-10 flex justify-center overflow-hidden`} onSubmit={handleSubmit}>
                <input className="w-2/3 focus:outline-none p-3 px-8 rounded-full shadow-[0_2px_20px_rgba(0,0,0,0.2)]" type="text" name="searchdata" value={formData} onChange={(e) => { setFormData(e.target.value) }} placeholder="Search for recipes..." />
            </form>
        </>
    )
}

export default SearchBox
