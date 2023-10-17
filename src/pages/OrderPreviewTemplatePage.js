import OrderBar from "./OrderBar";
import TemplateWedvita1 from "../template/TemplateWedvita1";
import { useParams } from "react-router-dom";
import TemplateWedvita2 from "../template/TemplateWedvita2";
import TemplateWedvita3 from "../template/TemplateWedvita3";
import NotFoundPage from "./NotFoundPage";
import { useEffect, useState } from "react";

const OrderPreviewTemplatePage = () => {
  let { templateId } = useParams();
  const [showOrder, setShowOrder] = useState(true);

  useEffect(() => {
    // Check if the templateId is not found and setShowOrder accordingly.
    if (templateId !== "1" && templateId !== "2" && templateId !== "3") {
      setShowOrder(false);
    } else {
      setShowOrder(true);
    }
  }, [templateId]);

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
      <OrderBar visible={showOrder} />
    </div>
  );
};

export default OrderPreviewTemplatePage;
