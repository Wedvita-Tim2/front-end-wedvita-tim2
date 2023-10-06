import { useRecoilState } from "recoil"
import { TemplatesRecoil } from "../recoils/TemplatesRecoil"
import { useEffect } from "react"
import Button from "../elements/Buttons"
import { useNavigate } from "react-router-dom"
import { selectedTemplate, selectedTemplateName } from "../recoils/SelectedTemplate"

const TemplatesRendering = () =>{

    const [templates, setTemplates] = useRecoilState(TemplatesRecoil)
    const [, setSelectTemplate] = useRecoilState(selectedTemplate)
    const [, setSelectTemplateName] = useRecoilState(selectedTemplateName)
    const navigate = useNavigate()

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

    const handleSelectTemplate = (id, nama, type)=>{
        setSelectTemplate(id)
        setSelectTemplateName(nama)
        type === 'preview'?navigate(`/template/preview/template-wedvita/${id}`):navigate(`/order`)
    }

    const templateCardSkeleton = Array.from({ length: 3 }, (_, id) =>(
        <div className='bg-slate-300 mx-auto shadow-md pt-4 px-4 rounded-lg mt-5 w-36 h-52 md:w-72 md:h-[506px] animate-pulse ' key={id}>
            
        </div>
    ))

    const templateCard = templates.map((template, id) => (
        <div className="relative group overflow-hidden bg-slate-50 rounded-xl h-60 z-20 w-36 md:w-72 md:h-[480px] shadow-lg mx-auto mt-5 hover:scale-110 delay-100 duration-200 ease-in-out" key={id}>
          <Button type="button" onClick={()=>handleSelectTemplate(template.id, template.template_name, 'preview')}>
            <img src={`http://localhost:8000${template.thumbnail}`} alt={`Template ${template.id}`} className="z-10"/>
          </Button>
          <div className="absolute bottom-0 inset-x-0 h-4 md:h-8 group-hover:h-16 px-3 py-4 text-center bg-black opacity-25 blur-xl backdrop-opacity-40"/>
          <div className="absolute bottom-0 inset-x-0 px-3 py-2 md:py-4 text-center group-hover:backdrop-blur-sm" style={{ backdropFilter: 'blur(2px)' }}>
            <p className="text-xs font-semibold md:text-lg md:font-normal text-white">{template.template_name}</p>
            <Button type="button" onClick={() => handleSelectTemplate(template.id, template.template_name, 'order')} className="hidden mx-auto text-white bg-light-pink/70 mt-1 rounded-xl py-1 w-3/4 group-hover:block">
                Order Now
            </Button>
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