import Image from "next/image";

function Footer() {
  return (
    <footer className="p-5 mt-20 bg-gray-300 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-b border-black pb-4">
        <div className="font-poppins">
          <h4 className=" font-bold mb-6">Destinations</h4>
          <div className="text-sm flex flex-col space-y-3">
            <p>Africa</p>
            <p>Maldives</p>

            <p>Singapore</p>
            <p>Dubai </p>
            <p>United Kingdom</p>
          </div>
        </div>

        <div className="font-poppins mt-7 sm:mt-0">
          <h4 className=" font-bold mb-6">Others</h4>
          <div className="text-sm flex flex-col space-y-3">
            <p>Hotels</p>
            <p>Car Rentals</p>
            <p>Restaurants</p>
            <p>About Bonfire</p>
            <p>News & Blog</p>
            <p>Events</p>
          </div>
        </div>
        <div className="font-poppins mt-7 sm:mt-0">
          <h4 className=" font-bold mb-6">Subscribe</h4>
          <form>
            <div className="flex flex-col">
              <label for="name" className="mb-2">
                Your Name
              </label>
              <input
                className="border font-poppins font-medium border-gray-500 p-4 outline-none"
                type="text"
                required
              />
              <input
                placeholder="Your Email"
                className="border font-poppins font-medium border-gray-500 p-4 mt-2 outline-none"
                type="text"
                required
              />
            </div>
            <button className="mt-5 bg-yellow-500 w-[50%] p-2 md:p-5 font-medium">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-5 font-poppins font-medium flex justify-between items-center">
        <h4>Bonfire Adventures</h4>
        <div className="flex items-center space-x-2 sm:space-x-4 cursor-pointer "></div>
      </div>
    </footer>
  );
}

export default Footer;
