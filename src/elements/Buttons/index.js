import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  const className = [props.className];
  className.push("text-center");
  if (props.isPrimary)
    className.push(
      "bg-primary-100",
      "text-md",
      "rounded-md",
      "shadow-md",
      "text-white",
      "py-2.5 px-3",
      "sm:px-12",
      "font-normal",
      "hover:bg-primary-200"
    );
  if (props.isLarge)
    className.push(
      "bg-primary-100",
      "text-xl",
      "py-2.5",
      "px-4",
      "hover:bg-primary-200"
    );
  if (props.isGradient)
    className.push(
      "bg-gradient-to-tr",
      "from-[#0087E8]",
      "hover:shadow-blue-500/50 hover:shadow-lg",
      "from-35%",
      "to-[#1200DD]",
      "to-85%",
      "text-white",
      "font-medium",
      "py-2 px-8",
      "rounded-full",
      "md:py-3 md:px-12"
    );
  if (props.isBlack)
    className.push(
      "bg-gray-800",
      "text-md",
      "rounded-md",
      "shadow-md",
      "text-white",
      "py-2.5 px-2",
      "md:px-12",
      "font-normal",
      "hover:bg-black",
      "mt-4",
      "transition", 
      "duration-500"
    );

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(" ")}
          style={props.style}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          to={props.href}
          className={className.join(" ")}
          style={props.style}
          onClick={onClick}
        >
          {props.children}
        </Link>
      );
    }
  }

  return (
    <button className={className.join(" ")} onClick={onClick}>
      {props.children}
    </button>
  );
};

export default Button;
