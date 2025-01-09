import React, { useState } from "react";
import { photo1, photo2, photo3, photo4 } from "../../img";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const DetailSection = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(photo1);

  return (
    <div>
      <section className="py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2  gap-8">
            {/* Left Section: Image Grid */}
            <div className="grid grid-cols-4 gap-2 h-[380px]">
              <div className="flex flex-col justify-between h-full">
                {[photo1, photo2, photo3, photo4].map((photo, index) => (
                  <button
                    key={index}
                    className="group relative"
                    onClick={() => setSelectedPhoto(photo)}
                  >
                    <img
                      src={photo}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-[80px] object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity"></div>
                  </button>
                ))}
              </div>
              <div className="col-span-3">
                <img
                  src={selectedPhoto}
                  alt="Selected Product"
                  className="w-full h-[380px] object-cover  shadow-lg"
                />
              </div>
            </div>

            {/* Right Section: Product Details */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-gray-900">
                Detail Produk
              </h1>
              <p className="text-gray-600">
                Fasilitas
              </p>
              <ul className="[&_li]:flex [&_li]:items-center [&_li]:space-x-2">
                <li>
                    <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-orange-500"/>
                    <div>AC</div>
                </li>
                <li>
                    <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-orange-500"/>
                    <div>Kamar Mandi</div>
                </li>
                <li>
                    <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-orange-500"/>
                    <div>TV Kabel</div>
                </li>
                <li>
                    <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-orange-500"/>
                    <div>Wifi</div>
                </li>
              </ul>
              <button className="relative bg-orange-500 hover:bg-black transition duration-300 w-full py-2 group">
                
            
                <div className="absolute top-0 left-0 border transition duration-300 border-white group-hover:scale-x-[0.98] group-hover:scale-y-[0.80] h-full w-full"></div>
                <div className="text-white">Pesan</div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailSection;
