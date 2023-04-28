const OthersCompany = () => {
  return (
    <div className="w-screen  bg-[#3a6ea5]">
      <section className="px-4 pt-12 pb-16 mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-10 mx-auto text-center sm:grid-cols-3 ">
          <div className="flex items-center justify-center">
            <img
              src={
                new URL("../../../assets/img/company_1.png", import.meta.url)
                  .href
              }
              className="object-contain h-28 "
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={
                new URL("../../../assets/img/logo_white.png", import.meta.url)
                  .href
              }
              className="object-contain h-28 "
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={
                new URL("../../../assets/img/logo.png", import.meta.url).href
              }
              className="object-contain h-28"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default OthersCompany;
