import { useNavigate } from "react-router-dom";

const IntroAbout = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* about section with a side image */}
      <div className="p-6 mt-1 sm:py-8 lg:py-12">
        <div className="container flex flex-col flex-wrap items-center px-4 py-4 mx-auto lg:container md:flex-row md:items-center md:justify-start md:px-8 ">
          {/* about intro  div*/}
          <div className="w-full pr-4 md:w-1/2">
            <div className="text-left">
              <div>
                <h4 className="font-bold font-skModernist text-2xl leading-8 py-4 px-1 text-[#b8cc08]">
                  About us
                </h4>
                <h1 className="pb-5 text-4xl font-bold text-gray-800 font-skModernistBold">
                  Golden Bough Aquaculture Ltd.
                </h1>
              </div>

              <p className="mb-4 text-lg leading-8 text-left text-gray-600 font-skModernist">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sed odio sit amet nibh vulputate cursus. Nullam accumsan, nulla
                sed dictum eleifend, nunc risus consectetur purus, at elementum
                risus nulla et nunc. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Animi placeat quibusdam numquam error fugit!
                Eum ea quibusdam delectus earum, itaque unde, sunt dolor totam,
                deleniti cum est laboriosam repellat similique!
              </p>
              <div className="pt-5">
                <button
                  className=" rounded-xl  text-gray-800 font-skModernistBold bg-[#b8cc08] text-lg border-solid  border-4  hover:border-[#b8cc08]"
                  onClick={() => {
                    navigate("/about-us");
                  }}
                >
                  <div className="p-2 text-white">Read More</div>
                </button>
              </div>
            </div>
          </div>
          {/* about image */}
          <div className="flex flex-col items-center justify-center w-5/6 h-full pt-8 pl-4 md:w-1/2 md:pl-12 md:justify-start">
            <img
              src={require("../../../assets/img/Carp-fishing.jpg")}
              className="w-full rounded-2xl"
              alt="aboutimg"
            />
          </div>
          {/* end of about image */}
        </div>
      </div>
    </>
  );
};

export default IntroAbout;
