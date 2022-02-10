import { Link } from "react-router-dom";

// a footer component with a copyright notice and links to the privacy policy and terms of use  and site map in tailwind css
// Language: typescript
// Path: src\components\Footer\Footer.tsx

const Footer = () => {
  return (
    // <footer className="flex flex-col items-center h-screen max-h-[40vh] bg-gray-700">
    //   <div className="container flex flex-row flex-wrap h-3/4 width-full p-4">
    //     <div className="h-1/2 w-{30} items-center justify-center flex">
    //       <img src={require("../../assets/img/gbicon.PNG")} alt="LOGO" />
    //     </div>

    //     <div className="h-1/2 w-{30} flex p-4 flex-col items-center justify-center ">
    //       <h2 className="text-base text-white">About Us</h2>
    //       <p className="text-sm text-white whitespace-normal w-full">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
    //         ratione!
    //       </p>
    //     </div>
    //     <div></div>
    //     <div></div>
    //   </div>
    // </footer>
    <div className="bg-gray-900">
      <footer className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 lg:gap-8 pt-10 lg:pt-12 mb-16">
          {/* start of first column */}
          <div className="col-span-full lg:col-span-2">
            {/* <!-- logo - start --> */}
            <div className="lg:-mt-2 mb-4">
              <Link
                to="/"
                className="inline-flex items-center text-gray-100 text-xl md:text-2xl font-bold gap-2"
                aria-label="logo"
              >
                {/* <svg
                  width="95"
                  height="94"
                  viewBox="0 0 95 94"
                  className="w-5 h-auto text-indigo-500"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                </svg>
                Flowrift */}
                <img src={require("../../assets/img/gbicon.PNG")} alt="LOGO" />
              </Link>
            </div>
            {/* <!-- logo - end --> */}
            {/* about company */}
            <p className="text-gray-400 sm:pr-8 mb-6">
              Filler text is dummy text which has no meaning however looks very
              similar to real text.
            </p>
            {/* end about company */}

            {/* <!-- social - start --> */}
            <div className="flex gap-4">
              {/* imsta logo */}
              <div
                className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                onClick={() => window.open("https://www.instagram.com/?hl=en")}
              >
                <svg
                  className="w-5 h-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              {/* imsta logo ends */}

              {/* facebook logo */}

              <div
                className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                onClick={() => window.open("https://www.facebook.com/")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="w-5 h-5"
                  viewBox="0 0 26 26"
                  fill="currentColor"
                >
                  <path d="M24 4H6a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h10v-9h-3v-3h3v-1.611C16 9.339 17.486 8 20.021 8c1.214 0 1.856.09 2.16.131V11h-1.729C19.376 11 19 11.568 19 12.718V14h3.154l-.428 3H19v9h5a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
                </svg>
              </div>
              {/* facebook logo ends */}

              <div
                className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                onClick={() => window.open("https://twitter.com/")}
              >
                <svg
                  className="w-5 h-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </div>

              <div
                className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                onClick={() => window.open("https://www.linkedin.com/")}
              >
                <svg
                  className="w-5 h-5"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
            </div>
            {/* <!-- social - end --> */}
          </div>
          {/* end of first column */}
          {/* <!-- nav - start --> */}
          <div>
            <div className="text-gray-100 font-bold tracking-widest uppercase mb-4">
              Products
            </div>

            <nav className="flex flex-col gap-4">
              <div>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Overview
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Solutions
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Pricing
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Customers
                </a>
              </div>
            </nav>
          </div>
          {/* <!-- nav - end --> */}

          {/* <!-- nav - start --> */}
          <div>
            <div className="text-gray-100 font-bold tracking-widest uppercase mb-4">
              Company
            </div>

            <nav className="flex flex-col gap-4">
              <div>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  About
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Investor Relations
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Jobs
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Press
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Blog
                </a>
              </div>
            </nav>
          </div>
          {/* <!-- nav - end --> */}

          {/* <!-- nav - start --> */}
          <div>
            <div className="text-gray-100 font-bold tracking-widest uppercase mb-4">
              Support
            </div>

            <nav className="flex flex-col gap-4">
              <div>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Contact
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Documentation
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Chat
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  FAQ
                </a>
              </div>
            </nav>
          </div>
          {/* <!-- nav - end --> */}

          {/* <!-- nav - start --> */}
          <div>
            <div className="text-gray-100 font-bold tracking-widest uppercase mb-4">
              Legal
            </div>

            <nav className="flex flex-col gap-4">
              <div>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Terms of Service
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Privacy Policy
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                >
                  Cookie settings
                </a>
              </div>
            </nav>
          </div>
          {/* <!-- nav - end --> */}
        </div>

        <div className="text-gray-400 text-sm text-center border-t border-gray-800 py-8">
          © 2021 - Present Flowrift. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
