import { useRecoilState, useRecoilValue } from "recoil";
import { TemplatesRecoil } from "../recoils/TemplatesRecoil";
import { useEffect, useState } from "react";
import Button from "../elements/Buttons";
import { useNavigate } from "react-router-dom";
import {
  selectedTemplate,
  selectedTemplateName,
  selectedTemplatePrice,
} from "../recoils/SelectedTemplate";
import { authState } from "../recoils/AuthState";
import Modal from "../component/Modal";
import { apiBackend } from "../recoils/Api";

const TemplatesRendering = () => {
  const [templates, setTemplates] = useRecoilState(TemplatesRecoil);
  const [, setSelectTemplate] = useRecoilState(selectedTemplate);
  const [, setSelectTemplateName] = useRecoilState(selectedTemplateName);
  const [, setSelectTemplatePrice] = useRecoilState(selectedTemplatePrice)
  const [showModal, setShowModal] = useState(false);
  const auth = useRecoilValue(authState);
  const navigate = useNavigate();
  const apiAddress = useRecoilValue(apiBackend)

  const getTemplates = async () => {
    try {
      const templateDatas = await fetch(apiAddress+"api/main");
      const value = await templateDatas.json();
      setTemplates(value.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTemplates();
  }, []);

  const handleSelectTemplate = (id, nama, type, price) => {
    console.log(price)
    setSelectTemplate(id);
    setSelectTemplateName(nama);
    setSelectTemplatePrice(price);
    if (type === "order") {
      if (auth.isAuthenticated) {
        navigate(`/order`);
      } else {
        setShowModal(!showModal);
      }
    } else {
      navigate(`/template/preview/template-wedvita/${id}`);
    }
  };

  const templateCardSkeleton = Array.from({ length: 3 }, (_, id) => (
    <div
      className="bg-slate-300 mx-auto shadow-md pt-4 px-4 rounded-lg mt-5 w-36 h-52 md:w-72 md:h-[506px] animate-pulse "
      key={id}
    ></div>
  ));

  const templateCard = templates.map((template, id) => (
    <div
      className="relative group overflow-hidden bg-slate-50 ring-offset-2 ring-1 ring-slate-100 rounded-xl h-60 z-20 w-36 md:w-72 md:h-[460px] shadow-lg mx-auto mt-5 hover:scale-110 delay-100 duration-200 ease-in-out"
      key={id}
    >
      <Button
        type="button"
        onClick={() =>
          handleSelectTemplate(template.id, template.template_name, "preview",template.price)
        }
      >
        <img
          src={apiAddress + template.thumbnail}
          alt={`Template ${template.id}`}
          className="z-10"
        />
      </Button>
      <div className="absolute bottom-0 inset-x-0 h-12 md:h-24 group-hover:h-32 px-3 py-4 text-center bg-gradient-to-b from-transparent to-black opacity-40 group-hover:opacity-70 backdrop-opacity-30" />
      <div
        className="absolute bottom-0 inset-x-0 px-3 py-2 md:py-4 text-center group-hover:backdrop-blur-lg"
        style={{ backdropFilter: "blur(2px)" }}
      >
        <p className="text-xs font-semibold md:text-lg text-white mb-1 md:mb-1 group-hover:font-bold ">
          {template.template_name}
        </p>
        <p className="hidden text-xs md:text-lg text-white mb-2 md:mb-3 group-hover:block group-hover:font-semibold">
        {"Rp."+ template.price.toLocaleString('id-ID')}
        </p>
        <Button
          type="button"
          onClick={() =>
            handleSelectTemplate(template.id, template.template_name, "order")
          }
          className="hidden mx-auto text-white bg-light-pink/70 md:py-2 rounded-xl py-1 w-3/4 group-hover:block"
        >
          Order Now
        </Button>
      </div>
    </div>
  ));

  return (
    <div>
      <Modal
        show={showModal}
        title={"Sepertinya Anda Belum Bergabung Dengan Kami"}
        isCancelButton
        onModalToggle={(newShowModalValue) => {
          setShowModal(newShowModalValue);
        }}
      >
        <div className="md:text-lg mt-3">
          <p className="block font-semibold mb-2">Tunggu dulu,</p>
          <p>
            Sebelum melakukan order Wedvita, Ayo bergabung bersama kami dengan Login
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
      <div className="text-center">
        <p className="text-2xl md:text-5xl font-bold text-primary-400">
          Template <span className="text-light-pink">Wedvita</span>
        </p>
        <p className="text-bs md:text-xl mt-2 text-primary-400">
          Pilihan template sesuai keinginan anda dan pasangan
        </p>
      </div>
      <div className="flex flex-wrap mt-7 px-3 md:px-12">
        {!templates || templates.length === 0
          ? templateCardSkeleton
          : templateCard}
      </div>
    </div>
  );
};

export default TemplatesRendering;
