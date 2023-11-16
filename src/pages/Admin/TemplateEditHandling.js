import { useRecoilState, useRecoilValue } from "recoil";
import { TemplateName, TemplatePrice, TemplateThumbnail } from "../../recoils/TemplateDesignData";
import { useCallback, useEffect, useState } from "react";
import TemplateFormHandling from "./TemplateFormHandling";
import Button from "../../elements/Buttons";
import { InputText } from "../../elements/Forms";
import ReactEasyCrop from "react-easy-crop";
import getCroppedImg from "../../elements/Forms/CropImage/getCropImg";
import { authState } from "../../recoils/AuthState";
import { apiBackendImage } from "../../recoils/Api";


const TemplateEditHandling = () => {
    const [templateName, setTemplateName] = useRecoilState(TemplateName);
    const [templatePrice, setTemplatePrice] = useRecoilState(TemplatePrice);
    const [image, setImage] = useState(null);
    const [show, setShow] = useState(false);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const auth = useRecoilValue(authState)
    const [result, setResult] = useRecoilState(TemplateThumbnail);
    const [oldImage, setOldImage] = useState(null);
    const apiImage = useRecoilValue(apiBackendImage);
    const [thumbnailChangeState, setThumbnailChangeState] = useState(false);

    useEffect(() => {
        setOldImage(apiImage+result);
      }, []);

    const handleImageUpload = (e) => {
        setShow(true);
        const file = e.target.files[0];
    
        if (file) {
          const reader = new FileReader();
          console.log(reader);
    
          reader.onload = () => {
            setImage(reader.result);
          };
    
          reader.readAsDataURL(file);
        }
      };
      const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
      }, []);
      const handleCrop = async () => {
        if (image && croppedAreaPixels) {
          const croppedImage = await getCroppedImg(image, croppedAreaPixels);
          setImage(URL.createObjectURL(croppedImage));
          setResult(croppedImage);
          setThumbnailChangeState(true);
          setShow(false);
        }
      };
    
      const handleCancel = () => {
        setShow(false);
      };


    return(
        <div>
            <div className="p-8">
                <p className="text-3xl text-light-pink font-bold">Halaman Upload Design</p>
                <div className="grid grid-cols-2 pt-20">
                    <div className="pr-16 pb-8">
                        <p className="text-lg md:text-left text-primary-300 font-bold text-center md:text-2xl ">
                            Nama Template 
                        </p>
                        <InputText
                            element={"input"}
                            type={"text"}
                            className={
                            "rounded-md w-72 mt-3 md:w-[300px] lg:w-[400px] border border-light-pink"
                            }
                            name={"template_name"}
                            placeholder={"Contoh: Traditional Bali"}
                            onChange={(e) => setTemplateName(e.target.value)}
                            value={`${templateName}`}
                        />
                    </div>
                    <div className="pl-8">
                        <p className="text-lg md:text-left text-primary-300 font-bold text-center md:text-2xl ">
                            Harga Template 
                        </p>
                        <InputText
                            element={"input"}
                            type={"number"}
                            className={
                            "rounded-md w-72 mt-3 md:w-[300px] lg:w-[400px] border border-light-pink"
                            }
                            name={"template_price"}
                            placeholder={"Contoh: 90000"}
                            onChange={(e) => setTemplatePrice(e.target.value)}
                            value={`${templatePrice}`}
                        />
                    </div>
                    <div>
                        <p className="text-lg md:text-left text-primary-300 font-bold text-center md:text-2xl pb-8 ">
                            Unggah Design Template Anda
                        </p>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="ml-12 pb-4"
                        />
                        {show && image  ? <div className="w-[340px] h-[340px]  md:w-[450px] md:h-[450px] absolute">
                            <ReactEasyCrop
                                image={image}
                                crop={crop}
                                zoom={zoom}
                                aspect={9/16}
                                onCropChange={setCrop}
                                onZoomChange={setZoom}
                                onCropComplete={onCropComplete}
                                classes={{
                                    containerClassName: "absolute z-[99999]", // Menambahkan class "relative" untuk mengatur posisi relatif
                                cropAreaClassName: "border-2 border-blue-500", // Menambahkan border biru pada area crop
                            }}
                            />
                            <Button
                                onClick={handleCrop}
                                className="z-[999999] absolute top-0 left-0"
                                isPrimary
                                >
                                Crop Image
                            </Button>
                            <Button
                                onClick={handleCancel}
                                className="z-[999999] absolute top-0 right-9"
                                isPrimary
                                >
                                Cancel
                            </Button>
                        </div>: null}
                        </div>
                        {(image && result) || oldImage? 
                            <div className="relative w-48 h-72 overflow-hidden pl-8">
                                <img src={image || oldImage} alt="preview image" ></img>
                                <Button
                                    type={"button"}
                                    onClick={() => {
                                    setImage(null);
                                    setOldImage(null);
                                    }}
                                    className={"absolute top-0 right-0"}
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#FF4EB8"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 stroke-primary-200"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                    </svg>
                                </Button>
                            </div>
                        : null}
                </div>
                <TemplateFormHandling data={[auth, thumbnailChangeState]}/>
            </div>
        </div>
    )
};

export default TemplateEditHandling;