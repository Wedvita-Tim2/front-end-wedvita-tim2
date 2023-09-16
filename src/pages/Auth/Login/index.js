import React, { useState } from 'react';
import Button from '../../../elements/Buttons';
import { InputText } from '../../../elements/Forms';
const Login = () =>{
    const [text, setText] = useState({username : '', password: ''})
    const handleTextChanged = (e) =>{
        const {name, value} = e.target

        setText({
            ...text,
            [name]: value,
        })
    }
    return(
        <>
            <h1>Halaman Login</h1>
            <InputText 
            element={'input'} 
            type={ 'text' } 
            value={text.username} 
            onChange={handleTextChanged} 
            className='block' 
            name={'username'}
            placeholder={'Username'}/>


            <InputText 
            element={'input'} 
            type={ 'password' } 
            value={text.password} 
            onChange={handleTextChanged} 
            className='block' 
            name={'password'}
            placeholder={'Password'}/>
            <Button type={'button'} onClick={() => console.log(text)} isPrimary>Submit</Button>
        </>
        
    )
}

export default Login