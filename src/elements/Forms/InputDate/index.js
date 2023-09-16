import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import propTypes from 'prop-types'
import { useRecoilState } from "recoil";
import { dateState } from "../../../recoils/FormRecoil";

const InputDate = ()=>{
  const [date, setDate] = useRecoilState(dateState)

  const handleDateChanged = (selectedDate) =>{
    setDate(selectedDate)
  }

  return (
      <DatePicker
        selected= {date}
        onChange={handleDateChanged}
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