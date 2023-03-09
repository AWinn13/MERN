import React, { useState } from 'react';

const Form = (props) => {
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.color(color);
    setColor('');
  };

  return (
    <div>
      <form class='form-control w-50 mx-auto' onSubmit={handleSubmit}>
        <div class='form-floating mb-2 border'>
          <input
            onChange={(e) => setColor(e.target.value)}
            value= {color}
            class='form-control'
            type='text'
            id='color'
            placeholder='Color'
          />
          <label for='color'>Color</label>
        </div>
        <div class='border'>
          <button
            type='submit'
            // value='Create Box'
            class='btn btn-outline-success mx-auto'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
