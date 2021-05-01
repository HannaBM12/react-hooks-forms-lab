import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [itemName, setItemName] = useState("")
  const [itemCategory, setItemCategory] = useState("Produce")

  function handleName(e){
    setItemName(e.target.value)
  }

  function handleCategory(e){
    setItemCategory(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    const newItem = {
      id: uuid(),
      name:itemName,
       category:itemCategory
    }
    console.log(newItem)
    onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={handleName}/>
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={handleCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
