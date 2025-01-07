import {
  faCircleExclamation,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Popup = ({id, status, title, question, handlePopup, handleOk }) => {
  // Call handlePopup to close the popup
  console.log("ini id " + id);    

  return (
    <>
      <div className="fixed top-0 h-screen w-screen left-0 z-50">
        <div className="relative h-full w-full bg-black bg-opacity-40 flex items-center justify-center z-10">
            <div className="bg-white rounded-lg overflow-hidden z-30">
              <div
                className={`${
                  status === "danger" ? "bg-red-500" : status === "succes" ? "bg-green-500" : "bg-yellow-500"
                } border-b text-white font-semibold flex items-center p-4 `}
              >
                <div className="space-x-4 flex items-center ">
                  {status === "danger" && (
                    <FontAwesomeIcon
                      icon={faTriangleExclamation}
                      className="h-6 w-6"
                    />
                  )}
                  {status === "warning" && (
                    <FontAwesomeIcon icon={faCircleExclamation} />
                  )}
                  {status === "succes" && (
                    <FontAwesomeIcon icon={faCircleExclamation} />
                  )}
                  <div>{title}</div>
                </div>
              </div>
              <div className="p-4 text-center space-y-4">
                <div>{question}</div>
                <div className="flex justify-between">
                  <button
                    onClick={() => handlePopup()}
                    className="border rounded active:bg-red-500 active:text-white transition duration-300 p-2"
                  >
                    Tidak
                  </button>
                  {id ? <button onClick={() => handleOk(id)} className="border rounded active:bg-green-500 active:text-white transition duration-300 p-2">
                    Ya
                  </button> : <button onClick={() => handleOk()} className="border rounded active:bg-green-500 active:text-white transition duration-300 p-2">
                    Ya
                  </button>}
                  
                </div>
              </div>
            </div>
            <div onClick={() => handlePopup()} className="w-full h-full absolute z-20 "></div>
        </div>
      </div>
    </>
  );
};

export default Popup;
