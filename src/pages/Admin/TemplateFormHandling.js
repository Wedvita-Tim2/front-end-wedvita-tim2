import axios from "axios";
import Modal from "../../component/Modal";
import Button from "../../elements/Buttons";
import { useState } from "react";
import { apiBackend } from "../../recoils/Api";
import { useRecoilState, useRecoilValue } from "recoil";
import { TemplateEditId, TemplateName, TemplatePrice, TemplateThumbnail } from "../../recoils/TemplateDesignData"
import { AdminPanelContent } from "../../recoils/AdminPanelState";



const TemplateFormHandling = ({ data }) => {
    const apiAddress = useRecoilValue(apiBackend);
    const [visible, setVisible] = useState(false);
    const [failed, setFailed] = useState(false);
    const [message, setMessage] = useState("");
    const [, setSelectedContent] = useRecoilState(AdminPanelContent);
    const [templateName, setTemplateName] = useRecoilState(TemplateName);
    const [templatePrice, setTemplatePrice] = useRecoilState(TemplatePrice);
    const [templateThumbnail, setTemplateThumbnail] = useRecoilState(TemplateThumbnail);
    const [templateId, setTemplateEditId] = useRecoilState(TemplateEditId);
    const resetData = () => {
        setTemplateName("");
        setTemplatePrice("");
        setTemplateThumbnail("");
        setTemplateEditId("");
      };
    
    const handleCloseModal = () => {
      setVisible(false);
      setSelectedContent('TemplateTablePage');
    }
    
    const handleSubmit = () => {
      console.log(data[1]);
      const formData = new FormData();
      formData.append("template_name", templateName);
      formData.append("price", templatePrice);
      if(data[1]){
        console.log('ke eksekusi gua');
        formData.append("thumbnail", templateThumbnail, `templateThumbnail${templateName}.jpeg`)
      }
      formData.append("user_id", data[0].dataUser.id);
      
      const config = {
      headers: { "content-type": "multipart/form-data" },
      };


    if (templateId !== ''){
      console.log(formData);
      axios
      .post(`${apiAddress}api/updateTemplate/${templateId}`, formData, config)
      .then((response)=> {
        if (response.data.status === 200) {
          console.log(response);
          setVisible(true);
          resetData();
        } else {
          console.log(response);
        }
      })
      .catch((error) => {
        setFailed(true)
        if (error.response) {
          setMessage(error.response.data.message);
        } else {
          console.log(error);
        }
      });
      }else{
        axios
        .post(`${apiAddress}api/postTemplate`, formData, config)
        .then((response) => {
            if (response.data.response === 200) {
              setVisible(true);
              resetData();
            } else {
              console.log("Failed to navigate. Response status is not 200.");
            }
        })
        .catch((error) => {
            setFailed(true)
            if (error.response) {
              setMessage(error.response.data.message);
            } else {
              console.log(error);
            }
        });
      };
      }
      
    return (
      <div className="mt-12 flex justify-center md:justify-start">
        <Button isGradient onClick={handleSubmit}>
          Submit
        </Button>
        <Modal show={visible} title={"Berhasil Mengunggah Template"}>
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
              Selamat, template design anda telah berhasil diunggah 
              pada database sistem. Selanjutnya, tim pengembang kami
              akan membuatkan template undangan berdasarkan design anda!
            </p>
            <Button onClick={handleCloseModal} isPrimary className={"mt-3"}>
              Kembali Ke Admin Panel
            </Button>
          </div>
        </Modal>
        <Modal
          show={failed}
          title={"Gagal Mengunggah Template Design"}
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
    )
}

export default TemplateFormHandling