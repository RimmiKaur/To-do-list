import React from 'react';

export default function ToDoSaved({ item, setItem }) {
  const handleDelete = (index) => {
    const updatedItems = item.filter((_, i) => i !== index); // Remove the item at the specified index
    setItem(updatedItems); // Update the state
  };

  return (
    <>
      {item.map((todo, index) => (
        <div
          key={index}
          className="bg-white w-[470px] p-2 m-auto mt-2 mb-2 flex justify-between rounded shadow"
        >
          <h1>{todo}</h1>
          <button
            className="text-red-500 font-bold cursor-pointer"
            onClick={() => handleDelete(index)}
          >
            X
          </button>
        </div>
      ))}
    </>
  );
}
