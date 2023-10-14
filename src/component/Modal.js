import { useEffect } from 'react';

const Modal = (props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-transparent backdrop-brightness-50 z-[999999] flex items-center justify-center">
      <div className="relative bg-white rounded-3xl w-80 md:w-[670px] px-6 py-5">
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
