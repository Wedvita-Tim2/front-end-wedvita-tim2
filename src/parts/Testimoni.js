import { useRecoilState } from 'recoil';
import Star from '../elements/Star';
import './css/App.css'
import { RateTemplate } from '../recoils/RateTemplate';
import { useEffect } from 'react';
import Button from '../elements/Buttons';

const Testimoni = () =>{

    const [testimoni, setTestimoni] = useRecoilState(RateTemplate)

    const rateData = async() =>{
        try{
            const datas = await fetch("http://localhost:8000/api/rating")
            const value = await datas.json()
            setTestimoni(value)
        }catch(err){
            console.error(err)
        }
    }

    useEffect(()=>{
        rateData()
    }, [])

    const cardTestimoni = () => {
        if (!testimoni.DataRate || testimoni.DataRate.length === 0) {
            return <div>Loading...</div>;
        }else{

            return Array.from({ length: 3 }, (_, id) => (
                <div className='bg-white shadow-md pt-4 px-4 rounded-br-3xl mx-4 mt-4 w-96 h-44 lg:w-115 ' key={id}>
                    <p className='text-primary-200 ml-1 mt-2'>{testimoni.DataRate[id].comment}</p>
                    <Star rating={testimoni.DataRate[id].rating * 5}/>
                    <p className='text-primary-200 ml-1 text-xl font-semibold'>{testimoni.DataRate[id].user.username}</p>
                    <p className='text-slate-500 font-light ml-1 mt-2 text-sm mb-3 '>Tentang template "
                    <Button type={'link'} href={`/${testimoni.DataRate[id].template.id}`} className={'mb-3 hover:underline'}>
                        {testimoni.DataRate[id].template.template_name}
                    </Button>
                    "
                    </p>
                </div>
            ));
        }
    }
    


    return(
    <div className="grid bg-gradient py-10 px-3 justify-items-center md:px-4 mt-8 md:grid-cols-2">
        <div className='order-1 md:order-2 md:items-center md:mt-44'>
            <div className='md:flex'>
                <p className="text-primary-300 text-4xl font-bold text-center md:text-5xl">Testimoni</p>
            </div>
            <p className='text-primary-200 text-xl w-115 text-center mt-4 md:text-xl md:text-start'>Cerita kebahagiaan pelanggan menggunakan layanan Wedding Invitation Digital </p>
        </div>
        <div className='flex mx-auto flex-col order-2 md:order-1'>
            {cardTestimoni()}
        </div>
    </div>
  )
}

export default Testimoni;