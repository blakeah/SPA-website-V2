import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import Card from '../components/Card.js';
import peopleData from '../data/people.json';

function PeoplePage() {
  const [people, setPeople] = useState(peopleData);

  return (
    <div>
      <h1>People Page</h1>
      {people.map((person) => (
        <Link key={person.id} to={`/people-page/${person.id}`}>
          <Card person={person} />
        </Link>
      ))}
    </div>
  );
}

export default PeoplePage;
