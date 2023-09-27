import React, { useEffect, useState } from 'react';
import Button from '../../../elements/Buttons';
import { InputText } from '../../../elements/Forms';
import AuthImage from '../AuthImage';
import { useRecoilState } from 'recoil';
import { authState } from '../../../recoils/AuthState';
import { useNavigate } from 'react-router-dom';
import '../Auth.css'

const Login = () =>{

    const [text, setText] = useState({username : '', password: ''})
    const [isInputValid, setInputValid] = useState({username: true, password: true})
    const [isLoginSucces, setLoginSucces] = useState(true)
    const [auth, setAuth] = useRecoilState(authState)
    const [isVisible, setVisible] = useState(false)

    const navigate = useNavigate()
    useEffect(() => {
        if (auth.isAuthenticated) {
          navigate('/');
        } else {
          navigate('/login');
        }
      }, []);
    

    const handleTextChanged = (e) =>{
        const {name, value} = e.target
        setLoginSucces(true)
        setText({
            ...text,
            [name]: value,
        })

        setInputValid({
            ...isInputValid,
            [name]: value !== '',
        });

    }

    const handleSignInClick = async () =>{
        const isValidation = Object.values(isInputValid).every((isValid) => isValid);

        setInputValid({
            username: text.username !== '',
            password: text.password !== '',
        });
        if (isValidation) {
            try {
                const response = await fetch('http://localhost:8000/api/login', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(text),
                });
          
                if (response.ok) {
                    const data = await response.json();
                    if(data.response !== 200){
                        console.error(data.message)
                        setLoginSucces(false)
                    } 
                    else{
                        const updatedAuth = { isAuthenticated: true, dataUser: data.dataUser };
                        setAuth(updatedAuth);
                        
                        localStorage.setItem('auth', JSON.stringify(updatedAuth));
                        navigate('/')
                    }
                } else {
                console.error('Login gagal');
                }
            } catch (error) {
                console.error('Terjadi kesalahan:', error);
            }
        }
    }

    const eyePassword = () =>{
        if(!isVisible){
            return(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>)
        } else{
            return(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        }
        
      
    }
    
    return(
        <div className='bg-auth px-3' style={{ top: '0', left: '0', overflowY: 'auto', overflowX: 'hidden'}}>
            <div className=' mt-12 lg:grid-cols-2 md:grid-cols-2 md:grid'>
                <div className='flex justify-center md:mt-8 md:ml-32 md:mr-2'>
                    <AuthImage
                        className="w-auto"
                    />
                </div>
                <div className='flex justify-center mt-0 md:mt-24'>
                    <div className='mr-0 mt-0'>
                        <h1 className=' text-2xl md:text-3xl text-white font-bold text-center'>Halaman Login</h1>
                        {!isLoginSucces && <div className='text-red-500 font-md block mt-2 text-center'>Username atau Password Salah</div>}
                        <InputText 
                        element={'input'} 
                        type={ 'text' } 
                        value={text.username} 
                        onChange={handleTextChanged} 
                        className='block mt-6 w-80 md:w-96 text-lg rounded-md' 
                        name={'username'}
                        placeholder={'Username'} isRequired/>
                        {!isInputValid.username && <div className='text-red-500 font-md block'>*This fill is required</div>}

                        <div className='flex mt-6'>
                            <InputText 
                            element={'input'} 
                            type={ !isVisible?'password':'text' } 
                            value={text.password} 
                            onChange={handleTextChanged} 
                            className='w-[280px] md:w-[342px] text-lg rounded-l-md'
                            isBasic 
                            name={'password'}
                            placeholder={'Password'} isRequired/>
                            <Button type={'button'} 
                            className={'py-1 bg-white h-12 shadow-md border-l-slate-200 rounded-r-md px-2'}
                            onClick={()=> setVisible(!isVisible)}
                            >
                                {eyePassword()}
                            </Button>
                        </div>
                        {!isInputValid.password && <div className='text-red-500 font-md block'>*This fill is required</div>}
                        
                        <Button type={'link'} href={'/forgotPassword'} className='block text-end text-md mt-6 text-primary-100 hover:text-primary-200 hover:underline'>Forgot your password ?</Button>
                        
                        <div className="flex justify-center mt-10">
                            <Button type={'button'} onClick={handleSignInClick} isPrimary className="block">
                                Sign In
                            </Button>
                        </div>
                        <div className="flex justify-center mt-4 text-md, text-primary-100">
                            <p className='text-md mr-2'>New Here ? </p> <Button type={'link'} href={'/register'} className='font-bold hover:text-primary-200 hover:underline'>Sign Up</Button>
                        </div>                    
                    </div>
                </div>
                
               
            </div>
        </div>
    )
}

export default Login