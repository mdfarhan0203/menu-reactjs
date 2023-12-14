import React, { useState } from "react";
import data from "./data";

const MenuList = () => {
  const [menuData, setMenuData] = useState(data);

  const filterCategory = (category) => {
    if (category == "All") {
      setMenuData(data);
    } else {
      let categoryItem = data.filter((item) => item.category == category);
      setMenuData(categoryItem);
    }
  };

  return (
    <div className="menu">
      <h1>Our Menu</h1>
      <div className="underline"></div>
      <section className="category-btn">
        <button onClick={() => filterCategory("All")}>All</button>
        <button onClick={() => filterCategory("breakfast")}>Breakfast</button>
        <button onClick={() => filterCategory("lunch")}>Lunch</button>
        <button onClick={() => filterCategory("shakes")}>Shakes</button>
      </section>
      <div className="menu_container">
        {menuData &&
          menuData.map((item) => {
            const { id, title, category, price, img, desc } = { ...item };
            return (
              <section key={id} className="menu_list">
                <div className="menu_item image">
                  <img src={img}></img>
                </div>
                <div className="menu_item title_price">
                  <h3 className="title">{title}</h3>
                  <span className="price">$ {price}</span>
                </div>
                <div className="menu_item">
                  <p className="desc">{desc}</p>
                </div>
              </section>
            );
          })}
      </div>
    </div>
  );
};
export default MenuList;
