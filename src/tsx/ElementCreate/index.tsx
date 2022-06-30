import { Card } from "../../components/card/index";

function CreateElement(data: any): any {
    let obj: any = data.cards.map((item: any, key: number) => (
        <Card
            name="Card"
            date={item.dia}
            key={key}
            message={item.descricao}
        ></Card>
    ));
    return obj;
}

export default CreateElement;
