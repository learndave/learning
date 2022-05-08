import React from "react";

const Logo = (props) => {
    return (
        <div className={props.class}>
            <img
                src="./logo192.png"
                alt="Logo"
                className={`${props.class}-img`}
            />
            <div className={`${props.class}-title`}>
                Task App
            </div>
        </div>
    )
}


export default Logo;