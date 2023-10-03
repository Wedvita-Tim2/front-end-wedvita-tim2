import { useRecoilState } from "recoil"
import { InputText } from "../../elements/Forms"
import { accountHolderNameEvent, accountNumberEvent, guestEvent} from "../../recoils/OrderData"

const AddOns= () =>{

    const [, setGuest] = useRecoilState(guestEvent)
    const [, setAccountNumber] = useRecoilState(accountNumberEvent)
    const [, setAccountHolderName] = useRecoilState(accountHolderNameEvent)
    return(
        <div className="py-4 flex flex-wrap justify-center md:flex-row md:justify-between md:mt-4">
            <div>
                <InputText placeholder={'Masukkan tamu spesial yang ingin anda undang (pisahkan dengan "," contoh Alfien, Daniar)'} type={'text'} 
                    className='border border-light-pink rounded-md w-72 md:w-[480px]'
                    onChange={(e)=>setGuest(e.target.value)}
                />
            </div>
            <div className="flex flex-wrap md:flex-col justify-center md:mx-auto">
                <p className="text-normal md:text-left text-primary-300 font-semibold text-center md:text-2xl md:mb-2 w-64">Form Rekening Tip</p>
                <InputText element={'input'} 
                    type={'text'} 
                    className={'rounded-md w-72 mt-3 md:w-[360px] lg:w-[512px] border border-light-pink md:mb-2 '} 
                    name={'account_holder'} 
                    placeholder={'Masukkan Nama Penerima'}
                    onChange={(e) => setAccountHolderName(e.target.value)}
                    />

                <InputText element={'input'} 
                    type={'number'} 
                    className={'rounded-md w-72 mt-3 md:w-[360px] lg:w-[512px] border border-light-pink md:mb-2'} 
                    name={'account_number'} 
                    placeholder={'Masukkan Nomer Rekening'}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    />
            </div>
        </div>
    )
}

export default AddOns