import React from "react";

type PropsType = {
    readonly label: string,
    readonly onClick: () => void
}

export const Button = ({ label, onClick }: PropsType) => {
    const handleClick = (): void => {
        alert("This one is executed from implemented app!");
        onClick();
    }
    return (
        <button style={{ backgroundColor: "red" }} onClick={handleClick}>{label}</button>
    )
}

export default null;