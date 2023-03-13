import './App.css';
import Form from './components/Form'
import List from './components/List'
import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  const addItem = newItem => {
    setItems([...items, newItem ])
    console.log(items)
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

  return (
    <div className="App">
      <Form addItem = {addItem} />
      {items.map((items, index) => (
      <List
        item = {items}
        index = {index}
        removeItem={removeItem}
        completeItem = {completeItem}
      />
      ))}
    </div>
  );
}

export default App;
