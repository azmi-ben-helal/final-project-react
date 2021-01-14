import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

const Recipe = (props) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.recipe.image} />
        <Card.Body>
          <Card.Title>{props.recipe.label}</Card.Title>
          <Card.Text>
            {props.recipe.ingredients.map((ingredient) => (
              <li>{ingredient.text}</li>
            ))}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  )
}
export default Recipe
