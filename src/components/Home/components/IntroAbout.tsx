const IntroAbout = () => {
  return (
    <>
      {/* about section with a side image */}
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-lg flex md:flex-row flex-wrap px-4 py-4 md:px-8 mx-auto ">
          {/* about intro */}
          <div className="w-full pr-4 md:w-1/2 ">
            <div className="text-center">
              {/* <h1 className="text-3xl  font-bold text-gray-800">
                 Welcome to{" MY Shop"}
                </h1> */}
              <p className="text-gray-600 text-left mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sed odio sit amet nibh vulputate cursus. Nullam accumsan, nulla
                sed dictum eleifend, nunc risus consectetur purus, at elementum
                risus nulla et nunc. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Animi placeat quibusdam numquam error fugit!
                Eum ea quibusdam delectus earum, itaque unde, sunt dolor totam,
                deleniti cum est laboriosam repellat similique!
              </p>
              <p className="text-gray-600 text-left mb-4">
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
          <div className="w-full md:w-1/2">
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1547663870-b9a0fe1b0aea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                className="w-full rounded-2xl"
                alt="aboutimg"
              />
            </div>
            {/* image group list */}
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-1/3">
                <div className="flex flex-row justify-center"></div>
              </div>
            </div>
          </div>
          {/* end of about image */}
        </div>
      </div>
    </>
  );
};

export default IntroAbout;
