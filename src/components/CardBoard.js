// card-board component
import GridGenerator from "./GridGenerator";
import Card from "./Card";

const CardBoard = (props) => {
    return(
      <GridGenerator cols={4}>
        {props.cards&&
          props.cards.map((item) => {
              return <Card key={item.title} src={item.src} title={item.title}></Card>
          })
        }
      </GridGenerator>
    )
}

export default CardBoard;