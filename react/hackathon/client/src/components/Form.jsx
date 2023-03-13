import React, { useState } from 'react';

const Form = (props) => {
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addItem({category : category , item : item, quantity : quantity, isComplete: false })
    setItem('');
    console.log(item);
  };


  return(
    <div>
        <form className='form-floating w-50 mx-auto' onSubmit = {handleSubmit}>
            <h4>Grocery List</h4>
            <div className='form-floating mb-3'>
                <select className='form-control' name="" id="" onChange={(e) => setCategory(e.target.value)} value={item.category}>
                    <option>Select a Category</option>
                    <option value="meat">Meat</option>
                    <option value='produce'>Produce</option>
                    <option value='frozen'>Frozen</option>
                    <option value='snacks'>Snacks</option>
                    <option value='dryGoods'>Dry Goods</option>
                    <option value='dairy'>Dairy</option>
                </select>
            </div>
            <div className='form-floating mb-3'>
                <input className='form-control' type="text"  id="item" placeholder='Item' onChange={(e) => setItem(e.target.value)} value={item.item}/>
                <label for="item">Item</label>
            </div>
            <div className='form-floating mb-3'>
                <input placeholder="Quantity" className='form-control' type="number" name="quan" id="quan" value={item.quantity} onChange={(e) => setQuantity(e.target.value)} />
                <label for="quan">Quantity</label>
            </div>
            <button className='btn btn-outline-light' type='submit'>GIVE ME FOOD</button>
        </form>
    </div>
  )
};

export default Form;