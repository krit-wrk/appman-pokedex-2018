import React from 'react'
export function Row(props) {
    return <div style={{
        display: "flex",
        flexDirection: "row"
    }}>
        {props.children}
    </div>
}
export function Col(props) {
    return <div style={{
        display: "flex",
        flexDirection: "column"
    }}>
        {props.children}
    </div>
}

export function Box({ width, height,children }) {
    return <div style={{
        width, height
    }}>
        {children}
    </div>
}