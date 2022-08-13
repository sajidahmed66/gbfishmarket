import Layout from "../Common/Layout";
import Container from "@mui/material/Container";
import { Outlet, NavLink, useLocation } from "react-router-dom";

const AboutUs = () => {
  const location = useLocation();
  return (
    <Layout title="About Us">
      <Container maxWidth="lg" className="">
        {/* about us heading */}
        <div className="flex flex-col items-center justify-center w-full mx-auto mt-20 ">
          <p className="text-xl md:text-2xl font-kawshan text-[#b8cc08]">
            about us
          </p>
          <p className="p-4 text-2xl font-bold text-gray-800 md:text-4xl font-skModernistBold">
            Golden Bough Aquaculture Ltd.
          </p>
        </div>
        <div className="flex flex-col w-full p-4 md:flex-row ">
          <div className="flex flex-row flex-wrap items-center justify-start flex-1 flex-grow w-full md:flex-col md:w-1/4 ">
            {[
              { title: "About Us", path: "/about-us" },
              { title: "Message from CEO", path: "/about-us/message-from-ceo" },
              { title: "History", path: "/about-us/history" },
              { title: "Teams", path: "/about-us/teams" },

              {
                title: "Company Philosophy",
                path: "/about-us/company-philosophy",
              },
            ].map((item, index) => (
              <NavLink
                key={index}
                className={
                  location.pathname === item.path
                    ? "w-full px-4 py-2 m-1 text-base font-bold text-center text-white hover:cursor-pointer sm:text-lg md:text-lg font-skModernistBold bg-slate-700"
                    : "w-full px-4 py-2 m-1 text-base font-bold text-center bg-slate-100 hover:text-white hover:cursor-pointer sm:text-lg md:text-lg font-skModernistBold hover:bg-slate-700"
                }
                to={item.path}
              >
                {item.title}
              </NavLink>
            ))}
          </div>
          <div className="w-full md:w-3/4">
            <Outlet />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default AboutUs;
