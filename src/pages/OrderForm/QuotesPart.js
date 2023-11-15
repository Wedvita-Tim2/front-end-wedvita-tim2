import { useRecoilState } from "recoil"
import { InputText } from "../../elements/Forms"
import { quotesEvent } from "../../recoils/OrderData"

const QuotesPart = () =>{

    const [quotes, setQuotes] = useRecoilState(quotesEvent)

    return(
        <div className="flex justify-center md:absolute md:left-6 md:ml-6 my-4">
            <InputText placeholder={'Masukkan kata-kata indah untuk mewarnai hari bahagia anda'} type={'text'} 
                className='border border-light-pink rounded-md w-72 md:w-[360px]'
                onChange={(e)=> setQuotes(e.target.value)}
                value = {quotes}
                maxLength={200}
            />
        </div>
    )
}

export default QuotesPart