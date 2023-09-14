import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import propTypes from 'prop-types'

/*
Perlu mendeklarasikan useState pada component yang memanggil elemen ini
const [date, setDate] = useState(new Date());
<InputDate value={date} onChange = {(e)=>setDate(e)}
*/
const InputDate = (props)=>{

    return (
        <DatePicker
          selected={props.value}
          onChange={props.onChange}
          dateFormat='dd/MM/yyyy'
          dateFormatCalendar="dd/MM/yyyy"
          className="border border-blue-900 p-1 text-sm rounded-md"
          showYearDropdown
          scrollableYearDropdown
        />
      );
}

export default InputDate

InputDate.propTypes ={
    value: propTypes.any,
    onChange : propTypes.func
}