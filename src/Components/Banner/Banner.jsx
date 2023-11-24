const Banner = () => {
  return (
    <div
      className="hero opacity-90 -mt-28 mb-8 min-w-full h-[100vh] relative"
      style={{
        backgroundImage:
          "url(https://extendedforms.io/blog/wp-content/uploads/2023/01/practices-creating-effective-forms-banner.png)",
      }}
    >
      {/* <div className="text-white mt-48 text-center">
        <h1 className="text-5xl font-bold text-black mb-6">
          Welcome To The
        </h1>
        <h1 className="text-5xl font-bold text-black">
          Survey Center!
        </h1>
      </div> */}
      <div className="absolute inset-0 flex-row -mt-14 lg:mt-96 flex items-center justify-center">
        <button
          className="rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 py-3.5 px-7 font-sans text-sm font-bold uppercase text-white shadow-md hover:shadow-lg focus:shadow-outline focus:outline-none transition duration-300"
          data-ripple-light="true"
        >
          Explore More
        </button>
       
      </div>
    </div>
  );
};

export default Banner;
