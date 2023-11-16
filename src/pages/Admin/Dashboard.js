import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState } from "../../recoils/AuthState";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import VerifikasiPage from "./VerifikasiPage";
import TemplateForm from "./TemplateForm";
import { AdminPanelContent } from "../../recoils/AdminPanelState";
import TemplateTables from "./TemplateTables";
import TemplateEditHandling from "./TemplateEditHandling";

const Dashboard = () =>{
    const navigate = useNavigate()
    const auth = useRecoilValue(authState)

    useEffect(() => {
        if (auth.isAuthenticated) {
            if(auth.dataUser.role_id !== 1){
                navigate('/')
            }
        }else{
            navigate('/')
        }
        
      }, []);
      //nilai defaultnya adalah VerifikasiPage yang ada pada recoil AdminPanelState
      const selectedContent = useRecoilValue(AdminPanelContent); 
    
    return(
    <div className="flex absolute inset-0">
        <Sidebar/>
        {selectedContent === 'VerifikasiPage' ? <VerifikasiPage/> : null}
        {selectedContent === 'UploadDesignPage' ? <TemplateForm/> : null}
        {selectedContent === 'TemplateTablePage' ? <TemplateTables/> : null}
        {selectedContent === 'TemplateEditPage' ? <TemplateEditHandling/> : null}
    </div>
    )
}

export default Dashboard