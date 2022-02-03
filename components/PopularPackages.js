import Slider from "./Slider";

function PopularPackages() {
  return (
    <div className="mt-20 relative">
      <h4 className="subHeading text-center text-4xl text-green-900 md:text-7xl">
        Popular Packages
      </h4>
      <h2 className="text-center mt-2 font-bold text-md md:text-xl md:font-medium text-gray-600 ">
        Trending Destinations
      </h2>

      <div className="mt-10 h-40 relative">
        <Slider />
      </div>
    </div>
  );
}

export default PopularPackages;
