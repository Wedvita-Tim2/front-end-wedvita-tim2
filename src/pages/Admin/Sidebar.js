import { useRecoilState } from "recoil"
import { authState } from "../../recoils/AuthState"
import Button from "../../elements/Buttons";
import { useNavigate } from "react-router-dom";

const Sidebar = () =>{

    const [auth, setAuth] = useRecoilState(authState)
    const navigate = useNavigate()

    const username = auth.dataUser.username.slice(0,1).toUpperCase() + auth.dataUser.username.slice(1)

    const handleLogout = () => {
        localStorage.removeItem("auth");

        setAuth('')
        navigate('/');
    };

    return(
        <aside className="bg-slate-300 h-full w-52 px-4 py-4 shadow-lg flex flex-col">
            <div className="text-center text-2xl mt-4 ">
                <p className="text-light-pink text-2xl font-bold">Admin, <span className="text-primary-300">{username}</span> </p>
                <p className="text-lg text-primary-200 font-light">{auth.dataUser.email}</p>
            </div>
            <div className="absolute bottom-0 mb-7">
                <Button type={'button'} onClick={handleLogout} isPrimary>Logout</Button>
            </div>
        </aside>
    )
}

export default Sidebar