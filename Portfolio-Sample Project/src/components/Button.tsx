import { ButtonHTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge";

//when you use tailwind merge and use multiple same classNames it will take the last one and not throw any error
//allowing us to write default classes before our custom classes

const Button = (props:{
    variant:"primary"|"secondary"|"text",
    iconAfter ? :ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
    const {iconAfter,variant,children,className,...rest} = props;
  return (
    <button className={
        twMerge("h-11 px-6 rounded-xl uppercase inline-flex items-center gap-2 border border-red-orange-500" ,
            variant=='primary' && "bg-red-orange-500 text-white",
            variant=='secondary' && "",
            variant=='text' && "h-auto px-0 border-transparent",
            className)
        } {...rest}>
        <span>{children}</span>
        {iconAfter && <span>{iconAfter}</span>}
    </button>
  )
}

export default Button
