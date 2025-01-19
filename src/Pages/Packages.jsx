import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Package from "../../src/assets/package.png"
import BookingForm from "../components/PackageBookingForm";
const packages = [
  {
    id: 1,
    title: "Kashmir Deluxe Tour",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3BnXSLgtZ9NJx36APNvEsLnk97xllE_SBfQ&s",
    price: "₹25,000",
    features: ["3-Star Stay", "Breakfast Included", "Srinagar, Gulmarg, Pahalgam Tour"],
    description: "Experience the beauty of Srinagar, Gulmarg, and Pahalgam with a luxurious stay.",
    destination: "Kashmir",
    days: 7,
    people: 2,
  },
  {
    id: 2,
    title: "Srinagar & Gulmarg Adventure",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHhgPJcNZrb2N84WWcrszmeWtw39hHdhUAHw&s",
    price: "₹18,000",
    features: ["Skiing in Gulmarg", "Houseboat Stay", "Free WiFi"],
    description: "A thrilling adventure tour to explore the skiing slopes of Gulmarg and the houseboats of Srinagar.",
    destination: "Kashmir",
    days: 5,
    people: 4,
  },
  {
    id: 3,
    title: "Kashmir Winter Wonderland",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl1beDlUedmN0BhBZvKkxhm2CLv-VBywxGjg&s",
    price: "₹30,000",
    features: ["Snow Activities", "Luxury Stay", "Gulmarg Skiing"],
    description: "Enjoy the winter beauty of Kashmir with skiing and snow activities in Gulmarg.",
    destination: "Kashmir",
    days: 7,
    people: 2,
  },
 
  {
    id: 5,
    title: "Gulmarg Adventure Tour",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfnPKvXckmmGo0eJz-OaNIEyiEKFJo2TKGug&s",
    price: "₹22,000",
    features: ["Skiing", "Cable Car Ride", "Adventure Activities"],
    description: "Explore the adventure-filled Gulmarg with skiing and cable car rides.",
    destination: "Kashmir",
    days: 5,
    people: 3,
  },
  {
    id: 6,
    title: "Srinagar Houseboat Experience",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMYg88OrSrxAhHz2Z7QbMSVGwa_yfDTXct3Q&s",
    price: "₹15,000",
    features: ["Houseboat Stay", "Srinagar City Tour", "Free WiFi"],
    description: "Stay in a beautiful houseboat on Dal Lake and explore the beauty of Srinagar.",
    destination: "Kashmir",
    days: 4,
    people: 2,
  },
  {
    id: 7,
    title: "Pahalgam & Gulmarg Tour",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnE6oy4pez5IObn6E0HLIXawU41XHLkskGaQ&s",
    price: "₹28,000",
    features: ["Pahalgam Stay", "Gulmarg Skiing", "Local Tour Guide"],
    description: "Explore Pahalgam and Gulmarg with a guided tour and skiing activities.",
    destination: "Kashmir",
    days: 8,
    people: 2,
  },
  {
    id: 8,
    title: "Srinagar & Pahalgam Exploration",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTviJayGPkZwE3AImTcIzijbKQAjxNEnnwZxg&s",
    price: "₹20,000",
    features: ["Srinagar Tour", "Pahalgam Stay", "Free Breakfast"],
    description: "Explore Srinagar and Pahalgam with a comfortable stay and guided tours.",
    destination: "Kashmir",
    days: 6,
    people: 3,
  },
  {
    id: 9,
    title: "Gulmarg Skiing Adventure",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSil1CdOpCaRoQ95Nz1Ll27t1BDU2aNMycww&s",
    price: "₹35,000",
    features: ["Skiing in Gulmarg", "Luxury Stay", "Adventure Activities"],
    description: "A skiing adventure in Gulmarg with luxury accommodations.",
    destination: "Kashmir",
    days: 7,
    people: 2,
  },
  {
    id: 10,
    title: "Kashmir Culture & Heritage Tour",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREpEJOdkjUIJh0FjPhFuLVi733d3IWpzdDpw&s",
    price: "₹23,000",
    features: ["Cultural Tour", "Heritage Sites", "Srinagar City Tour"],
    description: "Explore the cultural heritage of Kashmir with visits to historical sites.",
    destination: "Kashmir",
    days: 5,
    people: 4,
  },
  {
    id: 11,
    title: "Kashmir Adventure & Culture",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToohgpcoPlVCXRGxuftmSJ1xviY5agstVw8g&s",
    price: "₹33,000",
    features: ["Adventure Activities", "Cultural Exploration", "Srinagar & Gulmarg Tour"],
    description: "A combination of adventure and culture with activities in Gulmarg and Srinagar.",
    destination: "Kashmir",
    days: 8,
    people: 3,
  },
  {
    id: 12,
    title: "Kashmir Family Getaway",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-N8C-g0P3TBdr9-4mR6tXyz-odZdf2GrFEg&s",
    price: "₹40,000",
    features: ["Family-Friendly", "Guided Tours", "Srinagar & Gulmarg"],
    description: "A family-friendly getaway with guided tours in Srinagar and Gulmarg.",
    destination: "Kashmir",
    days: 7,
    people: 4,
  },
];

