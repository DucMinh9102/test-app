import React, { useState } from 'react';
import ConComponent from './ConComponent';

function ChaComponent() {
  const [stateA, setStateA] = useState('Cha');
  const updateStateA = (newState) => {
    setStateA(newState);
  }
  return (
    <div>
      <h2>Cha Component</h2>
      <p>State A: {stateA}</p>
      <ConComponent propA="Props from Cha" stateA={stateA} onUpdateStateA={updateStateA}np />
    </div>
  );
}

export default ChaComponent;
