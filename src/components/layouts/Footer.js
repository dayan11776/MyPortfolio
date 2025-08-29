import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="mt-7 z-20 w-full p-4 bg-white border-t border-gray-200 shadow-sm md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" className="hover:underline">Bryan Tapel</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
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
    </footer>
  )
}
