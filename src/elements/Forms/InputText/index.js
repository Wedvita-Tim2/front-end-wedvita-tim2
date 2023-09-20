import React from "react";
import propTypes from 'prop-types'

const InputText = (props) =>{

    const className = [props.className]

    className.push("rounded-md", "py-2.5", "px-5", "shadow-md")

    
    const additionalProps = props.isRequired ? { required: true } : {};
    const element = props.element ==='input'?(
        <input name={props.name} type={props.type} 
         placeholder={props.placeholder} value={props.text} onChange={props.onChange}
         className={className.join(" ") } {...additionalProps}
       />
    ):(
        <textarea name={props.name} rows= "4" value={props.text} 
        onChange={props.onChange}
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
    value: propTypes.string,
    name: propTypes.string,
    element: propTypes.oneOf(["input", "textarea"]),
    placeholder: propTypes.string,
    type: propTypes.string,
    onChange: propTypes.func,
    isRequired: propTypes.bool
}