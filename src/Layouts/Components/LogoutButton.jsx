import { faPersonWalkingArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Popup from "../../Components/Popup/Popup";

const LogoutButton = () => {
  const [popup, setPopup] = useState(false);
  const handlePopup = () => {
    setPopup(!popup)
  };
  return (
    <>
      <button onClick={() => handlePopup()} className="bg-red-500 text-white font-bold rounded-lg p-2 w-full space-x-2">
        <FontAwesomeIcon icon={faPersonWalkingArrowRight} />
        <span>Logout</span>
      </button>
      {popup && <Popup status={"danger"} title={"Keluar"} question={"Apakah kamu yakin ingin keluar?"} handlePopup={handlePopup}/>}
    </>
  );
};

export default LogoutButton;