const Packages = () => {
  const [destination, setDestination] = useState("");
  const [numDays, setNumDays] = useState(0);
  const [numPeople, setNumPeople] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null); 

  // Filter packages based on dynamic criteria
  const filteredPackages = packages.filter((pkg) => {
    const price = parseInt(pkg.price.replace("₹", "").replace(",", ""));
    const pricePerPerson = price / pkg.people;
    return (
      (destination === "" || pkg.destination.toLowerCase().includes(destination.toLowerCase())) &&
      (numDays === 0 || pkg.days === numDays) &&
      (numPeople === 1 || pkg.people >= numPeople) &&
      pricePerPerson >= priceRange[0] && pricePerPerson <= priceRange[1]
    );
  });

  const handleDestinationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDestination(e.target.value);
  };

  const handleNumDaysChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNumDays(Number(e.target.value));
  };

  const handleNumPeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumPeople(Number(e.target.value));
  };



  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleBookPackage=(pkg)=>{
    setSelectedPackage(pkg)
    setIsFormOpen(true);
  }
  const handleCloseForm = () => {
    setIsFormOpen(false);
  };
  return (
    <div>
      {/* Banner Section with Form on Top */}
      <div
        className="relative bg-cover bg-center min-h-[600px]"
        style={{
            backgroundImage: `url(${Package})`,

          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Filters Form on Top of Banner */}
        <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 bg-white max-w-3xl w-full rounded-lg p-4 shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Book Your Kashmir Package
          </h2>

          {/* Filter Controls */}
          <div className="flex flex-wrap gap-4 justify-between">
            {/* Number of Days Filter */}
            <div className="flex-1">
              <label htmlFor="num-days" className="block text-lg text-gray-600">
                Number of Days
              </label>
              <select
                id="num-days"
                value={numDays}
                onChange={handleNumDaysChange}
                className="w-full p-2 border border-gray-300 rounded-lg mt-2"
              >
                <option value={0}>Any</option>
                <option value={5}>5 Days</option>
                <option value={7}>7 Days</option>
                <option value={10}>10 Days</option>
              </select>
            </div>

            {/* Number of People Filter */}
            <div className="flex-1">
              <label htmlFor="num-people" className="block text-lg text-gray-600">
                Number of People
              </label>
              <input
                type="number"
                id="num-people"
                value={numPeople}
                onChange={handleNumPeopleChange}
                min="1"
                className="w-full p-2 border border-gray-300 rounded-lg mt-2"
              />
            </div>

         
          </div>

          <div className="mt-6 text-center">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
              Search Packages
            </button>
          </div>
        </div>
      </div>

      {/* Package Listing Section */}
      <div className="bg-gray-50 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Explore Our Kashmir Packages
        </h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.length > 0 ? (
              filteredPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full"
                  data-aos="fade-up"
                >
                  <img
                    src={pkg.imageUrl}
                    alt={pkg.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-semibold text-gray-800">{pkg.title}</h3>
                    <p className="text-gray-600 mt-2">{pkg.description}</p>
                    <ul className="mt-4 text-sm text-gray-600">
                      {pkg.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    <div className="mt-auto flex justify-between items-center">
                      <span className="text-xl font-semibold text-gray-800">
                        {pkg.price}
                      </span>
                      <button onClick={()=>handleBookPackage(pkg)} className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-lg text-gray-600">
                No packages found based on your filter criteria.
              </div>
            )}
          </div>
        </div>
      </div>
      <BookingForm
        isOpen={isFormOpen}
        onClose={handleCloseForm}
        selectedPackage={selectedPackage}
     
      />
    </div>
  );
};

export default Packages;
