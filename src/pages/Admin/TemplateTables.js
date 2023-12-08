import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { apiBackend, apiBackendImage } from "../../recoils/Api";
import Button from "../../elements/Buttons";
import { TemplateEditId, TemplateName, TemplatePrice, TemplateThumbnail } from "../../recoils/TemplateDesignData";
import { AdminPanelContent } from "../../recoils/AdminPanelState";
import Modal from "../../component/Modal";
import axios from "axios";

const TemplateTables = () => {
    const [Templates, setTemplates] = useState([]);
    const apiAddress = useRecoilValue(apiBackend);
    const apiImage = useRecoilValue(apiBackendImage);
    const [templateEditId, setTemplateEditId] = useRecoilState(TemplateEditId);
    const [, setTemplateName] = useRecoilState(TemplateName);
    const [, setTemplatePrice] = useRecoilState(TemplatePrice);
    const [, setTemplateThumbnail] = useRecoilState(TemplateThumbnail);
    const [, setSelectedContent] = useRecoilState(AdminPanelContent);
    const [modalVisibility, setModalVisibility] = useState(false);
    const [modalDeleteSuccess, setModalDeleteSuccess] = useState(false);
    const [modalDeleteFailed, setModalDeleteFailed] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleEditTemplate = (template_id, template_name, template_price, template_thumbnail) => {
        setTemplateEditId(template_id);
        setTemplateName(template_name);
        setTemplatePrice(template_price);
        setTemplateThumbnail(template_thumbnail);
        setSelectedContent('TemplateEditPage');
    };

    const handleDeleteTemplate = () => {
        setModalVisibility(false);
        axios.delete(apiAddress+`api/main/${templateEditId}`)
        .then(response => {
            if (response.data.status === 200){
                setTemplateEditId('');
                setModalDeleteSuccess(true);
                templateData();
            }else{
                console.log(response);
            }
        })
        .catch((error) => {
            setModalDeleteFailed(true)
            if (error.response) {
              setErrorMessage(error.response.data.message);
            } else {
              console.log(error);
            }
        });
    }
    const handleDeleteModal = (templateId) => {
        setModalVisibility(true);
        setTemplateEditId(templateId);
    }

    const handleCloseModalDeleteSuccess = () => {
        setModalDeleteSuccess(false);
    }

    const handleCloseModalDeleteFailed = () => {
        setModalDeleteFailed(false);
    }

    const handleCloseModalDeleteConfirmation = () => {
        setModalVisibility(false);
    }

    const templateData = async () => {
        try {
          const response = await axios.get(`${apiAddress}api/main`, {
            headers: {
              'ngrok-skip-browser-warning': 'true',
              // Atau gunakan header sesuai kebutuhan Anda
              // 'Custom-Header': 'value',
            },
          });
      
          const value = response.data;
      
          if (value.response === 200) {
            setTemplates(value.data);
          }
        } catch (err) {
          console.error(err);
        }
      };

    useEffect(() => {
        templateData();
      }, []);

    const dataTables = Templates.map((template, id) => (
        <tr key={id}>
            <td className="border border-slate-600 px-4 py-1 w-44 text-center">
                {id + 1}
            </td>
            <td className="border border-slate-600 px-4 py-1 w-44">
                {template.template_name}
            </td>
            <td className="border border-slate-600 px-4 py-1 w-44">
                {template.price}
            </td>
            <td className="border border-slate-600 px-4 py-1 w-44">
                <img src={`${apiImage}${template.thumbnail}`} alt={`template-${template.template_name}`}></img> 
            </td>
            <td className="border px-4 py-1 w-64 flex flex-wrap">
                <Button
                type={"button"}
                className= 'text-blue-500 rounded-lg px-3 py-1 mr-3'
                onClick={() => handleEditTemplate(template.id, template.template_name, template.price, template.thumbnail)}
                >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="w-6 h-6">
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" 
                    />
                </svg>

                </Button>
                <Button
                    type={"button"}
                    className={"hover:border hover:border-red-500 rounded-md p-1"}
                    onClick={() => handleDeleteModal(template.id)}
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 stroke-red-500"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                </svg>
                </Button>
      </td>
    </tr>
    ));

    return (
        <div className="px-4">
            <div className="px-4 py-12">
                <p className="text-3xl text-light-pink font-bold">Halaman Data Template</p>
            </div>
            <table className="border-slate-500 font-light py-8">
                <thead>
                    <tr className="text-white bg-slate-400 font-bold">
                        <th className="border border-slate-600 px-4 py-1 w-[100px] text-center">
                            No
                        </th>
                        <th className="border border-slate-600 px-4 py-1 w-[250px] text-center">
                            Template Name
                        </th>
                        <th className="border border-slate-600 px-4 py-1 w-[200px] text-center">
                            Template Price
                        </th>
                        <th className="border border-slate-600 px-4 py-1 w-[300px] text-center">
                            Template Thumbnail
                        </th>
                        <th className="border border-slate-600 px-4 py-1 w-[150px] text-center">
                            Aksi
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {!Templates || Templates.length === 0 ? (
                        <tr>
                        <td
                          className="border border-slate-600 px-4 py-1 w-full text-center text-light-pink font-bold"
                          colSpan="5"
                        >
                          Belum ada data
                        </td>
                      </tr>
                    ) : dataTables}
                </tbody>
            </table>
            <Modal show={modalVisibility} title={"Apakah anda yakin ingin menghapus template tersebut ?"}>
                <div className="flex items-center flex-col gap-5 justify-items-center text-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="w-36 h-36">
                        <path strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    <p className="text-center text-primary-200">
                        Anda tidak akan dapat mengembalikannya!
                    </p>
                    <div className="flex gap-4">
                        <Button onClick={handleDeleteTemplate} className={"mt-3 text-md bg-blue-500 text-white rounded-md shadow-md py-2.5 px-4 font-normal hover:bg-blue-600"}>
                            Ya, saya yakin
                        </Button>
                        <Button onClick={handleCloseModalDeleteConfirmation} isPrimary className={"mt-3 text-md bg-red-500 text-white rounded-md shadow-md py-2.5 px-4 font-normal hover:bg-red-600"}>
                            Batal
                        </Button>
                    </div>
                </div>
            </Modal>
            <Modal show={modalDeleteSuccess} title={"Terhapus!"}>
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
                        Template berhasil dihapus.
                    </p>
                    <Button onClick={handleCloseModalDeleteSuccess} className={"mt-3 text-md bg-blue-500 text-white rounded-md shadow-md py-2.5 px-4 font-normal hover:bg-blue-600"}>
                            OK
                    </Button>
                </div>
            </Modal>
            <Modal show={modalDeleteFailed} title={"Gagal Menghapus!"}>
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
                        {errorMessage}
                        Template gagal dihapus.
                    </p>
                    <Button onClick={handleCloseModalDeleteFailed} className={"mt-3 text-md bg-blue-500 text-white rounded-md shadow-md py-2.5 px-4 font-normal hover:bg-blue-600"}>
                            OK
                    </Button>
                </div>
            </Modal>
        </div>
    )
}

export default TemplateTables;