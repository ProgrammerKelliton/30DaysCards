import { Card } from "../../components/card/index";

function CreateElement(data: any): any {
    let obj: object = data.cards.map((item: any, key: number) => (
        <Card
            name={item.nome}
            date={item.dia}
            key={key}
            message={item.descricao}
        ></Card>
    ));
    return obj;
}

export default CreateElement;
