import EventDate from "./EventDate"
import EventLocation from "./EventLocation"
import GroomBride from "./GroomBride"
import GroomBrideParent from "./GroomBrideParent"


const MainOrderForm = () =>{

    return(
        <div className="p-4 md:p-12">
            <p className="text-2xl md:text-left text-light-pink font-bold text-center mb-6 md:mb-8 md:text-4xl">Form Order Wedvita</p>
            <p className="text-lg md:text-left text-primary-300 font-bold text-center md:text-2xl ">Form Mempelai</p>
            <GroomBride/>
            <p className="text-lg md:text-left text-primary-300 font-bold text-center md:text-2xl ">Form Orang Tua Mempelai</p>
            <GroomBrideParent/>
            <p className="text-lg md:text-left text-primary-300 font-bold text-center md:text-2xl ">Form Pengisian Detail Acara</p>
            <EventDate/>
            <EventLocation/>
        </div>
    )
}

export default MainOrderForm