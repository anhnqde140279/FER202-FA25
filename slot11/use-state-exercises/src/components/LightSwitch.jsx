import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function LightSwitch() {
  const [isLightOn, setIsLightOn] = useState(false);
  const toggleLight = () => setIsLightOn(prev => !prev);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>Công Tắc Đèn</h2>
      <p style={{ fontSize: '20px' }}>Đèn hiện đang: <strong>{isLightOn ? 'Bật' : 'Tắt'}</strong></p>
      <Button onClick={toggleLight} variant={isLightOn ? 'danger' : 'success'}>
        {isLightOn ? 'Tắt Đèn' : 'Bật Đèn'}
      </Button>
    </div>
  );
}

export default LightSwitch;
