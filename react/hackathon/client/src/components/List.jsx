import React, { useState } from 'react';

const List = ({ item, index, removeItem, completeItem }) => {

    
    
  return (
    <tr>
      <td>
        <input
          type='checkbox'
          checked={item.isComplete}
          onChange={() => completeItem(index)}
          id=''
        />
      </td>
      <td style={{ textDecoration: item.isComplete ? 'line-through' : '' }}>
        {item.category}
      </td>

      <td style={{ textDecoration: item.isComplete ? 'line-through' : '' }}>
        {item.item}
      </td>

      <td style={{ textDecoration: item.isComplete ? 'line-through' : '' }}>
        {item.quantity}
      </td>

      <td>
        <button
          className='btn btn-outline-danger'
          onClick={() => removeItem(index)}
        >
          I don't need it
        </button>
      </td>

      <td></td>
    </tr>
  );
};

export default List;
