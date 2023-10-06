import { useRecoilValue } from "recoil";
import Button from "../elements/Buttons";
import { selectedTemplateName } from "../recoils/SelectedTemplate";

const OrderBar = () => {
    const namaTemplate = useRecoilValue(selectedTemplateName)
    const hargaTemplate = "Rp.79.000"
    return (
        <div className="flex justify-center w-full relative z-[99]">
            <div className="fixed bottom-8 rounded-lg bg-slate-100 w-3/4  shadow-xl md:w-1/2 p-4">
                <ul className="flex sm:space-x-6 items-center justify-around">
                    <li className="sm:text-xl">{namaTemplate}</li>
                    <li className="sm:text-xl">{hargaTemplate}</li>
                    <li className="sm:pl-20"><Button className={'bg-primary-200 text-white px-2 py-1 rounded-md hover:bg-primary-100'} type={'link'} href={'/order'}>Order Sekarang</Button></li>
                    <li className="sm:pl-20"><Button className={'bg-primary-200 text-white px-2 py-1 rounded-md hover:bg-primary-100'} type={'link'} href={'/template'}>Kembali</Button></li>
                </ul>
            </div>
        </div>
    )
}

export default OrderBar