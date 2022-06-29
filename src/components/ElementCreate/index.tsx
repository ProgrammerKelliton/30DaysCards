import { Card } from "../card/index";

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

export default CreateElement;
