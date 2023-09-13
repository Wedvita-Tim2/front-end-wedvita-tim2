import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Button(props){
    const className = [props.className];
    className.push("rounded-md")
    if(props.isPrimary) className.push("bg-yellow-300", "text-md" ,
                                        "p-1.5", "text-black", "shadow-sm", 
                                        "hover:bg-yellow-500")
    if(props.isLarge) className.push("bg-yellow-300", "text-xl",
                                    "py-2.5", "px-4", "text-black", "shadow-sm", 
                                    "hover:bg-yellow-500")
    if(props.isSmall) className.push("bg-yellow-300", "text-sm",
                                    "p-1", "text-black", "shadow-sm", 
                                    "hover:bg-yellow-500")
    if(props.isBlock) className.push("btn-block")
    if(props.hasShadow) className.push("btn-shadow")
    
    const onClick=()=>{
      if(props.onClick) props.onClick()
    }

    if(props.type==="link"){
        if(props.isExternal){
            return (
                <a 
                href={props.href} 
                className={className.join(" ")} 
                style={props.style} 
                target={props.target==="_blank"?"_blank":undefined} 
                rel={props.target==="_blank"?"noopener noreferrer":undefined}>{props.children}</a>
            )
        }else{
            return (
                <Link to={props.href} 
                className={className.join(" ")} 
                style={props.style} onClick={onClick}>
                {props.children}
                </Link>
            )
        }
      }

    return (
        <button
        className={className.join(" ")} 
        onClick={onClick}
        >
          {props.children}
        </button>
      )
}


Button.propTypes ={
    type: propTypes.oneOf(["button", "link"]),
    onClick: propTypes.func,
    target: propTypes.string,
    href: propTypes.string,
    className: propTypes.string,
    isDisabled: propTypes.bool,
    isPrimary: propTypes.bool,
    isExternal: propTypes.bool,
    isLoading: propTypes.bool,
    isSmall: propTypes.bool,
    isLarge: propTypes.bool,
    isBlock: propTypes.bool,
    hasShadow: propTypes.bool,
}
