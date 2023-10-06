import OrderBar from "./OrderBar"
import TemplateWedvita1 from "../template/TemplateWedvita1"
import { useParams } from "react-router-dom"
import TemplateWedvita2 from "../template/TemplateWedvita2"
const OrderPreviewTemplatePage = () => {
    
    let {templateId} = useParams()
    const viewTemplate = () =>{
        switch(templateId){
            case '1' : return <TemplateWedvita1/>
            case '2' : return <TemplateWedvita2/>
        }
    }
    return(
        <div>
            {viewTemplate()}
            <OrderBar/>
        </div>
    )
}

export default OrderPreviewTemplatePage