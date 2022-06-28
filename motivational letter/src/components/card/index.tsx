import { useEffect } from "react";
import "./style.css";

type propsType = {
    name: string;
};

export function Card(props: propsType) {
    return (
        <div className="card">
            <h1 className="card__title">{props.name}</h1>
            <p className="card__message">{}</p>
        </div>
    );
}
