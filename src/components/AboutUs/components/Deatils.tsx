const AboutDetails = () => {
  return (
    <div className="flex flex-wrap max-w-screen-xl p-6 m-4 md:flex-row md:px-8">
      <div className="w-full pr-4 md:w-1/2 ">
        <div className="text-left">
          <p className="mb-4 text-lg leading-8 text-left text-gray-600 font-skModernist">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed
            odio sit amet nibh vulputate cursus. Nullam accumsan, nulla sed
            dictum eleifend, nunc risus consectetur purus, at elementum risus
            nulla et nunc. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Animi placeat quibusdam numquam error fugit! Eum ea quibusdam
            delectus earum, itaque unde, sunt dolor totam, deleniti cum est
            laboriosam repellat similique!
          </p>
        </div>
      </div>
      {/* about image */}
      <div className="w-5/6 h-full py-6 pl-2 md:w-1/2">
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
  );
};

export default AboutDetails;
