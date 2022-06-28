import { Card } from "./components/card";
import "./App.css";
import { client } from "./services/client";
import { gql } from "@apollo/client";
import { useEffect, useState } from "react";

function App() {
    useEffect(() => {
        function StartAPI() {
            client
                .query({
                    query: gql`
                        query MyQuery {
                            cards {
                                dia
                                descricao
                            }
                        }
                    `,
                })
                .then((resp) => console.log(resp.data));
        }
        StartAPI();
    }, []);

    return (
        <div>
            <Card name="Name here"></Card>
        </div>
    );
}

export default App;
