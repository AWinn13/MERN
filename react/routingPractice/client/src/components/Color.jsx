import React from 'react';
import { useParams } from 'react-router-dom';

function Color() {
  const { colors, coloring, word } = useParams();
  return (
    <div  style={{backgroundColor: colors }}>
      <div style={{color: coloring }}>{word}</div>
    </div>
  );
}

export default Color;
  