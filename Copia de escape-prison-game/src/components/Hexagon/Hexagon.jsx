import React from 'react';
import './Hexagon.css';

const r = 60;

const Hex = props => {
  const { side = "", ...divProps } = props;

  return (
    <div
      {...divProps}
      className={`hex ${side}`}
    >
      <div className="hex-top" />
      <div className="hex-middle" />
      <div className="hex-bottom" />
    </div>
  );
};

export default Hex;
