import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MaterialIcon from 'react-google-material-icons'
// Import Swiper styles
import "swiper/css";
import { room1 } from "../../Layouts/img";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCheck,
  faEye,
  faHouse,
  faLocation,
  faLocationDot,
  faLocationPin,
  faPhone,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { photo1, photo2, photo3, photo4 } from "../../img";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <section>
        <Swiper
          autoplay={true}
          onDurationChange={2000}
          loop={true}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="h-[100vh] w-full relative">
              <div className="bg-black bg-opacity-40 text-white absolute h-full z-40 w-full flex items-center">
                <div className="max-w-5xl w-full mx-auto">
                  <div className="w-1/2 space-y-4">
                    <div className="text-5xl font-bold ">
                      Bingung? Kos yang Lengkap dan Nyaman?
                    </div>
                    <div className="">
                      Didiskosin aja{" "}
                      <span className="text-orange-500">klik</span> lihat
                      untukmelihat kos yang tersedia!
                    </div>
                    <button className="group relative ring-off hover:ring-1 transition duration-200 hover:bg-orange-500 bg-[#0C0C0C] py-2 px-4 text-font-semibold">
                      <div className="transition-all duration-200 top-0  left-0 absolute w-full h-full border-white group-hover:border group-hover:scale-95"></div>{" "}
                      Klik!{" "}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="group-hover:translate-x-1 transform transition w-4 h-4 duration-200"
                      />
                    </button>{" "}
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="w-full h-full">
                <img
                  src={room1}
                  className="w-full h-full object-cover object-top"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[100vh] w-full relative">
              <div className="bg-black bg-opacity-40 text-white absolute h-full z-40 w-full flex items-center">
                <div className="max-w-5xl w-full mx-auto">
                  <div className="w-1/2 space-y-4">
                    <div className="text-5xl font-bold ">
                      Bingung? Kos yang Lengkap dan Nyaman?
                    </div>
                    <div className="">
                      Didiskosin aja{" "}
                      <span className="text-orange-500">klik</span> lihat
                      untukmelihat kos yang tersedia!
                    </div>
                    <button className="group relative ring-off hover:ring-1 transition duration-200 hover:bg-orange-500 bg-[#0C0C0C] py-2 px-4 text-font-semibold">
                      <div className="transition-all duration-200 top-0  left-0 absolute w-full h-full border-white group-hover:border group-hover:scale-95"></div>{" "}
                      Klik!{" "}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="group-hover:translate-x-1 transform transition w-4 h-4 duration-200"
                      />
                    </button>{" "}
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="w-full h-full">
                <img
                  src={room1}
                  className="w-full h-full object-cover object-top"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[100vh] w-full relative">
              <div className="bg-black bg-opacity-40 text-white absolute h-full z-40 w-full flex items-center">
                <div className="max-w-5xl w-full mx-auto">
                  <div className="w-1/2 space-y-4">
                    <div className="text-5xl font-bold ">
                      Bingung? Kos yang Lengkap dan Nyaman?
                    </div>
                    <div className="">
                      Didiskosin aja{" "}
                      <span className="text-orange-500">klik</span> lihat
                      untukmelihat kos yang tersedia!
                    </div>
                    <button className="group relative ring-off hover:ring-1 transition duration-200 hover:bg-orange-500 bg-[#0C0C0C] py-2 px-4 text-font-semibold">
                      <div className="transition-all duration-200 top-0  left-0 absolute w-full h-full border-white group-hover:border group-hover:scale-95"></div>{" "}
                      Klik!{" "}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="group-hover:translate-x-1 transform transition w-4 h-4 duration-200"
                      />
                    </button>{" "}
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="w-full h-full">
                <img
                  src={room1}
                  className="w-full h-full object-cover object-top"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[100vh] w-full relative">
              <div className="bg-black bg-opacity-40 text-white absolute h-full z-40 w-full flex items-center">
                <div className="max-w-5xl w-full mx-auto">
                  <div className="w-1/2 space-y-4">
                    <div className="text-5xl font-bold ">
                      Bingung? Kos yang Lengkap dan Nyaman?
                    </div>
                    <div className="">
                      Didiskosin aja{" "}
                      <span className="text-orange-500">klik</span> lihat
                      untukmelihat kos yang tersedia!
                    </div>
                    <button className="group relative ring-off hover:ring-1 transition duration-200 hover:bg-orange-500 bg-[#0C0C0C] py-2 px-4 text-font-semibold">
                      <div className="transition-all duration-200 top-0  left-0 absolute w-full h-full border-white group-hover:border group-hover:scale-95"></div>{" "}
                      Klik!{" "}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="group-hover:translate-x-1 transform transition w-4 h-4 duration-200"
                      />
                    </button>{" "}
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="w-full h-full">
                <img
                  src={room1}
                  className="w-full h-full object-cover object-top"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="py-[60px] bg-gray-900">
        <div className="mx-auto max-w-5xl">
          <div className="flex justify-center mb-[30px] flex-col items-center space-y-2">
            <div className="text-4xl text-orange-500">Cara Kerja</div>
            <div className="h-[1px] w-[40px] bg-orange-500"></div>
          </div>
          <div className="grid grid-cols-5 gap-x-4">
            <div className="bg-orange-500 text-white hover:bg-white hover:text-orange-500 transform transition duration-300 hover:-translate-y-4 p-4">
              <div className="flex flex-col items-center text-center">
                <MaterialIcon icon="visibility" size={120}/>
                <div className="text-2xl font-bold">View Room</div>
                <div className="text-xs">Calon penyewa melihat kamar yang tersedia</div>
              </div>
            </div>
            <div className="bg-orange-500 text-white hover:bg-white hover:text-orange-500 transform transition duration-300 hover:-translate-y-4 p-4">
              <div className="flex flex-col items-center text-center">
                <MaterialIcon icon="call" size={120} />
                <div className="text-2xl font-bold">Call us</div>
                <div className="text-xs">Calon penyewa melakukan panggilan dengan kami.</div>
              </div>
            </div>
            <div className="bg-orange-500 text-white hover:bg-white hover:text-orange-500 transform transition duration-300 hover:-translate-y-4 p-4">
              <div className="flex flex-col items-center text-center">
                <MaterialIcon icon="handshake" size={120} />
                <div className="text-2xl font-bold">Deal</div>
                <div className="text-xs">Calon penyewa melakukan deal dengan kami</div>
              </div>
            </div>
            <div className="bg-orange-500 text-white hover:bg-white hover:text-orange-500 transform transition duration-300 hover:-translate-y-4 p-4">
              <div className="flex flex-col items-center text-center">
                <MaterialIcon icon="payments" size={120} />
                <div className="text-2xl font-bold">Purchase</div>
                <div className="text-xs">Calon penyewa melakukan pembayaran </div>
              </div>
            </div>
            <div className="bg-orange-500 text-white hover:bg-white hover:text-orange-500 transform transition duration-300 hover:-translate-y-4 p-4">
              <div className="flex flex-col items-center text-center">
                <MaterialIcon icon="meeting_room" size={120} />
                <div className="text-2xl font-bold">Check-In</div>
                <div className="text-xs">Calon penyewa menggunakan kos-nya</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-5xl mx-auto my-[60px]">
          <div className="flex justify-center mb-[30px] flex-col items-center space-y-2">
            <div className="text-4xl">Jenis Kamar</div>
            <div className="h-[1px] w-[40px] bg-black"></div>
          </div>
          <div className=" grid grid-cols-4 gap-x-4">
            <button className="shadow-lg group">
              <div className="relative h-[200px]">
                <img src={room1} alt="" className="h-full" />
                <div className="absolute bg-black bg-opacity-50 opacity-0 top-0 left-0 group-hover:opacity-100 duration-300 transition-all w-full h-full flex items-center justify-center">
                  <Link className="absolute top-0 left-0 h-full w-full z-40" to="/detail"></Link>
                  <div className="text-white">Pesan</div>
                </div>
                <div className="absolute top-0 left-0 border transition duration-400 border-white group-hover:scale-95 h-full w-full"></div>
              </div>

              <div className="bg-white p-4 text-left ">
                <div className=" text-lg">Kamar Class A</div>
                <div className="flex flex-col justify-between h-[120px]">
                  <div className="grid grid-cols-8 place-items-start items-center [&>*:nth-child(even)]:col-span-7 [&>*:nth-child(odd)]:col-span-1 [&>*:nth-child(odd)]:flex [&>*:nth-child(odd)]:justify-center">
                    <div>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="h-4 w-4 text-orange-500"
                      />
                    </div>
                    <div>Tempat tidur</div>
                    <div>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="h-4 w-4 text-orange-500"
                      />
                    </div>
                    <div>Wifi</div>
                  </div>
                  <div className="flex items-center">
                    <div>Tersedia :</div>
                    <div>1</div>
                  </div>
                </div>
              </div>
            </button>
            <button className="shadow-lg group">
              <div className="relative h-[200px]">
                <img src={room1} alt="" className="h-full" />
                <div className="absolute bg-black bg-opacity-50 opacity-0 top-0 left-0 group-hover:opacity-100 duration-300 transition-all w-full h-full flex items-center justify-center">
                <Link className="absolute top-0 left-0 h-full w-full" href="/detail"></Link>
                  <div className="text-white">Pesan</div>
                </div>
                <div className="absolute top-0 left-0 border transition duration-400 border-white group-hover:scale-95 h-full w-full"></div>
              </div>

              <div className="bg-white p-4 text-left ">
                <div className=" text-lg">Kamar Class B</div>
                <div className="flex flex-col justify-between h-[120px]">
                  <div className="grid grid-cols-8 place-items-start items-center [&>*:nth-child(even)]:col-span-7 [&>*:nth-child(odd)]:col-span-1 [&>*:nth-child(odd)]:flex [&>*:nth-child(odd)]:justify-center">
                    <div>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="h-4 w-4 text-orange-500"
                      />
                    </div>
                    <div>Tempat tidur</div>
                    <div>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="h-4 w-4 text-orange-500"
                      />
                    </div>
                    <div>Wifi</div>
                  </div>
                  <div className="flex items-center">
                    <div>Tersedia :</div>
                    <div>1</div>
                  </div>
                </div>
              </div>
            </button>
            <button className="shadow-lg group">
              <div className="relative h-[200px]">
                <img src={room1} alt="" className="h-full" />
                <div className="absolute bg-black bg-opacity-50 opacity-0 top-0 left-0 group-hover:opacity-100 duration-300 transition-all w-full h-full flex items-center justify-center">
                <Link className="absolute top-0 left-0 h-full w-full" href="/detail"></Link>
                  <div className="text-white">Pesan</div>
                </div>
                <div className="absolute top-0 left-0 border transition duration-400 border-white group-hover:scale-95 h-full w-full"></div>
              </div>

              <div className="bg-white p-4 text-left ">
                <div className=" text-lg">Kamar Class C</div>
                <div className="flex flex-col justify-between h-[120px]">
                  <div className="grid grid-cols-8 place-items-start items-center [&>*:nth-child(even)]:col-span-7 [&>*:nth-child(odd)]:col-span-1 [&>*:nth-child(odd)]:flex [&>*:nth-child(odd)]:justify-center">
                    <div>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="h-4 w-4 text-orange-500"
                      />
                    </div>
                    <div>Tempat tidur</div>
                    <div>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="h-4 w-4 text-orange-500"
                      />
                    </div>
                    <div>Wifi</div>
                  </div>
                  <div className="flex items-center">
                    <div>Tersedia :</div>
                    <div>1</div>
                  </div>
                </div>
              </div>
            </button>
            <button className="shadow-lg group">
              <div className="relative h-[200px]">
                <img src={room1} alt="" className="h-full" />
                <div className="absolute bg-black bg-opacity-50 opacity-0 top-0 left-0 group-hover:opacity-100 duration-300 transition-all w-full h-full flex items-center justify-center">
                  <Link className="absolute top-0 left-0 h-full w-full" href="/detail"></Link>
                  <div className="text-white">Pesan</div>
                </div>
                <div className="absolute top-0 left-0 border transition duration-400 border-white group-hover:scale-95 h-full w-full"></div>
              </div>

              <div className="bg-white p-4 text-left ">
                <div className=" text-lg">Kamar Class D</div>
                <div className="flex flex-col justify-between h-[120px]">
                  <div className="grid grid-cols-8 place-items-start items-center [&>*:nth-child(even)]:col-span-7 [&>*:nth-child(odd)]:col-span-1 [&>*:nth-child(odd)]:flex [&>*:nth-child(odd)]:justify-center">
                    <div>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="h-4 w-4 text-orange-500"
                      />
                    </div>
                    <div>Tempat tidur</div>
                    <div>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="h-4 w-4 text-orange-500"
                      />
                    </div>
                    <div>Wifi</div>
                  </div>
                  <div className="flex items-center">
                    <div>Tersedia :</div>
                    <div>1</div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>
      <section className="py-[60px] bg-gray-100">
        <div className="space-y-4 mx-auto max-w-5xl">
          <div className="text-center"></div>
          <div className="flex items-center">
            <div className="bg-orange-500 p-4 text-white w-1/3 -mr-4 space-y-4 z-40">
              <div className="font-semibold text-2xl underline">
                Rekomendasi Kami
              </div>
              <div className="">
                Fasilitas cocok tapi harga kemahalan? Harga cocok tapi fasilitas
                kurang? Disini kami memberi solusi kamar kos nya!
              </div>
              <div className="grid grid-cols-8 place-items-start items-center [&>*:nth-child(even)]:col-span-7 [&>*:nth-child(odd)]:col-span-1 [&>*:nth-child(odd)]:flex [&>*:nth-child(odd)]:justify-center">
                <div>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="h-4 w-4 text-white"
                  />
                </div>
                <div>Tempat tidur</div>
                <div>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="h-4 w-4 text-white"
                  />
                </div>
                <div>Wifi</div>
              </div>
              <button className="group relative ring-off hover:ring-1 text-[#0C0C0C] hover:text-white transition duration-200 hover:bg-[#0C0C0C] bg-white py-2 px-4 text-font-semibold">
                <div className="transition-all duration-200 top-0  left-0 absolute w-full h-full border-white group-hover:border group-hover:scale-95 "></div>
                <div className="space-x-2 flex items-center">
                  <div>Lihat</div>
                  <div>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="group-hover:translate-x-1 transform transition w-4 h-4 duration-200"
                    />
                  </div>
                </div>
              </button>
            </div>
            <div className="grid grid-cols-4 grid-rows-3 w-2/3 bg-red-500 h-[400px]">
              <div className="col-span-2 row-span-3">
                <img
                  src={photo1}
                  alt=""
                  className="border-2 border-white w-full h-full object-cover"
                />
              </div>
              <div className="col-span-1 row-span-1">
                <img
                  src={photo2}
                  alt=""
                  className="border-2 border-white w-full h-full object-cover"
                />
              </div>
              <div className="col-span-1 row-span-1">
                <img
                  src={photo3}
                  alt=""
                  className="border-2 border-white w-full h-full object-cover"
                />
              </div>
              <div className="col-span-2 row-span-2">
                <img
                  src={photo4}
                  alt=""
                  className="border-2 border-white w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section></section>
      
    </div>
  );
};

export default HomePage;
