import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import propTypes from 'prop-types'

const InputDate = (props)=>{

  return (
      <DatePicker
        selected= {props.selected}
        onChange={props.onChange}
        dateFormat='dd/MM/yyyy'
        dateFormatCalendar="dd/MM/yyyy"
        className={props.className}
        showYearDropdown
        scrollableYearDropdown
      />
    );
}

export default InputDate

InputDate.propTypes ={
    selected: propTypes.instanceOf(Date),
    onChange : propTypes.func
}