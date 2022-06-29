import "./style.css";

type PropsType = {
    name: string;
    message?: string;
    date?: number;
};

export function Card(props: PropsType) {
    return (
        <div className="card">
            <h1 className="card__title">{props.name}</h1>
            <p className="card__message">{props.message}</p>
            <small className="card__date">{props.date}</small>
        </div>
    );
}
