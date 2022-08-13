const History = () => {
  return (
    <>
      <div className="container flex flex-col items-center justify-center w-full max-w-screen-xl pt-4 pb-2 mx-auto"></div>

      <div className="flex flex-col items-center w-full max-w-screen-xl p-6 justify-items-center md:flex-row md:items-start md:justify-center md:mx-auto">
        {/* history image */}
        <div className="w-5/6 h-full py-6 mx-auto md:w-1/2">
          <div className="flex justify-start">
            <img
              src={require("../../../assets/img/Carp-fishing.jpg")}
              className="w-5/6 rounded-2xl"
              alt="aboutimg"
            />
          </div>
        </div>
        <div className="w-full pl-2 pr-4 md:w-1/2">
          <div className="text-left">
            <p className="mb-4 text-lg leading-8 text-left text-gray-600 font-skModernist">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sed odio sit amet nibh vulputate cursus. Nullam accumsan, nulla
              sed dictum eleifend, nunc risus consectetur purus, at elementum
              risus nulla et nunc. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Animi placeat quibusdam numquam error fugit! Eum
              ea quibusdam delectus earum, itaque unde, sunt dolor totam,
              deleniti cum est laboriosam repellat similique!
            </p>
            <p className="mb-4 text-lg leading-8 text-left text-gray-600 font-skModernist">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sed odio sit amet nibh vulputate cursus. Nullam accumsan, nulla
              sed dictum eleifend, nunc risus consectetur purus, at elementum
            </p>
          </div>
        </div>
        {/* end of history bok bok */}
      </div>
    </>
  );
};

export default History;
