import { Card } from "./components/card";
import "./App.css";

import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";

const card = gql`
    query MyQuery {
        cards {
            dia
            descricao
        }
    }
`;

const Cards = ({ children }: any) => <div>{children}</div>;

function App() {
    const { loading, data } = useQuery(card);

    if (loading) {
        return <Cards>Carregando</Cards>;
    } else {
        return (
            <Cards>
                {data.cards.map((item: any, key: number) => (
                    <Card
                        name={item.dia}
                        key={key}
                        message={item.descricao}
                    ></Card>
                ))}
            </Cards>
        );
    }
}

export default App;
