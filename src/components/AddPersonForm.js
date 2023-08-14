import React, { useState } from 'react';

function AddPersonForm({ onAddPerson }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPerson = {
      id: Math.random(), // Generate a temporary unique ID (replace with a proper method)
      name,
      data: {
        age: parseInt(age),
        address: {
          street,
          city,
          state,
          zip
        },
        phones: [phone]
      }
    };

    onAddPerson(newPerson);

    // Reset form fields after submission
    setName('');
    setAge('');
    setStreet('');
    setCity('');
    setState('');
    setZip('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

      <label>Age:</label>
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />

      <label>Street:</label>
      <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} required />

      <label>City:</label>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />

      <label>State:</label>
      <input type="text" value={state} onChange={(e) => setState(e.target.value)} required />

      <label>Zip:</label>
      <input type="text" value={zip} onChange={(e) => setZip(e.target.value)} required />

      <label>Phone:</label>
      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />

      <button type="submit">Add Person</button>
    </form>
  );
}

export default AddPersonForm;
