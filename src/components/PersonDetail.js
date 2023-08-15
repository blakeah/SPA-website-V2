import React from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import peopleData from '../data/people.json';

function PersonDetail() {
  const { id } = useParams();
  const person = peopleData.find((person) => person.id === parseInt(id));

  if (!person) {
    return <div>Person not found.</div>;
  }

  return (

    <div>
    <Link to="/people-page">Back</Link>
      <h2>{person.name}</h2>
      <p>Age: {person.data.age}</p>
      <p>Address: {person.data.address.street}, {person.data.address.city}, {person.data.address.state}, {person.data.address.zip}</p>
      <p>Phone: {person.data.phones[0]}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default PersonDetail;
