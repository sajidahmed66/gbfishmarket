import { NavLink, Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
//  raisin black = #2E2C2F
// deep space Sparkle = #475B63
// lavender = #FFEAEC
const NavBar = () => {
    return (
        <nav className='bg-gray-700 h-28 '>
            <div className='flex flex-row mx-auto items-center justify-between self-center max-w-screen-xl lg:px-12 '>
                <div className=" h-full w-48 bg-white border border-y-0 border-black  " >
                    <Link to='/'>
                        <img src={require('../../assets/img/gbicon.PNG')} alt="LOGO" className='py-3' />
                    </Link>
                </div>
                <GiHamburgerMenu className='h-6 w-6 md:hidden' style={{ color: '#FFEAEC' }} />

                <ul className='hidden md:flex md:flex-row md:items-center md:space-x-4'>
                    <li>
                        <NavLink to='/' className={({ isActive }) => (isActive ? "text-indigo-600" : 'text-violet-50')}>
                            <span className='text-xl font-bold'>Home</span></NavLink>
                    </li>
                    <li>
                        <NavLink to='/aboutus'><span className='text-xl font-bold'>About Us</span></NavLink>
                    </li>
                    <li>
                        <NavLink to='/products'><span className='text-xl font-bold'>Products</span></NavLink>
                    </li>
                    <li>
                        <NavLink to='/contactus'><span className='text-xl font-bold'>Contact Us</span></NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
};


export default NavBar;