import { useParams } from "react-router-dom";
import TemplateWedvita1 from "../template/TemplateWedvita1";
import TemplateWedvita2 from "../template/TemplateWedvita2";
import TemplateWedvita3 from "../template/TemplateWedvita3";
import TemplateWedvitaTest from "../template/templateWedvitaTest";
import { useRecoilState, useRecoilValue } from "recoil";
import { authState } from "../recoils/AuthState";
import { apiBackend } from "../recoils/Api";
import axios from "axios";
import { useEffect, useState } from "react";
import NotFoundPage from "./NotFoundPage";
import LoadingPage from "./LoadingPage";

const UserPreviewOrderedTemplate = () => {
  let { templateId, orderCode } = useParams();
  const viewTemplate = (data) => {
    if (data === null) {
      return <LoadingPage />;
    } else {
      switch (templateId) {
        case "1":
          return <TemplateWedvitaTest data={data} />;
        case "2":
          return <TemplateWedvita2 />;
        case "3":
          return <TemplateWedvita3 />;
        default:
          return <NotFoundPage />;
      }
    }
  };

  let apiAddress = useRecoilValue(apiBackend);
  const [orderDetail, setOrderDetail] = useState(null); // State untuk menyimpan data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${apiAddress}api/showOrderDetail/${orderCode}`
        );
        const data = response.data.Data;
        setOrderDetail(data); // Menyimpan data ke state
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
      }
    };

    fetchData();
  }, []); // useEffect hanya dijalankan saat komponen dimount

  //   console.log(orderDetail)

  return <div>{viewTemplate(orderDetail)}</div>;
};

export default UserPreviewOrderedTemplate;
