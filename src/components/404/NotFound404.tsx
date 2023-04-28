import Layout from "../Common/Layout";
import { Link } from "react-router-dom";

const NotFound404 = () => {
  return (
    <Layout title="404">
      <div className="py-6 bg-white sm:py-8 lg:py-12">
        <div className="max-w-screen-lg px-4 mx-auto md:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            {/* <!-- content - start --> */}
            <div className="flex flex-col items-center justify-center sm:items-start md:py-24 lg:py-32">
              <p className="mb-4 text-sm font-semibold text-indigo-500 uppercase md:text-base">
                Error 404
              </p>
              <h1 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl sm:text-left">
                Page not found
              </h1>

              <p className="mb-8 text-center text-gray-500 md:text-lg sm:text-left">
                The page you are looking for does not exist.
              </p>

              <Link
                to="/"
                className="inline-block px-8 py-3 text-sm font-semibold text-center text-gray-500 transition duration-100 bg-gray-200 rounded-lg outline-none hover:bg-gray-300 focus-visible:ring ring-indigo-300 active:text-gray-700 md:text-base"
              >
                Go home
              </Link>
            </div>
            {/* <!-- content - end --> */}

            {/* <!-- image - start --> */}
            <div className="relative overflow-hidden bg-gray-100 rounded-lg shadow-lg h-80 md:h-auto">
              <img
                src={new URL("../../assets/img/404.png", import.meta.url).href}
                loading="lazy"
                alt="404"
                className="absolute inset-0 object-cover object-center w-full h-full"
              />
            </div>
            {/* <!-- image - end --> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound404;
