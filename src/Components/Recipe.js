import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import PerfectScrollbar from 'react-perfect-scrollbar'

const Recipe = (props) => {
  return (
    <div>
      <Card style={{ width: '20rem', height: '40rem', marginTop: '20px' }}>
        <Card.Img variant="top" src={props.recipe.image} />
        <Card.Body>
          <Card.Title>{props.recipe.label}</Card.Title>
          <h4>ingredients</h4>
          <PerfectScrollbar style={{ height: '150px' }}>
            <Card.Text>
              {props.recipe.ingredients.map((ingredient) => (
                <li>{ingredient.text}</li>
              ))}
            </Card.Text>
          </PerfectScrollbar>
          <a href={props.recipe.url}>more</a>
        </Card.Body>
      </Card>
    </div>
  )
}
export default Recipe
