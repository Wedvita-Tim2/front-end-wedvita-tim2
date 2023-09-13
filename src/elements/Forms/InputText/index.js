import React, { useState } from "react";


const InputText = (props) =>{

    const className = [props.className]

    className.push("rounded-md")
    const [inputValue, setInputValue] = useState(props.value)

    const onChange = e =>{
        setInputValue(e.target.value)
    }

    
    const element = props.element ==='input'?(
        <input name={props.name} type={props.type} 
         placeholder={props.placeholder} value={inputValue} onChange={onChange}
         className={className.join(" ")} 
       />
    ):(
        <textarea name={props.name} rows= "4" value={inputValue} 
        onChange={onChange}
        className={className.join(" ")} 
        />
    )

    return(
        <div>
        <label htmlFor={props.id}> {props.label}</label> 
          {element}
        </div>
    )
}

export default InputText