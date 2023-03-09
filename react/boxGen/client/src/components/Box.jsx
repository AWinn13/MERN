import React from 'react';

const Box = (props) => {
  return (
    <div
      style={{ backgroundColor: props.color, width: 100, height: 100 }}
    ></div>
  );
};

export default Box;
