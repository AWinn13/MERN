import './App.css';
import Form from './components/Form'
import List from './components/List'
import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  const addItem = newItem => {
    setItems([...items, newItem])
    // console.log(items)
  }

  const removeItem = index => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems)
  }

  const completeItem = index => {
    const newItems = [...items];
    newItems[index].isComplete = !newItems[index].isComplete;
    setItems(newItems)
  }

  const sortedItems = () => {
    // const {category, item, quantity} = items
    const sortedCategory = [...items].sort((a,b) =>{
      console.log(a.quantity)
      // if(a > b){
      //   return -1
      // }
      // if (a < b){
      //   return 1
      // }
      // return 0
      return a.quantity - b.quantity 
    }
    )
    setItems(sortedCategory)
    // console.log(sortedCategory)
  }

  
  return (
    <div className="App">
      <Form addItem={addItem} />
    <button className='btn btn-outline-primary mt-3' onClick={sortedItems}>Sort</button>
      <table className='table table-striped-columns w-50 mx-auto mt-5 '>
        <thead>
          <th>Got It</th>
          <th>Category</th>
          <th>Item</th>
          <th>Quantity</th>
          <th>Delete</th>
        </thead>
        <tbody className='table table-bordered'>
          
            {items.map((items, index) => (
              <List
                item={items}
                index={index}
                removeItem={removeItem}
                completeItem={completeItem}
              />
            ))}
          
        </tbody>
      </table>
    </div>
  );
}

export default App;
