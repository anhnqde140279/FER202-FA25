import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function CounterComponent () {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  const buttonStyle = { margin: '5px' };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>Bộ Đếm Đa Năng</h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Giá trị hiện tại: {count}</p>
      <Button onClick={increment} style={buttonStyle} variant="primary">Tăng (+1)</Button>
      <Button onClick={decrement} style={buttonStyle} variant="warning">Giảm (-1)</Button>
      <Button onClick={reset} style={buttonStyle} variant="danger">Reset</Button>
    </div>
  );
}

export default CounterComponent;
