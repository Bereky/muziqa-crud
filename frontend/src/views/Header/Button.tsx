import { useState } from "react";
import AddSongModal from "../Modals/AddSongModal";

const Button = () => {
  const [showModal, setShowModal] = useState(false);

  const onClickHandler = () => {
    console.log("working");
    setShowModal(false);
  };

  return (
    <div className="w-52 h-full bg-slate-00 flex justify-center items-center absolute right-0 p-5 mr-3">
      <button
        onClick={() => setShowModal(true)}
        className="w-48 h-full outline outline-sky-600 rounded-md"
      >
        Add Song
      </button>

      <AddSongModal message={showModal} onClickCB={onClickHandler} />
    </div>
  );
};

export default Button;
