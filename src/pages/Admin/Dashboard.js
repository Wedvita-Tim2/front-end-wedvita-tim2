import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState } from "../../recoils/AuthState";
import { useEffect } from "react";
import Sidebar from "./Sidebar";
import VerifikasiPage from "./VerifikasiPage";

const Dashboard = () =>{
    const navigate = useNavigate()
    const auth = useRecoilValue(authState)

    useEffect(() => {
        if (auth.isAuthenticated) {
            if(!auth.dataUser.role_id === 1){
                navigate('/')
            }
        }else{
            navigate('/')
        }
        
      }, []);

    
    return(
    <div className="flex absolute inset-0">
        <Sidebar/>
        <VerifikasiPage/>
    </div>
    )
}

export default Dashboard