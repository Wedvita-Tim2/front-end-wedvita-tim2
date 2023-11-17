import OrderBar from "./OrderBar";
import { useParams } from "react-router-dom";
import TemplateWedvita2 from "../template/TemplateWedvita2";
import TemplateWedvita3 from "../template/TemplateWedvita3";
import TemplateWedvita4 from "../template/TemplateWedvita4";
import NotFoundPage from "./NotFoundPage";
import { useEffect, useState } from "react";
import TemplateWedvitaTest from "../template/templateWedvitaTest";

const OrderPreviewTemplatePage = () => {
  let { templateId } = useParams();
  const [showOrder, setShowOrder] = useState(true);

  useEffect(() => {
    // Check if the templateId is not found and setShowOrder accordingly.
    if (templateId !== "1" && templateId !== "2" && templateId !== "3"&& templateId !== "4") {
      setShowOrder(false);
    } else {
      setShowOrder(true);
    }
  }, [templateId]);

  const viewTemplate = () => {
    switch (templateId) {
      case "1":
        return <TemplateWedvitaTest data={[null]} />;
      case "2":
        return <TemplateWedvita2 data={[null]}/>;
      case "3":
        return <TemplateWedvita3 />;
      case "4":
        return <TemplateWedvita4 data={[null]}/>
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <div>
      {viewTemplate()}
      <OrderBar visible={showOrder} />
    </div>
  );
};

export default OrderPreviewTemplatePage;
