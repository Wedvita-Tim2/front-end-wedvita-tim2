import React, { useState } from 'react';
import Button from '../../../elements/Buttons';
import { InputText } from '../../../elements/Forms';
import AuthImage from '../AuthImage';
const Login = () =>{
    const [text, setText] = useState({username : '', password: ''})
    const [isInputValid, setInputValid] = useState({username: true, password: true});
    const handleTextChanged = (e) =>{
        const {name, value} = e.target

        setText({
            ...text,
            [name]: value,
        })

        setInputValid({
            ...isInputValid,
            [name]: value !== '',
        });

    }

    const handleSignInClick = () =>{
        const isValidation = Object.values(isInputValid).every((isValid) => isValid);

        setInputValid({
            username: text.username !== '',
            password: text.password !== '',
        });
        if (isValidation) {
            console.log(text); 
        }
    }
    
    return(
        <div className='bg-gradient-to-tr from-[#62DDEF6B] from-15% via-[#FF8CED9A] via-35% to-[#3C64F0B2] to-75%' style={{minHeight: '100vh', top: '0', left: '0', overflowY: 'auto', overflowX: 'hidden'}}>
            <div className='ml-8 mt-8 top-0 left-0 md:my-10 md:ml-14'>
                <Button type={'link'} href={'/'}>
                    <img src="/logo.svg" alt="Logo" />
                </Button>
            </div>
            
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm-grid-cols-1'>
                <div className='flex justify-center ml-12 md:mt-8 md:ml-32 md:mr-2'>
                    <AuthImage
                        className="w-auto"
                    />
                </div>
                <div className='flex justify-center mt-0 md:mt-24'>
                    <div className='mr-0 mt-0'>
                        <h1 className='text-3xl text-white font-bold text-center'>Halaman Login</h1>
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