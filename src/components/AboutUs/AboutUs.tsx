import Layout from "../Common/Layout";
import Teams from "./components/Teams";
const AboutUs = () => {
  return (
    <Layout title="About Us">
      <div className="flex flex-col items-center justify-center">
        {/* about us slider */}
        <div>
          <img
            src={require("../../assets/img/fish-2.jpg")}
            className="w-screen h-72"
            alt="aboutimg"
          />
        </div>
        {/* end of about us slider */}

        {/* about us */}
        <div className="flex flex-wrap max-w-screen-xl p-6 mx-auto md:flex-row md:px-8">
          {/* about intro */}
          <div className="w-full pr-4 md:w-1/2 ">
            <div className="text-left">
              <h4 className="font-bold font-skModernist text-2xl leading-8 py-4 px-1 text-[#b8cc08]">
                About us
              </h4>

              <h1 className="pb-5 text-4xl font-bold text-gray-800 font-skModernistBold">
                Golden Bough Aquaculture Ltd.
              </h1>

              <p className="mb-4 text-lg leading-8 text-left text-gray-600 font-skModernist">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sed odio sit amet nibh vulputate cursus. Nullam accumsan, nulla
                sed dictum eleifend, nunc risus consectetur purus, at elementum
                risus nulla et nunc. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Animi placeat quibusdam numquam error fugit!
                Eum ea quibusdam delectus earum, itaque unde, sunt dolor totam,
                deleniti cum est laboriosam repellat similique!
              </p>
              <p className="mb-4 text-lg leading-8 text-left text-gray-600 font-skModernist">
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
          <div className="w-5/6 h-full py-6 pl-2 md:w-1/2">
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
        {/* heading */}
        <div className="container flex flex-col items-center justify-center w-full max-w-screen-xl pt-4 pb-2 mx-auto">
          <h2 className="text-5xl font-bold text-[#b8cc08] font-skModernistBold ">
            History
          </h2>
          <div className="flex items-center justify-center pt-4 ">
            <img src={require("../../assets/img/divider.png")} alt="divider" />
          </div>
        </div>
        {/* end of heading */}

        {/* history content */}
        <div className="flex flex-col items-center w-full max-w-screen-xl p-6 justify-items-center md:flex-row md:items-start md:justify-center md:mx-auto">
          {/* history image */}
          <div className="w-5/6 h-full py-6 mx-auto md:w-1/2 ">
            <div className="flex justify-start">
              <img
                src={require("../../assets/img/Carp-fishing.jpg")}
                className="w-5/6 rounded-2xl"
                alt="aboutimg"
              />
            </div>
          </div>
          {/* end of history image */}
          {/* history bok bok */}
          <div className="w-full pl-2 pr-4 md:w-1/2">
            <div className="text-left">
              <h1 className="pb-5 text-4xl font-bold text-gray-800 font-skModernistBold">
                Golden Bough Aquaculture Ltd.
              </h1>

              <p className="mb-4 text-lg leading-8 text-left text-gray-600 font-skModernist">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sed odio sit amet nibh vulputate cursus. Nullam accumsan, nulla
                sed dictum eleifend, nunc risus consectetur purus, at elementum
                risus nulla et nunc. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Animi placeat quibusdam numquam error fugit!
                Eum ea quibusdam delectus earum, itaque unde, sunt dolor totam,
                deleniti cum est laboriosam repellat similique!
              </p>
              <p className="mb-4 text-lg leading-8 text-left text-gray-600 font-skModernist">
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
          {/* end of history bok bok */}
        </div>
        {/* team */}
        <Teams />
      </div>
    </Layout>
  );
};

export default AboutUs;
