import "./App.css";
import { gql, useQuery } from "@apollo/client";
import CreateElement from "../tsx/ElementCreate";

const card = gql`
    query MyQuery {
        cards {
            dia
            descricao
        }
    }
`;

function App() {
    let { loading, data } = useQuery(card);
    if (loading) {
        return <h1 className="loading__title">Carregando</h1>;
    } else {
        return (
            <div className="App">
                <div className="list">{CreateElement(data)}</div>
            </div>
        );
    }
}

export default App;
