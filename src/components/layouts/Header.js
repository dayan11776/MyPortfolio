// import { NavLink,Link } from "react-router-dom"
import { useState,useEffect } from "react"
import { Link } from "react-scroll";

export const Header = () => {

    const activeLink = "block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
    const notActiveLink = "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    const [navbar,setNavbar] = useState(false)
     const [active,setActive] = useState("Home")
    const [light,setLight] = useState(JSON.parse(localStorage.getItem("light")) || false)


    useEffect(() => {
        localStorage.setItem("light",JSON.stringify(light))
        if(light){
            document.documentElement.classList.add("dark")
        }else{
            document.documentElement.classList.remove("dark")
        }
    },
    [light])

  return (
    <header>
        <nav className="bg-white dark:bg-gray-900  w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 fixed">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <p className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    <span><span className="text-3xl font-bold text-blue-700">B</span>ryan</span>
                </p>
            </Link>
           <div className="flex md:order-2">
                <button onClick={() => setLight(!light)} className="mr-4">
                    {
                        light?(
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>
                            </svg>
                        ):(
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"/>
                            </svg>
                        )
                    }
                </button>
                <button onClick={() => setNavbar(!navbar)} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
                <div className={`${navbar?"visible":"hidden"} tems-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-search">
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li className="cursor-pointer">
                        <Link to="Home" onClick={() => setActive("Home")} smooth duration={300} className={active === "Home"?activeLink:notActiveLink} >Home</Link>
                    </li>
                    <li className="cursor-pointer"  >
                        <Link to="Skills" onClick={() => setActive("Skills")} smooth duration={300}  className={active === "Skills"?activeLink:notActiveLink} >Skills</Link>
                    </li>
                    <li className="cursor-pointer">
                        <Link to="Projects" onClick={() => setActive("Projects")} smooth duration={300} className={active === "Projects"?activeLink:notActiveLink} >Projects</Link>
                    </li>
                    <li className="cursor-pointer">
                        <Link to="Contact" onClick={() => setActive("Contact")} smooth duration={300} className={active === "Contact"?activeLink:notActiveLink} >Contact</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}
