import { useState } from "react";
import Button from "../elements/Buttons";
import Modal from "../component/Modal";
import { useRecoilValue } from "recoil";
import { authState } from "../recoils/AuthState";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const auth = useRecoilValue(authState);

  return (
    <>
      <div className="grid relative md:grid-cols-2 md:mt-12">
        <div className="overflow-hidden w-full h-80 mx-auto mb-2 md:pl-6 md:h-140 md:rounded-br-[244px] contrast-125">
          <img src="/HeroThumbnail.png" alt="logo" className="mx-auto"></img>
        </div>
        <div className="md:ml-6 md:my-auto">
          <p className="mx-auto font-bold text-4xl text-primary-300 text-center md:text-7xl md:text-left">
            Wedding <span className="text-light-pink block">Invitation</span>{" "}
            Digital
          </p>
          <p className="mt-7 text-center mx-9 text-lg md:text-left md:text-xl md:ml-0">
            Platform kami menyediakan solusi modern yang menggabungkan efisiensi
            digital dengan kemewahan berbagi informasi kepada tamu undangan,
            menciptakan pengalaman pernikahan yang lebih fleksibel, dan praktis.
          </p>
          <div className="grid justify-items-center mt-9 md:justify-items-start">
            <Button
              isGradient
              type={auth.isAuthenticated ? "link" : "button"}
              onClick={() => setShowModal(!showModal)}
              href={"/template"}
            >
              Mulai
            </Button>
          </div>
        </div>
      </div>
      <Modal
        show={showModal}
        title={"Selamat Datang di Wedvita"}
        isCancelButton
        onModalToggle={(newShowModalValue) => {
          setShowModal(newShowModalValue);
        }}
      >
        <div className="md:text-lg mt-3">
          <p className="block font-semibold mb-2">Tunggu Sebentar,</p>
          <p>
            Sebelum melanjutkan, Ayo bergabung bersama kami dengan Login
            terlebih dahulu. Dengan login, Anda dapat melakukan order pemesanan
            undangan digital anda. Bersama-sama, kita akan membuat momen
            istimewa anda lebih berkesan.
          </p>
        </div>
        <div className="flex justify-end gap-4 mx-4 mt-12">
          <Button
            type={"button"}
            onClick={() => setShowModal(false)}
            className={
              "px-2 py-1 md:px-6 md:py-1.5 rounded-full border-2 border-primary-400 hover:bg-primary-400 hover:text-white"
            }
          >
            Cancel
          </Button>
          <Button
            type={"link"}
            href={"/login"}
            className={
              "px-4 py-1.5 md:px-12 md:py-2 rounded-full bg-primary-400 text-white hover:bg-primary-300"
            }
          >
            Login
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default Hero;
