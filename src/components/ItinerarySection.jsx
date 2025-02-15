import { useState } from "react";
import { FaPlusCircle, FaMinusCircle, FaMapMarkerAlt } from "react-icons/fa";

const ItinerarySection = ({ itinerary }) => {
  const [openDays, setOpenDays] = useState([]);

  const toggleDay = (index) => {
    setOpenDays(openDays.includes(index)
      ? openDays.filter((day) => day !== index)
      : [...openDays, index]
    );
  };

  return (
    <div className="mb-12">
      <h3 className="text-3xl font-semibold text-purple-700 mb-6 text-center">
        Itinerary
      </h3>
      <div className="relative w-full  mx-auto">
        {/* Thin Vertical Line Passing Exactly Through Icons */}
        <div className="absolute left-6 top-0 w-[2px] bg-purple-400 h-full"></div>

        <ul className="space-y-6">
          {itinerary.map((item, index) => (
            <li key={index} className="relative flex items-start space-x-2">
              {/* Circular Icon with Line Passing Through Center */}
              <div className="relative flex flex-col items-center">
                <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full shadow-lg border-2 border-purple-500 z-10">
                  {item.icon || <FaMapMarkerAlt className="text-purple-700 text-2xl" />}
                </div>
              </div>

              {/* Itinerary Details */}
              <div className="w-full bg-gray-100 p-4 rounded-lg shadow-md transition-all duration-300">
                <div className="flex justify-between items-center">
                  <h4 className="text-xl font-semibold text-purple-800">
                    {item.title}
                  </h4>
                  <button
                    onClick={() => toggleDay(index)}
                    className="text-purple-700 focus:outline-none"
                  >
                    {openDays.includes(index) ? (
                      <FaMinusCircle size={20} />
                    ) : (
                      <FaPlusCircle size={20} />
                    )}
                  </button>
                </div>

                {/* Expandable Description */}
                {openDays.includes(index) && (
                  <p className="text-gray-700 mt-2">{item.description}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ItinerarySection;
