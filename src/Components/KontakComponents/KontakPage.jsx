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

const KontakPage = () => {
  return (
    <div>
      <section>
        <nav className="fixed top-0 z-50 shadow w-full h-[60px] bg-white">
          <div className="flex items-center h-full justify-between mx-auto max-w-5xl">
            <div></div>
            <ul className="flex items-center space-x-4 ">
              <li>
                <a href="">Beranda</a>
              </li>
              <li>
                <a href="">Tentang</a>
              </li>
              <li>
                <a href="">Kontak</a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
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
              <span className="text-orange-500 underline">Kontak</span>
            </div>
          </div>
        </div>
      </secion>
      <section className="py-[60px]">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2">
            <div className="space-y-4 pr-20">
              <div className="space-y-2">
                <div className="text-xl font-semibold">
                  Get in Touch <span className="text-orange-500">.</span>
                </div>
                <div>
                  Hubungi Kami Kami selalu siap mendengar dari Anda! Jika Anda
                  memiliki pertanyaan, saran, atau ingin bekerja sama dengan
                  kami, jangan ragu untuk menghubungi kami melalui:
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-xl font-semibold">
                  Terhubung ke Kami Dengan
                  <span className="text-orange-500">.</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="space-y-2 flex flex-col">
                    <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6" />
                    <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
                    <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <div className="col-span-5 ">+62 1234 5678</div>
                    <div className="col-span-5 ">dikosind bandung</div>
                    <div className="col-span-5 ">@dikosin</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <form>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Dari siapa pesan ini?"
                    className="w-full border-b-2 border-gray-300 focus:border-orange-500 focus:bg-gray-100 transition-all p-2 focus:outline-none"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="from"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Asal
                  </label>
                  <input
                    type="text"
                    id="from"
                    name="from"
                    placeholder="Berasal dari mana anda?"
                    className="w-full border-b-2 border-gray-300 focus:border-orange-500 focus:bg-gray-100 transition-all p-2 focus:outline-none"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="comment"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Komentar
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    rows="4"
                    placeholder="Masukkan tanggapan anda terhadap kami"
                    className="w-full border-b-2 border-gray-300 focus:border-orange-500 focus:bg-gray-100 transition-all p-2 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-2 px-4 rounded hover:bg-orange-500 transition-colors"
                >
                  Kirim ke Email
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black py-[60px]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-4 gap-x-4">
            <div className="space-y-6">
              <div className="text-white space-y-2">
                <div className="">
                  <span className="font-light text-orange-500 text-2xl">
                    Alamat Kami
                  </span>{" "}
                </div>
                <div className="flex items-center">
                  <div className="h-[1px] w-40 bg-orange-500"></div>
                  <div className="ml-1 h-px w-10   bg-white"></div>
                </div>
              </div>
              <div className="text-[#717171] text-xs">
                <ul className="space-y-8">
                  <li>
                    <div>
                      Jln.XXXXXX no.XX, Kec. XXXX, Kota. XXXX, Indonesia
                    </div>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6510739616974!2d101.47516309999999!3d0.5246153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5add4377f54d3%3A0x498709f023f47dbd!2sAdie%20motor%20maju!5e0!3m2!1sid!2sid!4v1731952059503!5m2!1sid!2sid"
                      width="225"
                      height="150"
                      className="border-none mt-4"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </li>
                  <li>
                    Email: user@example.com
                    <br />
                    Tel: +62 123 456 7890
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="text-white space-y-2">
                <div className="">
                  <span className="font-light text-orange-500 text-2xl">
                    Jelajahi
                  </span>{" "}
                </div>
                <div className="flex items-center">
                  <div className="h-[1px] w-32 bg-orange-500"></div>
                  <div className="ml-1 h-px w-10   bg-white"></div>
                </div>
              </div>
              <div className="text-[#717171] text-xs">
                <ul className="space-y-4 uppercase tracking-[4px]">
                  <li>
                    <a
                      className="flex items-center group hover:text-orange-500 transition-all duration-200 "
                      href="#"
                    >
                      <span className="scale-0 group-hover:scale-100 transition-all duration-200 bg-orange-500 h-[14px] group-hover:mr-2 w-px"></span>
                      Beranda
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center group hover:text-orange-500 transition-all duration-200 "
                      href="#"
                    >
                      <span className="scale-0 group-hover:scale-100 transition-all duration-200 bg-orange-500 h-[14px] group-hover:mr-2 w-px"></span>
                      Tentang
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center group hover:text-orange-500 transition-all duration-200 "
                      href="#"
                    >
                      <span className="scale-0 group-hover:scale-100 transition-all duration-200 bg-orange-500 h-[14px] group-hover:mr-2 w-px"></span>
                      Kamar
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center group hover:text-orange-500 transition-all duration-200 "
                      href="#"
                    >
                      <span className="scale-0 group-hover:scale-100 transition-all duration-200 bg-orange-500 h-[14px] group-hover:mr-2 w-px"></span>
                      Kontak
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="text-white space-y-2">
                <div className="">
                  <span className="font-light text-orange-500 text-2xl">
                    Jam Kerja
                  </span>{" "}
                </div>
                <div className="flex items-center">
                  <div className="h-[1px] w-40 bg-orange-500"></div>
                  <div className="ml-1 h-px w-10   bg-white"></div>
                </div>
              </div>
              <div className="text-[#717171]">
                <ul className="space-y-4">
                  <li>WEEKDAY : 07.00 - 09.00 WIB</li>
                  <li>WEEKEND : 08.00 - 23.00 WIB</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="text-white space-y-2">
                <div className="">
                  <span className="font-light text-orange-500 text-2xl">
                    Media Sosial
                  </span>{" "}
                </div>
                <div className="flex items-center">
                  <div className="h-[1px] w-40 bg-orange-500"></div>
                  <div className="ml-1 h-px w-10   bg-white"></div>
                </div>
              </div>
              <div className="text-[#717171] text-xs">
                <div className="flex items-center space-x-2">
                  <div>
                    <a
                      href=""
                      className="group h-[50px] overflow-clip  w-[50px] bg-[#292a29] flex items-center justify-center relative"
                    >
                      <FontAwesomeIcon
                        className="w-4 h-4 z-20 text-white"
                        icon={faFacebookF}
                      />
                      <div className="absolute top-0 z-10 left-0 translate-y-full transfrom transition group-hover:translate-y-0 h-full w-full bg-orange-500"></div>{" "}
                    </a>
                  </div>
                  <div>
                    <a
                      href=""
                      className="group h-[50px] overflow-clip  w-[50px] bg-[#292a29] flex items-center justify-center relative"
                    >
                      <FontAwesomeIcon
                        className="w-4 h-4 z-20 text-white"
                        icon={faInstagram}
                      />
                      <div className="absolute top-0 z-10 left-0 translate-y-full transfrom transition group-hover:translate-y-0 h-full w-full bg-orange-500"></div>{" "}
                    </a>
                  </div>
                  <div>
                    <a
                      href=""
                      className="group h-[50px] overflow-clip  w-[50px] bg-[#292a29] flex items-center justify-center relative"
                    >
                      <FontAwesomeIcon
                        className="w-4 h-4 z-20 text-white"
                        icon={faXTwitter}
                      />
                      <div className="absolute top-0 z-10 left-0 translate-y-full transfrom transition group-hover:translate-y-0 h-full w-full bg-orange-500"></div>{" "}
                    </a>
                  </div>
                  <div>
                    <a
                      href=""
                      className="group h-[50px] overflow-clip  w-[50px] bg-[#292a29] flex items-center justify-center relative"
                    >
                      <FontAwesomeIcon
                        className="w-4 h-4 z-20 text-white"
                        icon={faWhatsapp}
                      />
                      <div className="absolute top-0 z-10 left-0 translate-y-full transfrom transition group-hover:translate-y-0 h-full w-full bg-orange-500"></div>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KontakPage;
