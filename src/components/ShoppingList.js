import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import itemData from "../data/items";

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchItem, setSearchItem] = useState("")
  const [items, setItems] = useState(itemData);
  // console.log(items)


  function addNewFormItem(newData){
      setItems([...items, newData])
  }

  function handleItemSearch(e){
    // console.log(e)
      setSearchItem(e.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory)
    .filter(
      (item) => item.name.toLowerCase().includes(searchItem.toLowerCase())); 

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={addNewFormItem} />

      <Filter onCategoryChange={handleCategoryChange}
        onSearchChange={handleItemSearch}
        searchItem = {searchItem} />

      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
