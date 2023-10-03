import React from "react";
import propTypes from 'prop-types'

const InputText = (props) =>{

    const className = [props.className]

    className.push("py-2.5", "px-5", "shadow-md")

    
    const additionalProps = props.isRequired ? { required: true } : {};
    const element = props.element ==='input'?(
        <input name={props.name} type={props.type} 
         placeholder={props.placeholder} value={props.value} onChange={props.onChange}
         className={className.join(" ") } {...additionalProps}
       />
    ):(
        <textarea name={props.name} rows= "6" value={props.value} 
        onChange={props.onChange} placeholder={props.placeholder}
        className={className.join(" ")} {...additionalProps}
        />
    )

    return(
        <>
            {element}
        </>
    )
}

export default InputText

InputText.propTypes={
    name: propTypes.string,
    element: propTypes.oneOf(["input", "textarea"]),
    placeholder: propTypes.string,
    type: propTypes.string,
    onChange: propTypes.func,
    isRequired: propTypes.bool
}