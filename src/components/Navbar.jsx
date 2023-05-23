import { useState } from "react"
import { close, logo, menu } from "../assets"
import { navLinks } from "../constant"

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <div className="w-full flex py-6 justify-between items-center navbar">
            <img src={logo} className='w-[124px] h-[32px]' alt="logo"></img>
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins
                            font-normal cursor-pointer text-[16px]
                             ${index === nav.length - 1 ? 'mr-0' : 'mr-10'} text-white `}>
                        <a href={`#${nav.title}`} >{nav.title}</a>
                    </li>
                ))}
            </ul>
            <div className="sm:hidden flex justify-end items-center">
                <img src={toggleMenu ? close : menu}
                    className="w-[28px] h-[28px] object-contain"
                    onClick={() => { setToggleMenu((prev) => !prev) }}></img>
                <div className={`${toggleMenu ? 'flex' : 'hidden'} bg-black-gradient absolute top-20 right-0 
                mx-4 my-2 min-w-[240px] rounded-xl sidebar
                `}>
                    <ul className="list-none flex flex-col  justify-end items-center flex-1">
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins
                            font-normal cursor-pointer text-[16px]
                             ${index === nav.length - 1 ? 'mb-0' : 'mb-4'} text-white mt-4 `}>
                                <a href={`#${nav.title}`} >{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar