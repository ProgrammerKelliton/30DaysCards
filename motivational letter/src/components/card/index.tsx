import "./style.css";

type PropsType = {
    name: string;
    message?: string;
};

export function Card(props: PropsType) {
    return (
        <div className="card">
            <h1 className="card__title">{props.name}</h1>
            <p className="card__message">{props.message}</p>
        </div>
    );
}
