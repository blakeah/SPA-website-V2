import React, { useState } from 'react';
import Card from '../components/Card.js'
import AddPersonForm from './AddPersonForm';
import peopleData from '../data/people.json'

function HomePage(props) {
  const [people, setPeople] = useState(peopleData);

  const addPerson = (newPerson) => {
    setPeople([...people, newPerson]);
  };

  return(
    <div>
    <h3>This Page Shows a set of custom cards pulling from JSON data </h3>
    <Card people={people} />
    </div>
  )
}

export default HomePage;
