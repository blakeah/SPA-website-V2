import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import people from '../data/people.json'
import blankFace from '../assets/blank.jpg'


function Card(props) {

  return (
    <Container>
      {people.map((person) => (
        <div key={person.id} className="cards col-7">
          <Row>
            <Col xs={4}>
            {person.image ? (
                <img src={person.image} alt={person.name} style={{ width: '100%' }} />
              ) : (
                <img src={blankFace} alt="Blank Face" style={{ width: '100%' }} />
            )}
            </Col>
            <Col >
              <h2>{person.name}</h2>
              <p>Age: {person.data.age}</p>
              <p>Address: {person.data.address.street}, {person.data.address.city}, {person.data.address.state}, {person.data.address.zip}</p>
              <p>Phone: {person.data.phones[0]}</p>
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
}

export default Card;
