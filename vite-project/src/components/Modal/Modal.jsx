import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdClose,
} from "react-icons/md";

export const Modal = ({
  clickedImg,
  handelRotationRight,
  setClickedImg,
  handelRotationLeft,
}) => {
  const handelClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
    }
  };
  return (
    <>
      <div className="overlay dismiss" onClick={handelClick}>
        <img src={clickedImg} alt="bigger picture" />
        <span className="dismiss" onClick={handelClick}>
          <MdClose className="dismiss" />
        </span>
        <div onClick={handelRotationLeft} className="overlay-arrows_left">
          <div>
            <MdKeyboardArrowLeft />
          </div>
        </div>
        <div onClick={handelRotationRight} className="overlay-arrows_right">
          <div>
            <MdKeyboardArrowRight />
          </div>
        </div>
      </div>
    </>
  );
};
