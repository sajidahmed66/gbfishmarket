const IntroAbout = () => {
  return (
    <>
      {/* about section with a side image */}
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-lg flex md:flex-row flex-wrap px-4 py-4 md:px-8 mx-auto max-w-screen-xl">
          {/* about intro */}
          <div className="w-full pr-4 md:w-1/2 ">
            <div className="text-left">
              <h4 className="font-bold font-skModernist text-2xl leading-8 py-4 px-1 text-[#b8cc08]">
                About us
              </h4>
              {/* <div className="px-6 pb-4">
                <img
                  src={require("../../../assets/img/divider.png")}
                  alt="divider"
                />
              </div> */}
              <h1 className="font-bold text-gray-800 font-skModernistBold text-4xl pb-5">
                Golden Bough Aquaculture Ltd.
              </h1>

              <p className="text-gray-600 text-left mb-4 font-skModernist text-lg leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sed odio sit amet nibh vulputate cursus. Nullam accumsan, nulla
                sed dictum eleifend, nunc risus consectetur purus, at elementum
                risus nulla et nunc. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Animi placeat quibusdam numquam error fugit!
                Eum ea quibusdam delectus earum, itaque unde, sunt dolor totam,
                deleniti cum est laboriosam repellat similique!
              </p>
              <div className="pt-5">
                <button className=" rounded-xl  text-gray-800 font-skModernistBold bg-[#b8cc08] text-lg border-solid  border-4  hover:border-[#b8cc08]  ">
                  <div className="p-2 text-white">Read More</div>
                </button>
              </div>
            </div>
          </div>
          {/* about image */}
          <div className="w-5/6 h-full md:w-1/2 py-6 pl-2">
            <div className="flex justify-end">
              <img
                src={require("../../../assets/img/Carp-fishing.jpg")}
                className="w-5/6 rounded-2xl"
                alt="aboutimg"
              />
            </div>
          </div>
          {/* end of about image */}
        </div>
      </div>
    </>
  );
};

export default IntroAbout;
