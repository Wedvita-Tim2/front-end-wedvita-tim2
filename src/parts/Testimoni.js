import { useRecoilState, useRecoilValue } from 'recoil';
import Star from '../elements/Star';
import './css/App.css'
import { RateTemplate } from '../recoils/RateTemplate';
import { useEffect } from 'react';
import Button from '../elements/Buttons';
import { apiBackend } from '../recoils/Api';
import axios from 'axios';

const Testimoni = () =>{

    const [testimoni, setTestimoni] = useRecoilState(RateTemplate)
    const apiAddress = useRecoilValue(apiBackend)

    const rateData = async () => {
        try {
          const response = await axios.get(apiAddress + 'api/rating', {
            headers: {
              'ngrok-skip-browser-warning': 'true',
              // Atau gunakan header sesuai kebutuhan Anda
              // 'Custom-Header': 'value',
            },
          });
      
          const value = response.data;
          setTestimoni(value);
        } catch (err) {
          console.error(err);
        }
      };

    useEffect(()=>{
        rateData()
    }, [])

    const cardTestimoni = () => {
        if (!testimoni.DataRate || testimoni.DataRate.length === 0) {
            return Array.from({ length: 3 }, (_, id) =>(
                <div className='bg-slate-200 shadow-md pt-4 px-4 rounded-br-3xl mx-4 mt-4 w-72 h-44 lg:w-115 animate-pulse ' key={id}>
                    
                </div>
            ))
        }else{
            
            return Array.from({ length: 3 }, (_, id) => (
                <div className='grid align-middle bg-white shadow-md pt-4 px-2 md:px-4 rounded-br-3xl mx-4 mt-4 w-72 h-44 md:w-80 md:h-52 lg:h-48 lg:w-115 ' key={id}>
                    <p className='text-primary-200 ml-1 mt-2'>{testimoni.DataRate[id].comment}</p>
                    <Star rating={testimoni.DataRate[id].rating * 5}/>
                    <p className='text-primary-200 ml-1 text-xl font-semibold'>{testimoni.DataRate[id].user.username}</p>
                    <p className='text-slate-500 font-light ml-1 mt-2 text-sm mb-3 '>Tentang template "
                    <Button type={'link'} href={`/template/${testimoni.DataRate[id].template.id}`} className={'mb-3 hover:underline'}>
                        {testimoni.DataRate[id].template.template_name}
                    </Button>
                    "
                    </p>
                </div>
            ));
        }
    }
    


    return(
    <div className="grid bg-gradient py-10 px-1 justify-items-center md:px-4 mt-8 md:grid-cols-2">
        <div className='order-1 md:order-2 md:items-center md:mt-44'>
            <div className='md:flex'>
                <p className="text-primary-300 text-4xl font-bold text-center md:text-5xl">Testimoni</p>
            </div>
            <p className='text-primary-200 text-xl w-64 md:w-115 text-center mt-4 md:text-xl md:text-start'>Cerita kebahagiaan pelanggan menggunakan layanan Wedding Invitation Digital </p>
        </div>
        <div className='flex mx-auto flex-col order-2 md:order-1'>
            {cardTestimoni()}
        </div>
    </div>
  )
}

export default Testimoni;