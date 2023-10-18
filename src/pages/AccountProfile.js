import { useNavigate } from "react-router-dom";
import Button from "../elements/Buttons"
import { useRecoilState, useRecoilValue } from "recoil";
import { authState } from "../recoils/AuthState";
import { apiBackend } from "../recoils/Api";
import axios from "axios";
import { useEffect, useState } from "react";


const AccountProfile = ()=>{

    const navigate = useNavigate()
    const [auth, setAuth] = useRecoilState(authState)

    const handleLogout = () => {
        localStorage.removeItem("auth");

        setAuth('')
        navigate('/');
    };
    let orderCode, templateId;
    let apiAddress = useRecoilValue(apiBackend);
    const [orderData, setOrderData] = useState(null); // State untuk menyimpan data
    
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get(`${apiAddress}api/orders/${auth.dataUser.id}`);
            const data = response.data.Data;
            setOrderData(data); // Menyimpan data ke state
        } catch (error) {
            console.error('Terjadi kesalahan:', error);
        }
        };
    
        fetchData();
    }, []); // useEffect hanya dijalankan saat komponen dimount
    
      
    
    return(
    <div>
        <p>{auth.dataUser.username}</p>
        <p>{auth.dataUser.email}</p>
        <p>{auth.dataUser.phone_number}</p>
        {orderData !== null &&<Button type={'link'} href={`/preview/${orderData[0].template_id}/${orderData[0].order_code}`} isGradient>Lihat Preview</Button>}
        <Button type={'button'} onClick={handleLogout} isGradient>Logout</Button>
        
    </div>
    
    

    )
}

export default AccountProfile