import React from 'react'
export function Modal(props) {
    if (!props.isOpen) return null
    return (
        <div 
        //onClick={props.toggle}
        style={{
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            left: "0px",
            top: "0px",
            width :"100%",
            height:"100%",
        }}>
            <button onClick={props.toggle}>Close</button>
            {props.children}
        </div>
    )
}