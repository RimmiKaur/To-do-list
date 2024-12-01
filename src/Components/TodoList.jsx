import React, { useState } from 'react';
import ToDoSaved from './ToDoSaved';

export default function TodoList() {
  const [item, setItem] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      alert('Please enter a valid item');
      return;
    }
    setItem([...item, inputValue.trim()]);
    setInputValue(''); // Clear the input after saving
  };

  return (
    <div className="w-[500px] bg-black m-auto p-4 rounded">
      <div>
        <h1 className="text-white text-center text-3xl font-bold mb-4">Todo List</h1>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter item"
          className="w-full border-2 border-gray-300 p-2 mb-2"
        />
        <button
          className="bg-green-500 text-white w-full p-2"
          onClick={handleAddItem}
        >
          SAVE
        </button>
      </div>

      {item.length > 0 ? (
        <ToDoSaved item={item} setItem={setItem} />
      ) : (
        <p className="text-gray-400 text-center mt-4">No items added yet.</p>
      )}
    </div>
  );
}
