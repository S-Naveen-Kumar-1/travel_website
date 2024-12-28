import React from "react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative h-screen overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQD4_UDQcdSgY1XdUJSqfHKkI4WJsYSPaJdIkJuoXoL1gNOO6d0yMwTap3-yUnWX3QdUIo70rjUbVIqYqdqViJaHVgleZsaP62lAOcwUA')",
      }}
    >
      <section className="h-full flex flex-col justify-center items-center  text-center p-8 z-10">
        <div className="max-w-4xl w-full mb-12 text-center sm:mb-20 xs:mb-24">
          <h1 className="text-4xl font-bold mb-4 sm:text-3xl text-white">
            Explore the Beauty of Kashmir
          </h1>
          <p className="text-xl mb-8 sm:text-lg sm:mb-12 xs:text-base xs:mb-16 text-white">
            Discover breathtaking landscapes, serene lakes, and pristine
            meadows.
          </p>
        </div>

        {/* Search Input Box at the bottom */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 p-6 rounded-lg flex flex-wrap justify-center items-center gap-6 max-w-4xl w-11/12 sm:bottom-8 xs:bottom-1">
  <div className="flex flex-wrap gap-6 w-full justify-center sm:gap-4 xs:gap-4">
    {/* Destination Select */}
    <div className="w-full sm:w-[200px]">
      <select className="p-3 text-base border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="" disabled selected className="text-gray-500">
          Select Destination
        </option>
        <option value="Srinagar">Srinagar</option>
        <option value="Gulmarg">Gulmarg</option>
        <option value="Pahalgam">Pahalgam</option>
        <option value="Leh">Leh</option>
      </select>
    </div>

    {/* Check-in Date */}
    <div className="w-full sm:w-[200px]">
      <input
        type="date"
        className="p-3 text-base border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        title="Select a date"
      />
    </div>

    {/* Number of Persons */}
    <div className="w-full sm:w-[200px]">
      <input
        type="number"
        min="1"
        max="10"
        placeholder="Number of Persons"
        className="p-3 text-base border border-gray-300 rounded-md w-full placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Book Button */}
    <div className="w-full sm:w-auto">
      <button className="px-6 py-3 text-lg bg-blue-600 text-white rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue-500 w-full sm:w-[150px]">
        Book
      </button>
    </div>
  </div>
</div>

      </section>
    </div>
  );
};

export default Hero;
