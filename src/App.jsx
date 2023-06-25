import { useState } from 'react';
import * as math from 'mathjs';

function App() {
  const [expression, setExpression] = useState('');
  
  const handleButtonPress = (value) => {
    if (value === '=') {
      try {
        const result = math.evaluate(expression);
        setExpression(result);
      } catch (error) {
        setExpression('Error');
      }
    } else if (value === 'C') {
      setExpression('');
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{expression}</div>
      <div className="buttons">
        <button onClick={() => handleButtonPress('7')}>7</button>
        <button onClick={() => handleButtonPress('8')}>8</button>
        <button onClick={() => handleButtonPress('9')}>9</button>
        <button onClick={() => handleButtonPress('+')}>+</button>
        <button onClick={() => handleButtonPress('4')}>4</button>
        <button onClick={() => handleButtonPress('5')}>5</button>
        <button onClick={() => handleButtonPress('6')}>6</button>
        <button onClick={() => handleButtonPress('-')}>-</button>
        <button onClick={() => handleButtonPress('1')}>1</button>
        <button onClick={() => handleButtonPress('2')}>2</button>
        <button onClick={() => handleButtonPress('3')}>3</button>
        <button onClick={() => handleButtonPress('*')}>*</button>
        <button onClick={() => handleButtonPress('0')}>0</button>
        <button onClick={() => handleButtonPress('.')}>.</button>
        <button onClick={() => handleButtonPress('=')}>=</button>
        <button onClick={() => handleButtonPress('/')}>/</button>
        <button onClick={() => handleButtonPress('C')}>C</button>
      </div>
    </div>
  );
}

export default App;
