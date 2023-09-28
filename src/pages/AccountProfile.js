import { useNavigate } from "react-router-dom";
import Button from "../elements/Buttons"
import { useRecoilState } from "recoil";
import { authState } from "../recoils/AuthState";

const AccountProfile = ()=>{

    const navigate = useNavigate()
    const [auth, setAuth] = useRecoilState(authState)

    const handleLogout = () => {
        localStorage.removeItem("auth");

        setAuth('')
        navigate('/');
      };
    return(
    <div>
        <p>{auth.dataUser.username}</p>
        <p>{auth.dataUser.email}</p>
        <p>{auth.dataUser.phone_number}</p>
        <Button type={'button'} onClick={handleLogout} isGradient>Logout</Button>
    </div>
    
    )
}

export default AccountProfile