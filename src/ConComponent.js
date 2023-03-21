import React, { useState } from 'react';

function ConComponent(props) {
  const { propA, stateA, onUpdateStateA } = props;
  const [stateB, setStateB] = useState('Con');

  const handleClick = () => {
    const newStateA = stateA + '' + stateB;
    console.log(`Giá trị stateA mới: ${newStateA}`)
    onUpdateStateA(newStateA);
  }
  return (
    <div>
      <h2>Con Component</h2>
      <p>State B: {stateB}</p>
      <p>Prop A: {propA}</p>
      <p>State A from Cha: {stateA}</p>
      <button onClick={() => setStateB('lớn hơn con')}>Update State B</button>
      <button onClick={handleClick}>Update State A in Cha</button>
    </div>
  );
}

export default ConComponent;
