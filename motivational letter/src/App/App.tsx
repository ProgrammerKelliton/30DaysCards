import { Card } from "../components/card/index";
import "./App.css";
import { gql, useQuery } from "@apollo/client";

const card = gql`
    query MyQuery {
        cards {
            dia
            descricao
        }
    }
`;

function CreateElement(data: any): any {
    return data.cards.map((item: any, key: number) => (
        <Card
            name="Card"
            date={item.dia}
            key={key}
            message={item.descricao}
        ></Card>
    ));
}

function App() {
    let { loading, data } = useQuery(card);

    if (loading) {
        return <Card name="Carregando"></Card>;
    } else {
        return (
            <div className="App">
                <div className="list">{CreateElement(data)}</div>
            </div>
        );
    }
}

export default App;
