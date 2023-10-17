import OrderBar from "./OrderBar";
import TemplateWedvita1 from "../template/TemplateWedvita1";
import { useParams } from "react-router-dom";
import TemplateWedvita2 from "../template/TemplateWedvita2";
import TemplateWedvita3 from "../template/TemplateWedvita3";
import NotFoundPage from "./NotFoundPage";
const OrderPreviewTemplatePage = () => {
  let { templateId } = useParams();
  const viewTemplate = () => {
    switch (templateId) {
      case "1":
        return <TemplateWedvita1 />;
      case "2":
        return <TemplateWedvita2 />;
      case "3":
        return <TemplateWedvita3 />;
      default:
        return <NotFoundPage />;
    }
  };
  return (
    <div>
      {viewTemplate()}
      <OrderBar />
    </div>
  );
};

export default OrderPreviewTemplatePage;
