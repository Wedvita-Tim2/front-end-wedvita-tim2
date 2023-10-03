import { useRecoilState } from "recoil"
import { InputText } from "../../elements/Forms"
import { brideFatherName, brideMotherName, groomFatherName, groomMotherName } from "../../recoils/OrderData"

const GroomBrideParent = () =>{

    const [, setMotherBride] = useRecoilState(brideMotherName)
    const [, setFatherBride] = useRecoilState(brideFatherName)
    const [, setMotherGroom] = useRecoilState(groomMotherName)
    const [, setFatherGroom] = useRecoilState(groomFatherName)

    return(
        <div className="grid md:grid-cols-2 justify-items-center md:justify-items-stretch md:gap-1 mb-4">
            <InputText element={'input'} 
                type={'text'} 
                className={'rounded-md w-72 mt-3 md:w-[360px] lg:w-[512px] border border-light-pink'} 
                name={'groom_father_name'} 
                placeholder={'Nama Ayah pengantin pria'}
                onChange={(e) => setFatherGroom(e.target.value)}
                />

            <InputText element={'input'} 
                type={'text'} 
                className={'rounded-md w-72 mt-3 md:w-[360px] lg:w-[512px] border border-light-pink'} 
                name={'bride_father_name'} 
                placeholder={'Nama Ayah pengantin wanita'}
                onChange={(e) => setFatherBride(e.target.value)}
                />
            
            <InputText element={'input'} 
                type={'text'} 
                className={'rounded-md w-72 mt-3 md:w-[360px] lg:w-[512px] border border-light-pink'} 
                name={'groom_mother_name'} 
                placeholder={'Nama Ibu pengantin pria'}
                onChange={(e) => setMotherGroom(e.target.value)}
                />

            <InputText element={'input'} 
                type={'text'} 
                className={'rounded-md w-72 mt-3 md:w-[360px] lg:w-[512px] border border-light-pink'} 
                name={'bride_mother_name'} 
                placeholder={'Nama Ibu pengantin wanita'}
                onChange={(e) => setMotherBride(e.target.value)}
                />
        </div>
    )
}

export default GroomBrideParent