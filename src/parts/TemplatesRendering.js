import { useRecoilState } from "recoil"
import { TemplatesRecoil } from "../recoils/TemplatesRecoil"
import { useEffect } from "react"
import img1 from '../assets/img/img-1.png'
import img2 from '../assets/img/img-4.png'
import img3 from '../assets/img/img-3.png'
import Button from "../elements/Buttons"

const TemplatesRendering = () =>{

    const [templates, setTemplates] = useRecoilState(TemplatesRecoil)
    const images = [img1, img2, img3]

    const getTemplates = async ()=>{
        try{
            const templateDatas = await fetch("http://localhost:8000/api/main")
            const value = await templateDatas.json()
            setTemplates(value.data)
        }catch(err){
            console.log(err)
        }
    } 

    useEffect(()=>{
        getTemplates()
    }, [])


    const templateCardSkeleton = Array.from({ length: 3 }, (_, id) =>(
        <div className='bg-slate-300 mx-auto shadow-md pt-4 px-4 rounded-lg mt-5 w-36 h-52 md:w-72 md:h-[506px] animate-pulse ' key={id}>
            
        </div>
    ))

    const templateCard = templates.map((template, id) => (
        <div className="bg-slate-50 rounded-md shadow-lg mx-auto mt-5 hover:scale-110 delay-100 duration-200 ease-in-out" key={id}>
          <Button type="link" href={`/template/${template.id}`}>
            <img src={images[id]} alt={`Template ${template.id}`} className="w-36 h-52 md:w-72 md:h-[426px] rounded-t-lg" />
          </Button>
          <div className="w-36 h-14 px-3 pt-2 md:w-72 md:h-20 rounded-b-lg">
            <p className="text-bs font-light md:text-lg md:font-normal text-primary-200">{template.template_name}</p>
          </div>
        </div>
      ));

    return(
        <div>
            <div className="text-center">
                <p className="text-2xl md:text-5xl font-bold text-primary-400">Template <span className="text-light-pink">Wedvita</span></p>
                <p className="text-bs md:text-xl mt-2 text-primary-400">Pilihan template sesuai keinginan anda dan pasangan</p>  
            </div>
            <div className="flex flex-wrap mt-7 px-3 md:px-12">
                {!templates || templates.length === 0?templateCardSkeleton:templateCard}
            </div>
        </div>
    )
}

export default TemplatesRendering