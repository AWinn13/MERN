import React, { useState } from 'react';

const List = ({ item, index, removeItem, completeItem }) => {
    return(
  <div>
    <input 
    type='checkbox' 
    checked={item.isComplete} 
    onChange = {() => completeItem(index)}
    id=''
     />
    <div style={{ textDecoration: item.isComplete ? 'line-through' : '' }}>{item.category}</div>
    <div style={{ textDecoration: item.isComplete ? 'line-through' : '' }}>{item.quantity}</div>
    <div style={{ textDecoration: item.isComplete ? 'line-through' : '' }}>{item.item}</div>
    <button onClick={() => removeItem(index)}>I don't need it</button>
  </div>
)
};

export default List;
