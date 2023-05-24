import React from "react"

const Button = ({ style }) => {
    return (
        <button className={`py-4 px-4 bg-blue-gradient font-poppins font-semibold text-[18px] outline-none ${style} rounded-[10px]`} type='button'>Get Started</button>
    )
}

export default Button