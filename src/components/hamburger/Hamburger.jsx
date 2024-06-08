import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";


const Hamburger = () => {
    const [close, setClose] = React.useState(false)
    React.useEffect(() => {
        const nav_el = document.querySelector("#nav-el")
        const handleClickOutside = (event) => {
            if (!event.target.closest('.hamburger')) {
                if (nav_el.classList.contains("nav-active")) {
                    setClose(false)
                    nav_el.classList.remove("nav-active")
                    nav_el.classList.add("hidden")
                }
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    function handleClick() {
        const nav_el = document.querySelector("#nav-el")
        nav_el.classList.toggle("nav-active")
        nav_el.classList.toggle("hidden")
        setClose((prev) => !prev)
    }
    return (
        <div className="hamburger">
            <RxHamburgerMenu
                onClick={() => handleClick()}
                className={`scale-150 text-sky-500
                    dark:text-white hidden
                    ${close? "tail:hidden": "tail:block"}
                    transition-all duration-300 delay-75
                `}
            />
            <MdOutlineClose
                onClick={() => handleClick()}
                className={`scale-150 text-sky-500
                    dark:text-white hidden 
                    ${close? "tail:block": "tail:hidden"}
                    transition-all duration-300 delay-75
                `}
            />
        </div>
    )
}

export default Hamburger
