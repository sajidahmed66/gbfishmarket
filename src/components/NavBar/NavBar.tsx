import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
//
//  raisin black = #2E2C2F
// deep space Sparkle = #475B63
// lavender = #FFEAEC
const NavBar = () => {
  const pervScrollY = useRef(0);
  pervScrollY.current = 110;
  const [makeSticky, setMakeSticky] = useState("");
  const [isToggle, setIsToggle] = useState(false);
  const [toggleClass, setToggleClass] = useState(
    "min-w-max absolute bg-white text-base z-50 top-6 -right-8 py-2 list-none text-left  rounded-lg shadow-lg  mt-1 m-0 bg-clip-padding border-none hidden"
  );
  const toggleMenuHandler = () => {
    if (!isToggle) {
      setToggleClass(
        "min-w-max absolute bg-white text-base z-50 top-6 -right-8 py-2 list-none text-left  rounded-lg shadow-lg  mt-1 m-0 bg-clip-padding border-none"
      );
    } else {
      setToggleClass(
        "min-w-max absolute bg-white text-base z-50 top-6 -right-8 py-2 list-none text-left  rounded-lg shadow-lg  mt-1 m-0 bg-clip-padding border-none hidden"
      );
    }
    setIsToggle(!isToggle);
  };

  const handleStickyNav = () => {
    const currentScrollY = window.scrollY;
    if (pervScrollY.current > currentScrollY) {
      setMakeSticky("");
    }
    if (pervScrollY.current < currentScrollY) {
      setMakeSticky("sticky");
    }

    // console.log(makeSticky, pervScrollY, currentScrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNav, { passive: true });
    return () => window.removeEventListener("scroll", handleStickyNav);
  }, [makeSticky]);

  return (
    <nav className={`bg-gray-700 h-26 top-0 z-10 ${makeSticky}`}>
      <div className="flex flex-row mx-auto items-center justify-between self-center max-w-screen-xl px-12">
        <div className=" h-full w-48 bg-white border border-y-0 border-black  ">
          <Link to="/">
            <img
              src={require("../../assets/img/gbicon.PNG")}
              alt="LOGO"
              className="py-3"
            />
          </Link>
        </div>
        <ul className="hidden md:flex md:flex-row md:items-center md:space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-violet-50" : "text-black"
              }
            >
              <span className="text-xl font-bold">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive ? "text-violet-50" : "text-black"
              }
            >
              <span className="text-xl font-bold">About Us</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "text-violet-50" : "text-black"
              }
            >
              <span className="text-xl font-bold">Products</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive ? "text-violet-50" : "text-black"
              }
            >
              <span className="text-xl font-bold">Contact Us</span>
            </NavLink>
          </li>
        </ul>
        <div className="flex justify-center">
          <div>
            <div className="relative">
              {isToggle ? (
                <AiFillCloseCircle
                  className="h-6 w-6 cursor-pointer hover:fill-indigo-500 md:hidden"
                  style={{ color: "#FFEAEC" }}
                  onClick={toggleMenuHandler}
                />
              ) : (
                <GiHamburgerMenu
                  className="h-6 w-6 cursor-pointer hover:fill-indigo-500 md:hidden"
                  style={{ color: "#FFEAEC" }}
                  onClick={toggleMenuHandler}
                />
              )}
              <ul
                className={toggleClass}
                aria-labelledby="dropdownMenuButton1s"
              >
                <li>
                  <Link
                    to="/"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
