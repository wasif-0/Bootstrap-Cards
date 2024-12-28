import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaGoogle } from "react-icons/fa";

function Caards({title, desc, imgSrc, id}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <Button variant="primary"><FaGoogle /> Button ({id})  
        </Button>
        
      </Card.Body>
    </Card>
  );
}
export default Caards;
