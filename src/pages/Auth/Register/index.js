import React, { useState, useEffect } from 'react';
import Button from '../../../elements/Buttons';
import { InputText } from '../../../elements/Forms';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import AuthImage from '../AuthImage';
const Register = () =>{
    const [text, setText] = useState({username : '', password: '',phone:'', email:'', password_confirmation:''})
    const [phone, setPhone] = useState('')
    const [isInputValid, setInputValid] = useState({username : true, password: true, phone:true, email:true, password_confirmation:true});
    const [isPasswordValid, setIsPasswordValid] = useState(true)

    useEffect(() => {
        setText((prevText) => ({
            ...prevText,
            phone: phone,
        }));
    }, [phone]);
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
            phone: text.phone !=='',
            email: text.email !=='',
            password_confirmation: text.password_confirmation !=='',
        });

        setIsPasswordValid(text.password === text.password_confirmation)
        console.log(text.password === text.password_confirmation)
        if (isValidation && text.password === text.password_confirmation) {
            console.log(text); 
        }
    }
    
    return(
        <div className='bg-gradient-to-tr from-[#62DDEF6B] from-15% via-[#FF8CED9A] via-35% to-[#3C64F0B2] to-75%' style={{ minHeight: '100vh' }}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
                <div className='flex justify-center'>
                    <AuthImage />
                </div>
                <div className='flex justify-center'>
                    <div className='lg:w-96'>
                        <h1 className='text-3xl text-white font-bold text-center'>Halaman Register</h1>
                        

                        <InputText 
                        element={'input'} 
                        type={ 'text' } 
                        value={text.username} 
                        onChange={handleTextChanged} 
                        className='block mt-6 lg:w-96 text-lg' 
                        name={'username'}
                        placeholder={'Username'} isRequired/>
                        {!isInputValid.username && <div className='text-red-500 font-md block'>*This fill is required</div>}
                        
                        <div className='w-full lg:w-96'></div> 
                        <PhoneInput
                        defaultCountry="id"
                        value={text.phone}
                        name={'phone'}
                        className='block mt-6 lg:w-96'
                        placeholder={'Phone'}
                        inputStyle={{paddingTop : 23, paddingBottom:23, fontSize:18., width:200}}
                        countrySelectorStyleProps={{
                            buttonStyle : {
                                height:48
                                // Tambahkan properti CSS lain yang Anda inginkan di sini
                            },
                        }}
                        onChange={(phone) =>{setPhone(phone)}}/>

                        
                        {!isInputValid.phone && <div className='text-red-500 font-md block'>*This fill is required</div>}
                        

                        <InputText 
                        element={'input'} 
                        type={ 'email' } 
                        value={text.email} 
                        onChange={handleTextChanged} 
                        className='block mt-6 lg:w-96 text-lg' 
                        name={'email'}
                        placeholder={'Email'} isRequired/>
                        {!isInputValid.email && <div className='text-red-500 font-md block'>*This fill is required</div>}

                        <InputText 
                        element={'input'} 
                        type={ 'password' } 
                        value={text.password} 
                        onChange={handleTextChanged} 
                        className='block mt-6 lg:w-96 text-lg' 
                        name={'password'}
                        placeholder={'Password'} isRequired/>
                        {!isInputValid.password && <div className='text-red-500 font-md block'>*This fill is required</div>}

                        <InputText 
                        element={'input'} 
                        type={ 'password' } 
                        value={text.password_confirmation} 
                        onChange={handleTextChanged} 
                        className='block mt-6 lg:w-96 text-lg' 
                        name={'password_confirmation'}
                        placeholder={'Konfirmasi Password'} isRequired/>
                        {!isInputValid.password_confirmation && <div className='text-red-500 font-md block'>*This fill is required</div>}
                        {!isPasswordValid && <div className='text-red-500 font-md block'>*Password and password confirmation don't match</div>}
                        
                        <div className="flex justify-center mt-10">
                            <Button type={'button'} onClick={handleSignInClick} isPrimary className="block">
                                Sign Up
                            </Button>
                        </div>
                        <div className="flex justify-center mt-4 text-md, text-primary-100">
                            <p className='text-md mr-2'>Already have account ? </p> <Button type={'link'} href={'/login'} className='font-bold hover:text-primary-200 hover:underline'>Sign In Here</Button>
                            </div>
                        </div>                    
                </div>  
            </div>
                 
        </div>
    )
}

export default Register