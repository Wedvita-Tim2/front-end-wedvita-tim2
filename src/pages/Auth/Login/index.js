import React, { useState } from 'react';
import Button from '../../../elements/Buttons';
import { InputText } from '../../../elements/Forms';
import AuthImage from '../AuthImage';
import { useRecoilState } from 'recoil';
import { authState } from '../../../recoils/AuthState';
const Login = () =>{
    const [text, setText] = useState({username : '', password: ''})
    const [isInputValid, setInputValid] = useState({username: true, password: true});
    const [isLoginSucces, setLoginSucces] = useState(true);
    const [auth, setAuth] = useRecoilState(authState)
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
                        window.location.href = "/";
                    }
                } else {
                console.error('Login gagal');
                }
            } catch (error) {
                console.error('Terjadi kesalahan:', error);
            }
        }
    }
    
    return(
        <div className='absolute inset-0 -z-10 bg-gradient-to-tr from-[#62DDEF6B] from-15% via-[#FF8CED9A] via-35% to-[#3C64F0B2] to-75%' style={{minHeight: '100vh', top: '0', left: '0', overflowY: 'auto', overflowX: 'hidden', minWidth: '100vh'}}>
            <div className='grid mt-12 lg:grid-cols-2 md:grid-cols-2 sm-grid-cols-1'>
                <div className='flex justify-center ml-12 md:mt-8 md:ml-32 md:mr-2'>
                    <AuthImage
                        className="w-auto"
                    />
                </div>
                <div className='flex justify-center mt-0 md:mt-24'>
                    <div className='mr-0 mt-0'>
                        <h1 className='text-3xl text-white font-bold text-center'>Halaman Login</h1>
                        {!isLoginSucces && <div className='text-red-500 font-md block mt-2 text-center'>Username atau Password Salah</div>}
                        <InputText 
                        element={'input'} 
                        type={ 'text' } 
                        value={text.username} 
                        onChange={handleTextChanged} 
                        className='block mt-6 w-96 text-lg' 
                        name={'username'}
                        placeholder={'Username'} isRequired/>
                        {!isInputValid.username && <div className='text-red-500 font-md block'>*This fill is required</div>}

                        <InputText 
                        element={'input'} 
                        type={ 'password' } 
                        value={text.password} 
                        onChange={handleTextChanged} 
                        className='block mt-6 w-96 text-lg' 
                        name={'password'}
                        placeholder={'Password'} isRequired/>
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