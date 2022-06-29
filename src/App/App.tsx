import "./App.css";
import { gql, useQuery } from "@apollo/client";
import CreateElement from "../components/ElementCreate";

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
        return <h1>Carregando</h1>;
    } else {
        return (
            <div className="App">
                <div className="list">{CreateElement(data)}</div>
            </div>
        );
    }
}

export default App;
