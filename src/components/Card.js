import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import people from '../data/people.json'
import blankFace from '../assets/blank.jpg'


function Card({ person }) {
  return (
    <Container>
    <div className="cards col-9">
      <Row>
        <Col xs={4}>
        {person.image ? (
            <img src={person.image} alt={person.name} className="circular--square" style={{ width: '60%' }} />
          ) : (
            <img src={blankFace} alt="Blank Face" className="circular--square" style={{ width: '60%' }} />
        )}
        </Col>
        <Col >
          <h2>{person.name}</h2>
          <p>Age: {person.data.age}</p>
          <p>Address: {person.data.address.street}, {person.data.address.city}, {person.data.address.state}, {person.data.address.zip}</p>
          <p>Phone: {person.data.phones[0]}</p>
        </Col>
      </Row>
      {/* Render other person-related information */}
    </div>
    </Container>
  );
}

export default Card;
