import { useNavigate } from "react-router-dom";
import Button from "../elements/Buttons";
import { useRecoilState, useRecoilValue } from "recoil";
import { authState } from "../recoils/AuthState";
import { apiBackend } from "../recoils/Api";
import axios from "axios";
import { useEffect, useState } from "react";


const AccountProfile = () => {
    const navigate = useNavigate();
    const [auth, setAuth] = useRecoilState(authState);

    const handleLogout = () => {
        localStorage.removeItem("auth");

        setAuth('')
        navigate('/');
    };
    const tableData = [
        { no: 1, orderCode: 'ABC123', statusVerifikasi: 'Verified', link: 'http://example.com' },
        { no: 2, orderCode: 'DEF456', statusVerifikasi: 'Pending', link: 'http://example.com' },
        { no: 3, orderCode: 'ABC123', statusVerifikasi: 'Verified', link: 'http://example.com' },
        { no: 4, orderCode: 'DEF456', statusVerifikasi: 'Pending', link: 'http://example.com' },
    ];
    const tableData1 = {
        banyakUndangan: "4",
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
        <div className="w-full flex justify-center">
                <table className="shadow-lg w-180">
                    <thead>
                        <tr>
                            <th className="px-5 py-2 text-right text-sm font-thin" colSpan="5">
                                <span className="text-pink-400">{tableData1.banyakUndangan}</span>
                                <span className="text-blue-800"> Undangan Aktif</span>
                            </th>
                        </tr>
                        <tr>
                            <th className="px-5 py-2 border-b border-t border-blue-700 text-sm font-thin">No</th>
                            <th className="px-5 py-2 border-b border-t border-blue-700 text-sm font-thin">Order Code</th>
                            <th className="px-5 py-2 border-b border-t border-blue-700 text-sm font-thin">Status Verifikasi</th>
                            <th className="px-5 py-2 border-b border-t border-blue-700 text-sm font-thin">Link</th>
                            <th className="px-5 py-2 border-b border-t border-blue-700 text-sm font-thin">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="bg-blue-50">
                        {tableData.map((data, index) => (
                            <tr key={index}>
                                <td className="text-pink-400 px-4 py-2 text-center font-thin text-sm">{data.no}</td>
                                <td className="text-blue-800 px-4 py-2 text-center font-thin text-sm">{data.orderCode}</td>
                                <td className="text-blue-800 px-4 py-2 text-center font-thin text-sm">{data.statusVerifikasi}</td>
                                <td className="text-blue-800 px-4 py-2 text-center font-thin text-sm">{data.link}</td>
                                <td className="px-8 py-2 border-l border-blue-500 ">
                                    <svg width="15" height="15" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.1652 0C9.11822 0 7.44345 1.67478 7.44345 3.72172H3.72172C1.67478 3.72172 0 5.3965 0 7.44345H26.0521C26.0521 5.3965 24.3773 3.72172 22.3303 3.72172H18.6086C18.6086 1.67478 16.9338 0 14.8869 0H11.1652ZM3.72172 11.1652V29.0667C3.72172 29.4761 4.01946 29.7738 4.42885 29.7738H21.6604C22.0698 29.7738 22.3676 29.4761 22.3676 29.0667V11.1652H18.6458V24.1912C18.6458 25.2333 17.8271 26.0521 16.785 26.0521C15.7429 26.0521 14.9241 25.2333 14.9241 24.1912V11.1652H11.2024V24.1912C11.2024 25.2333 10.3836 26.0521 9.34153 26.0521C8.29944 26.0521 7.48067 25.2333 7.48067 24.1912V11.1652H3.75894H3.72172Z" fill="#D80808" />
                                    </svg>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    </div>
    
    

    )
}
 export default AccountProfile