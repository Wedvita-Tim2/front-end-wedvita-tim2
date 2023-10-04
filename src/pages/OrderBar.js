import Button from "../elements/Buttons";

const OrderBar = () => {
    const namaTemplate = "Template Wedvita 1"
    const hargaTemplate = "Rp.79.000"
    return (
        <div className="flex justify-center relative z-[99]">
            <div className="fixed bottom-8 rounded-lg bg-slate-100 shadow-xl w-1/2 p-4">
                <ul className="flex sm:space-x-8 items-center">
                    <li className="sm:text-xl">{namaTemplate}</li>
                    <li className="sm:text-xl">{hargaTemplate}</li>
                    <li className="sm:pl-20"><Button isPrimary type={'link'} href={''}>Order Sekarang</Button></li>
                </ul>
            </div>
        </div>
    )
}

export default OrderBar