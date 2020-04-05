import React from 'react';

function Person(props) {
  return (
    <div>
        <h1>{props.name}</h1>
        <p>Age: {props.age} | Weight: {props.weight} | Height:{props.height}</p>
    </div>
  );
}

export default Person;
