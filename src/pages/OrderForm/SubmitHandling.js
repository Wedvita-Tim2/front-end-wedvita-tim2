import { useRecoilState, useRecoilValue } from "recoil";
import Button from "../../elements/Buttons";
import {
  GalleryEvent,
  accountHolderNameEvent,
  accountNumberEvent,
  addressEvent,
  brideFatherName,
  brideMotherName,
  brideName,
  buildingEvent,
  coverImage,
  dateEvent,
  groomFatherName,
  groomMotherName,
  groomName,
  guestEvent,
  latEvent,
  linkGmapsEvent,
  lngEvent,
  quotesEvent,
} from "../../recoils/OrderData";
import axios from "axios";
import { selectedTemplate } from "../../recoils/SelectedTemplate";
import { apiBackend } from "../../recoils/Api";
import { useState } from "react";
import Modal from "../../component/Modal";

const SubmitHandling = ({ data }) => {
  const [coverImageData, setCoverImageData] = useRecoilState(coverImage);
  const [brideNameData, setBrideNameData] = useRecoilState(brideName);
  const [groomNameData, setGroomNameData] = useRecoilState(groomName);
  const [brideFatherData, setBrideFatherData] = useRecoilState(brideFatherName);
  const [groomFatherData, setGroomFatherData] = useRecoilState(groomFatherName);
  const [brideMotherData, setBrideMotherData] = useRecoilState(brideMotherName);
  const [groomMotherData, setGroomMotherData] = useRecoilState(groomMotherName);
  const [dateEventData, setDateEventData] = useRecoilState(dateEvent);
  const [guestsData, setGuestsData] = useRecoilState(guestEvent);
  const [accountNumberData, setAccountNumberData] =
    useRecoilState(accountNumberEvent);
  const [accounNameData, setAccountNameData] = useRecoilState(
    accountHolderNameEvent
  );
  const [latData, setLatData] = useRecoilState(latEvent);
  const [lngData, setLngData] = useRecoilState(lngEvent);
  const [addressData, setAddressData] = useRecoilState(addressEvent);
  const [buildingData, setBuildingData] = useRecoilState(buildingEvent);
  const [attachmentsData, setAttachmentsData] = useRecoilState(GalleryEvent);
  const [quotesData, setQuotesData] = useRecoilState(quotesEvent);
  const [gmapsData, setGmapsData] = useRecoilState(linkGmapsEvent);

  const resetData = () => {
    setCoverImageData("");
    setBrideNameData("");
    setGroomNameData("");
    setBrideFatherData("");
    setGroomFatherData("");
    setBrideMotherData("");
    setGroomMotherData("");
    setDateEventData(new Date());
    setGuestsData("");
    setAccountNumberData("");
    setAccountNameData("");
    setLatData(-6.871461776598065);
    setLngData(107.57360083862629);
    setAddressData("");
    setBuildingData("");
    setAttachmentsData([]);
    setQuotesData("");
    setGmapsData("");
  };
  //apiAddress
  const apiAddress = useRecoilValue(apiBackend);

  //get template id
  const templateId = useRecoilValue(selectedTemplate);

  let formData = new FormData();

  if (coverImageData) {
    formData.append(
      "cover_image",
      coverImageData,
      `coverImage${groomNameData}.jpeg`
    );
  }
  formData.append("groom_name", groomNameData);
  formData.append("bride_name", brideNameData);
  formData.append("groom_father_name", groomFatherData);
  formData.append("groom_mother_name", groomMotherData);
  formData.append("bride_father_name", brideFatherData);
  formData.append("bride_mother_name", brideMotherData);
  formData.append("date_event", dateEventData);
  formData.append("guests", guestsData);
  formData.append("account_number", accountNumberData);
  formData.append("account_holder_name", accounNameData);
  formData.append("quotes", quotesData);
  gmapsData === ""
    ? formData.append("lng", lngData)
    : formData.append("lng", "");
  gmapsData === ""
    ? formData.append("lat", latData)
    : formData.append("lat", "");
  formData.append("maps_url", gmapsData);
  formData.append("address", addressData);
  formData.append("building_name", buildingData);
  attachmentsData.forEach((blob, index) => {
    formData.append(
      `attachment_name[${index}]`,
      blob,
      `gallery${index}user=${groomName}.jpeg`
    );
  });
  formData.append("id", data.dataUser.id);

  const [visible, setVisible] = useState(false);
  const [failed, setFailed] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    axios
      .post(`${apiAddress}api/postOrder/${templateId}`, formData, config)
      .then((response) => {
        if (response.data.response === 200) {
          setVisible(true);
          resetData();
        } else {
          console.log("Failed to navigate. Response status is not 200.");
          setFailed(true)
          setMessage(response.data.message);
        }
      })
      .catch((error) => {
        setFailed(true)
        console.log(error)
        if (error.response) {
          setMessage(error.response.data.message);
        } else {
          console.log(error);
        }
      });
  };
  return (
    <div className="mt-12 flex justify-center md:justify-start">
      <Button isGradient onClick={handleSubmit}>
        Submit
      </Button>
      <Modal show={visible} title={"Berhasil Membuat Undangan"}>
        <div className="flex items-center flex-col gap-5 justify-items-center text-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-36 h-36 stroke-white"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-center text-primary-200">
            Selamat, Order Undangan Digital Anda Berhasil Dibuat. Langkah
            selanjutnya adalah anda dapat melihat rincinan order di profile
            account anda, lalu tunggu hingga status menjadi active dan anda
            mendapatkan link undangan digital anda.
          </p>
          <Button type={"link"} href={"/"} isPrimary className={"mt-3"}>
            Kembali Ke Home
          </Button>
        </div>
      </Modal>
      <Modal
        show={failed}
        title={"Gagal Membuat Undangan"}
        onModalToggle={(newShowModalValue) => {
          setFailed(newShowModalValue);
        }}
      >
        <div className="flex items-center flex-col gap-5 justify-items-center text-red-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-36 h-36"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <p className="text-center text-primary-200">
            {message.includes("validation")
              ? "Semua data dalam form harus diisi, periksa kembali form isian anda."
              : null}
          </p>

          <Button
            type={"button"}
            onClick={() => setFailed(false)}
            isPrimary
            className={"mt-3"}
          >
            Tutup
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default SubmitHandling;
