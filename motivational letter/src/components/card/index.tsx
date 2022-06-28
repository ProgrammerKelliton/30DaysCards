import { useEffect, useState } from "react";
import "./style.css";

type propsType = {
    name: string;
};

export function Card(props: propsType) {
    let [message, setMessage] = useState("");

    useEffect(() => {
        async function GetMessage() {
            const resp = await fetch("https://api.adviceslip.com/advice");
            const data = await resp.json();
        }
        GetMessage();
    }, []);

    return (
        <div className="card">
            <h1 className="card__title">{props.name}</h1>
            <p className="card__message">{message}</p>
        </div>
    );
}
