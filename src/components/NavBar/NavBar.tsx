import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
//  raisin black = #2E2C2F
// deep space Sparkle = #475B63
// lavender = #FFEAEC
const NavBar = () => {
    const [isToggle, setIsToggle] = useState(false);
    const toggleMenuHandler = () => {
        setIsToggle(!isToggle);
        console.log(isToggle);
    }

    return (
        <nav className='bg-gray-700 h-28 '>
            <div className='flex flex-row mx-auto items-center justify-between self-center max-w-screen-xl px-12 '>
                <div className=" h-full w-48 bg-white border border-y-0 border-black  " >
                    <Link to='/'>
                        <img src={require('../../assets/img/gbicon.PNG')} alt="LOGO" className='py-3' />
                    </Link>
                </div>
                <ul className='hidden md:flex md:flex-row md:items-center md:space-x-6'>
                    <li>
                        <NavLink to='/' className={({ isActive }) => (isActive ? 'text-violet-50' : 'text-black')}>
                            <span className='text-xl font-bold'>Home</span></NavLink>
                    </li>
                    <li>
                        <NavLink to='/aboutus' className={({ isActive }) => (isActive ? 'text-violet-50' : 'text-black')}>
                            <span className='text-xl font-bold'>About Us</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/products' className={({ isActive }) => (isActive ? 'text-violet-50' : 'text-black')} >
                            <span className='text-xl font-bold'>Products</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contactus' className={({ isActive }) => (isActive ? 'text-violet-50' : 'text-black')} >
                            <span className='text-xl font-bold'>Contact Us</span>
                        </NavLink>
                    </li>
                </ul>
                <div className="flex justify-center">
                    <div>
                        <div className="dropstart relative">
                            {/* <button
                                className="
                                    dropdown-toggle
                                    px-6
                                    py-2.5
                                    bg-blue-600
                                    text-white
                                    font-medium
                                    text-xs
                                    leading-tight
                                    uppercase
                                    rounded
                                    shadow-md
                                    hover:bg-blue-700 hover:shadow-lg
                                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                    active:bg-blue-800 active:shadow-lg active:text-white
                                    transition
                                    duration-150
                                    ease-in-out
                                    flex
                                    items-center
                                    whitespace-nowrap"
                                type="button"
                                id="dropdownMenuButton1s"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="caret-left"
                                    className="w-1.5 mr-2"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 192 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"
                                    ></path>
                                </svg>
                                Dropstart
                            </button> */}
                            <GiHamburgerMenu className='h-6 w-6 cursor-pointer hover:fill-indigo-500 md:hidden' style={{ color: '#FFEAEC' }} onClick={toggleMenuHandler} />
                            <ul
                                className="
                                    min-w-max
                                    absolute
                                    bg-white
                                    text-base
                                    z-50
                                    float-left
                                    py-2
                                    list-none
                                    text-left
                                    rounded-lg
                                    shadow-lg
                                    mt-1
                                    m-0
                                    bg-clip-padding
                                    border-none
                                    "
                                aria-labelledby="dropdownMenuButton1s"
                            >
                                <li>
                                    <a
                                        className="
                                                text-sm
                                                py-2
                                                px-4
                                                font-normal
                                                block
                                                w-full
                                                whitespace-nowrap
                                                bg-transparent
                                                text-gray-700
                                                hover:bg-gray-100
                                                "
                                        href="#"
                                    >Action</a
                                    >
                                </li>
                                <li>
                                    <a
                                        className="
                                            dropdown-item
                                            text-sm
                                            py-2
                                            px-4
                                            font-normal
                                            block
                                            w-full
                                            whitespace-nowrap
                                            bg-transparent
                                            text-gray-700
                                            hover:bg-gray-100
                                            "
                                        href="#"
                                    >Another action</a
                                    >
                                </li>
                                <li>
                                    <a
                                        className="
                                            dropdown-item
                                            text-sm
                                            py-2
                                            px-4
                                            font-normal
                                            block
                                            w-full
                                            whitespace-nowrap
                                            bg-transparent
                                            text-gray-700
                                            hover:bg-gray-100
                                            "
                                        href="#"
                                    >Something else here</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
};


export default NavBar;