import { useParams } from "react-router-dom";
import TemplateWedvita2 from "../template/TemplateWedvita2";
import TemplateWedvita3 from "../template/TemplateWedvita3";
import TemplateWedvitaTest from "../template/templateWedvitaTest";
import { useRecoilValue } from "recoil";
import { authState } from "../recoils/AuthState";
import { apiBackend } from "../recoils/Api";
import axios from "axios";
import { useEffect, useState } from "react";
import NotFoundPage from "./NotFoundPage";
import LoadingPage from "./LoadingPage";
import TemplateWedvita4 from "../template/TemplateWedvita4";

const UserPreviewOrderedTemplate = (props) => {
  const auth = useRecoilValue(authState);
  const userId = auth.dataUser.id;
  let { templateId, orderCode } = useParams();
  const viewTemplate = (data) => {
    if (data === null) {
      return <LoadingPage />;
    } else if (props.preview === true && data !== null && data[0].user_id !== userId) {
      return <NotFoundPage />;
    }else if (props.preview !== true && data !== null && data[0].order_verification !== 1) {
      return <NotFoundPage />;
    } else if (data[0].template_id == templateId) {
      switch (templateId) {
        case "1":
          return <TemplateWedvitaTest data={data} />;
        case "2":
          return <TemplateWedvita2 data={data}/>;
        case "3":
          return <TemplateWedvita3 data={data}/>;
        case "4":
          return <TemplateWedvita4 data={data}/>;
        default:
          return <NotFoundPage />;
      }
    }
     else {
      return <NotFoundPage/>;
    }
  };

  let apiAddress = useRecoilValue(apiBackend);
  const [orderDetail, setOrderDetail] = useState(null); // State untuk menyimpan data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${apiAddress}api/showOrderDetail/${orderCode}`,
          {
            headers: {
              'ngrok-skip-browser-warning': 'true',
              // Atau gunakan header sesuai kebutuhan Anda
              // 'Custom-Header': 'value',
            },
          }
        );

        const data = response.data.Data;
        setOrderDetail(data); // Menyimpan data ke state
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
      }
    };

    fetchData();
  }, []); // useEffect hanya dijalankan saat komponen dimount

  if (auth === "") {
    return <NotFoundPage />;
  }
  //   console.log(orderDetail)

  return <div>{viewTemplate(orderDetail)}</div>;
};

export default UserPreviewOrderedTemplate;
