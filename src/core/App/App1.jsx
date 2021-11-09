import React from 'react';
import PropTypes from 'prop-types';

const App1 = ({ value, addValue, clear, decrement, increment, setValue }) => (
  <div className='App' style={{ display: 'flex', flexDirection: 'column' }}>
    <h1>Hello world</h1>
    Value: {value}
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <button onClick={clear}>Clear</button>
    <button onClick={() => setValue(5)}>set value</button>
    <button onClick={() => addValue(3)}>add value</button>
  </div>
);

App1.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  addValue: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default App1;
