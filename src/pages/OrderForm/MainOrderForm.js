import { useEffect, useState } from "react";
import AddOns from "./AddOns";
import CoverImagePart from "./CoverImagePart";
import EventDate from "./EventDate";
import EventLocation from "./EventLocation";
import GalleryPart from "./GalleryPart";
import GroomBride from "./GroomBride";
import GroomBrideParent from "./GroomBrideParent";
import QuotesPart from "./QuotesPart";
import { useRecoilState, useRecoilValue } from "recoil";
import { GalleryEvent } from "../../recoils/OrderData";
import Button from "../../elements/Buttons";
import SubmitHandling from "./SubmitHandling";
import { authState } from "../../recoils/AuthState";
import { useNavigate } from "react-router-dom";
import { selectedTemplateName } from "../../recoils/SelectedTemplate";

const MainOrderForm = () => {
  const [images, setImages] = useState([]);
  const [result, setResult] = useRecoilState(GalleryEvent);
  const [isShow, setShow] = useState(true)
  const [imageCount, setImageCount] = useState(0);
  const auth = useRecoilValue(authState)
  const templateName = useRecoilValue(selectedTemplateName)
  const [isPromptRequired,] = useState(true);

  const handleBeforeUnload = (event) => {
    if (isPromptRequired) {
      event.preventDefault();
      event.returnValue = "Anda yakin ingin meninggalkan halaman ini?";
    }
  };

  const navigate = useNavigate()

  useEffect(() => {
    setShow(true)
    if (!auth.isAuthenticated) {
        navigate('/login')
    }
    if(templateName===''){
      navigate(-1)
    }
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const onImageCrop = (index, croppedImage) => {
    const newImages = [...images];
    newImages[index] = croppedImage;
    setImages(newImages);
  };

  const addGalleryPart = () => {
    if (imageCount < 4) {
      setImages([...images, null]);
      setImageCount(imageCount + 1);
    }
  };
  const clearAllImages = () => {
    setImages([]);
    setResult([]);
    setImageCount(0);
    setShow(true)
  };

  const handleSimpan = ()=>{
    setResult([...result, ...images])
    setShow(false)
  }


  return (
    <div className="p-4 md:p-12">
      <p className="text-2xl md:text-left text-light-pink font-bold text-center mb-6 md:mb-8 md:text-4xl">
        Form Order Wedvita
      </p>
      <p className="text-light-pink text-lg mx-auto text-center md:text-left md:mb-4 md:font-semibold md:text-2xl">Template yang dipilih : {templateName}</p>
      <p className="text-lg md:text-left text-primary-300 font-bold text-center md:text-2xl ">
        Form Mempelai
      </p>
      <GroomBride />
      <p className="text-lg md:text-left text-primary-300 font-bold text-center md:text-2xl ">
        Form Orang Tua Mempelai
      </p>
      <GroomBrideParent />
      <p className="text-lg md:text-left text-primary-300 font-bold text-center md:text-2xl ">
        Form Pengisian Detail Acara
      </p>
      <div className="md:flex md:flex-row-reverse md:justify-around md:h-56">
        <CoverImagePart />
        <QuotesPart />
      </div>
      <EventDate />
      <EventLocation />
      <AddOns />
      <div className="px-auto flex flex-col md:w-full py-2">
        <p className="text-normal md:text-left text-primary-300 font-semibold text-center md:text-2xl md:mb-2 w-64 md:ml-2">
          Gallery Pernikahan
        </p>
        <div className="flex flex-wrap justify-around text-white md:justify-start">
         <Button
            onClick={addGalleryPart}
            className={
              imageCount < 4
                ? "bg-primary-100 rounded-md p-1 text-sm md:text-lg md:px-2"
                : "bg-white border border-primary-100 text-primary-100 rounded-md p-1 text-sm md:text-lg md:px-2 cursor-not-allowed"
            }
            disabled={imageCount >= 4}
          >
            Tambah Gambar
          </Button>
          <Button
            onClick={clearAllImages}
            className={
              "bg-primary-100 rounded-md p-1 text-sm md:text-lg md:px-2 md:ml-8"
            }
          >
            Clear Gambar
          </Button>
        </div>
        <div className="md:grid md:grid-cols-2">
          {images.map((image, index) => (
            <GalleryPart key={index} index={index} onImageCrop={onImageCrop} />
          ))}
        </div>
        <Button
          onClick={handleSimpan}
          className={
            `${isShow?' ':'hidden'}bg-primary-100 w-56 rounded-md mx-auto p-1 text-sm mt-2 text-white md:mx-0 md:text-lg`
          }
        >
          Simpan Semua Gambar
        </Button>
      </div>
      <SubmitHandling data={auth}/>
    </div>
  );
};

export default MainOrderForm;
