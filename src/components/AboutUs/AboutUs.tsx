import Layout from "../Common/Layout";
const AboutUs = () => {
  return (
    <Layout title="About Us">
      <div>
        <div>
          <img
            src={require("../../assets/img/fish-2.jpg")}
            className="w-full h-72"
            alt="aboutimg"
          />
        </div>
        {/* about us */}
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
              <p className="text-gray-600 text-left mb-4 font-skModernist text-lg leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sed odio sit amet nibh vulputate cursus. Nullam accumsan, nulla
                sed dictum eleifend, nunc risus consectetur purus, at elementum
                risus nulla et nunc. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Animi placeat quibusdam numquam error fugit!
                Eum ea quibusdam delectus earum, itaque unde, sunt dolor totam,
                deleniti cum est laboriosam repellat similique!
              </p>
            </div>
          </div>
          {/* about image */}
          <div className="w-5/6 h-full md:w-1/2 py-6 pl-2">
            <div className="flex justify-end">
              <img
                src={require("../../assets/img/Carp-fishing.jpg")}
                className="w-5/6 rounded-2xl"
                alt="aboutimg"
              />
            </div>
          </div>
          {/* end of about image */}
        </div>
        {/* history */}

        <div className="container mx-auto w-full flex flex-col items-center justify-center pt-4 pb-2 max-w-screen-xl">
          <h2 className="text-5xl font-bold text-[#b8cc08] font-skModernistBold ">
            History
          </h2>
          <div className=" flex items-center justify-center pt-4">
            <img
              src={require("../../assets/img/divider.png")}
              alt="divider"
            />
          </div>
        </div>

        <div className="max-w-screen-lg flex md:flex-row flex-wrap px-4 py-4 md:px-8 mx-auto max-w-screen-xl">
          {/* about image */}
          <div className="w-5/6 h-full md:w-1/2 py-6 ">
            <div className="flex justify-start">
              <img
                src={require("../../assets/img/Carp-fishing.jpg")}
                className="w-5/6 rounded-2xl"
                alt="aboutimg"
              />
            </div>
          </div>
          {/* about intro */}
          <div className="w-full pr-4 md:w-1/2 pl-2">
            <div className="text-left">
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
              <p className="text-gray-600 text-left mb-4 font-skModernist text-lg leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sed odio sit amet nibh vulputate cursus. Nullam accumsan, nulla
                sed dictum eleifend, nunc risus consectetur purus, at elementum
                risus nulla et nunc. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Animi placeat quibusdam numquam error fugit!
                Eum ea quibusdam delectus earum, itaque unde, sunt dolor totam,
                deleniti cum est laboriosam repellat similique!
              </p>
            </div>
          </div>

          {/* end of about image */}
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
