import { useState } from "react";
import Button from "../elements/Buttons";
import { InputText } from "../elements/Forms";
import { useRecoilValue } from 'recoil';
import { apiBackend } from '../recoils/Api';

const FormWish = (props) => {
    const [text, setText] = useState({guest_name : '', message: ''});
    const apiAddress = useRecoilValue(apiBackend)

    const handleTextChanged = (e) =>{
        const {name, value} = e.target
        setText({
            ...text,
            [name]: value,
        })
    }

    const SubmitHandling = async() => {
        try {
            const response = await fetch(apiAddress+'api/AddWish/'+props.data, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(text),
            });
          
            if (response.ok) {
                const data = await response.json();
                if(data.response !== 200){
                    console.error(data.errors)
                }else {
                    props.reloadData();
                    setText({
                        guest_name: '',
                        message: '',
                    });
                  }
            } else {
                console.error('Wedding Wish gagal');
                }
        } catch (error) {
            console.error('Terjadi kesalahan:', error);
        }

    }
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="max-w-lg rounded border border-gray-200 overflow-hidden shadow-lg p-10 lg:max-w-[700px]">
                <div className="mx-3 grid md:grid-cols-1 justify-items-center">
                    <InputText
                        element={"input"}
                        type={"text"}
                        className={
                        "w-100 mt-4 md:w-[360px] lg:w-[512px] placeholder-gray-600 transition duration-500 border-transparent rounded-lg bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                        }
                        name={"guest_name"}
                        placeholder={"Nama tamu undangan"}
                        value={text.guest_name}
                        onChange={handleTextChanged}
                    />
                    <InputText
                        type={"text"}
                        className={
                        "w-100 mt-4 md:w-[360px] lg:w-[512px] placeholder-gray-600 transition duration-500 border-transparent rounded-lg bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                        }
                        name={"message"}
                        placeholder={"Berikan ucapan kepada mempelai"}
                        value={text.message}
                        onChange={handleTextChanged}
                    />
                    <Button type={'button'} isBlack onClick={SubmitHandling}>
                        Kirim
                    </Button>
                </div>
            </div>
        </div>   
    )
}

export default FormWish
