import { useRecoilState } from "recoil"
import { authState } from "../../recoils/AuthState"
import Button from "../../elements/Buttons";
import { useNavigate } from "react-router-dom";
import { AdminPanelContent } from "../../recoils/AdminPanelState";

const Sidebar = () =>{

    const [auth, setAuth] = useRecoilState(authState)
    const navigate = useNavigate()

    const username = auth.dataUser.username.slice(0,1).toUpperCase() + auth.dataUser.username.slice(1)

    const handleLogout = () => {
        localStorage.removeItem("auth");


        setAuth('')
        navigate('/');
    };

    const [selectedContent, setSelectedContent] = useRecoilState(AdminPanelContent);
    const handleVerifikasiPage = () => {
        setSelectedContent('VerifikasiPage');
    }
    const handleUploadDesignPage = () => {
        setSelectedContent('UploadDesignPage');
    }

    const handleTemplateTablePage = () => {
        setSelectedContent('TemplateTablePage');
    }

    return(
        <aside className="bg-slate-300 h-full w-52 px-4 py-4 shadow-lg flex flex-col">
            <div className="text-center text-2xl mt-4 ">
                <p className="text-light-pink text-2xl font-bold pb-3">Admin, <span className="text-primary-300">{username}</span> </p>
            <div className="pb-5">
                <p className="text-lg text-primary-200 font-light">{auth.dataUser.email}</p>
            </div>
            </div>
            <svg width={190} height={10}>
                <line x1="0" y1="1" x2="100%" y2="1" stroke="black" strokeWidth="2" /> 
            </svg>
            <div className="text-center text-2x1 flex flex-col">
                <Button onClick={handleVerifikasiPage} className={'text-light-pink text-lg pb-5'}>Halaman Verifikasi</Button>
                <Button onClick={handleUploadDesignPage} className={'text-primary-300 text-lg pb-3'}>Halaman Upload Design</Button>
                <Button onClick={handleTemplateTablePage} className={'text-primary-300 text-lg pb-3'}>Halaman Template Table</Button>
            </div>
            <div className="absolute bottom-0 mb-7">
                <Button type={'button'} onClick={handleLogout} isPrimary>Logout</Button>
            </div>
        </aside>
    )
}

export default Sidebar