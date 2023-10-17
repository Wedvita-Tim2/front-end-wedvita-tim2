import { useEffect, useState } from "react";
import Button from "../elements/Buttons";

const Modal = (props) => {
  const [showModal, setShowModal] = useState(props.show);
  useEffect(() => {
    setShowModal(props.show);
  }, [props.show]);

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  return (
    <div
      className={`${
        !showModal ? "hidden" : "fixed"
      } top-0 left-0 w-screen h-screen bg-transparent backdrop-brightness-50 z-[999999] flex items-center justify-center`}
    >
      <div className="relative bg-white rounded-3xl w-80 md:w-[670px] px-6 py-5">
        <div className="flex flex-col">
          <div className="flex border-b-slate-200 border-b-2 mb-2">
            <p className="text-primary text-md font-bold text-light-pink md:text-2xl">
              {props.title}
            </p>
            {props.isCancelButton && (
              <Button
                type={"button"}
                onClick={() => {
                  setShowModal(!showModal);
                  if (props.onModalToggle) {
                    props.onModalToggle(!showModal);
                  }
                }}
                className={"absolute right-0 mr-6"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </Button>
            )}
          </div>

          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
