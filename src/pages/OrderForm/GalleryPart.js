import React, { useState, useCallback } from "react";
import ReactEasyCrop from "react-easy-crop";
import getCroppedImg from "../../elements/Forms/CropImage/getCropImg";
import Button from "../../elements/Buttons";
import { useRecoilState } from "recoil";
import { GalleryEvent } from "../../recoils/OrderData";

const GalleryPart = ({ index, onImageCrop }) => {
  const [image, setImage] = useState(null);
  const [show, setShow] = useState(true);
  const [preview, setPreview] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [result,] = useRecoilState(GalleryEvent);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleImageUpload = (e) => {
    setShow(true);
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleCrop = async () => {
    if (image && croppedAreaPixels) {
      const croppedImage = await getCroppedImg(image, croppedAreaPixels);
      setPreview(URL.createObjectURL(croppedImage));
      onImageCrop(index, croppedImage); // Panggil fungsi onImageCrop dengan indeks dan hasil cropping
      setShow(false);
    }
  };

  const handleCancel = () => {
    setShow(false);
  };

  return (
    <div className="">
      <div className="flex flex-wrap justify-center md:flex-col">
        <p className="text-normal md:text-left text-primary-300 text-center md:text-lg md:font-semibold my-4 mx-5">
          Pilih gambar ke {index+1} untuk pernikahan anda
        </p>
        <div className="image-cropper relative">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="ml-12"
          />
          {(image && show) && (
            <div className="w-[340px] h-[340px]  md:w-[450px] md:h-[450px] absolute">
              <ReactEasyCrop
                image={image}
                crop={crop}
                zoom={zoom}
                aspect={16 / 9}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
                classes={{
                  containerClassName: "absolute z-[99999]",
                  cropAreaClassName: "border-2 border-blue-500",
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
            </div>
          )}
          {(preview && result) && (
            <div className="relative h-28 w-48 mx-auto md:mx-3 md:h-48 md:w-80 rounded-md mt-2">
              <img src={preview} alt="preview" />
              <Button
                type={"button"}
                onClick={() => {
                  setPreview(null);
                  setImage(null);
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
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryPart;
