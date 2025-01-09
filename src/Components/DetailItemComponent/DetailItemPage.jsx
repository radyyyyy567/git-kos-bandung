import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { banner, room1 } from "../../Layouts/img";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCheck,
  faHouse,
  faLocation,
  faLocationDot,
  faLocationPin,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faFacebookF,
  faInstagram,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import DetailSection from "./DetailSection";

const DetailItemPage = () => {
  return (
    <div>
      
      <secion>
        <div className="relative h-[50vh] mt-[60px] w-full">
          <img
            src={banner}
            alt=""
            className="object-cover w-full h-full object-center"
          />
          <div className=" absolute text-white bg-opacity-80 bg-black z-40 h-full w-full top-0 left-0 flex items-center justify-center">
            <div className="text-5xl">
              {" "}
              <span className="text-orange-500 underline">Kamar A</span>
            </div>
          </div>
        </div>
      </secion>
      <DetailSection />\
      
    </div>
  );
};

export default DetailItemPage;
