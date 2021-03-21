import React from 'react';

export const containerStyle : React.CSSProperties = {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "80px",
    fontWeight: "bold",
    color: "goldenrod"
}

export default function New() {

    return (
        <div style={containerStyle}>
            NEW RELEASES PAGE
        </div>
    );
}