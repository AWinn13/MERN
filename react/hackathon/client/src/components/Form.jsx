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
        <form onSubmit = {handleSubmit}>
            <h4>Grocery List</h4>
            <div>
                <select name="" id="" onChange={(e) => setCategory(e.target.value)} value={item.category}>
                    <option value="meat">Meat</option>
                    <option value='produce'>Produce</option>
                    <option value='frozen'>Frozen</option>
                    <option value='snacks'>Snacks</option>
                    <option value='dryGoods'>Dry Goods</option>
                    <option value='dairy'>Dairy</option>
                </select>
            </div>
            <div>
                <input type="text"  id="item" onChange={(e) => setItem(e.target.value)} value={item.item}/>
                <label for="item">Item</label>
            </div>
            <div>
                <input type="number" name="quan" id="quan" value={item.quantity} onChange={(e) => setQuantity(e.target.value)} />
                <label for="quan"></label>
            </div>
            <button type='submit'>GIVE ME FOOD</button>
        </form>
    </div>
  )
};

export default Form;