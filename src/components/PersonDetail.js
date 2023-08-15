import React from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import peopleData from '../data/people.json';
import blankFace from '../assets/blank.jpg'


function PersonDetail() {
  const { id } = useParams();
  const person = peopleData.find((person) => person.id === parseInt(id));

  if (!person) {
    return <div>Person not found.</div>;
  }

  return (

    <div>
    <Link to="/people-page">Back</Link>

      <div className="personFocus">
      <Row>
      <Col xs={2} className="personFocus-left">
      {person.image ? (
          <img src={person.image} alt={person.name} className="circular--square" style={{ width: '100%' }} />
        ) : (
          <img src={blankFace} alt="Blank Face" className="circular--square" style={{ width: '100%' }} />
      )}
      <h2>{person.name}</h2>
      </Col>
      <Col className="personFocus-right">
      <p>Age: {person.data.age}</p>
      <p>Address: {person.data.address.street}, {person.data.address.city}, {person.data.address.state}, {person.data.address.zip}</p>
      <p>Phone: {person.data.phones[0]}</p>
      {/* Add more details as needed */}
      </Col>
      </Row>
      </div>
    </div>
  );
}

export default PersonDetail;
