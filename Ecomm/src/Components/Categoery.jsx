import React from "react";

const Categoery = () => {
  const CategoeryList = [
    { Cate: "CHAIRS", Available: 12 },
    { Cate: "SOFAS", Available: 12 },
    { Cate: "ARMCHAIRS", Available: 12 },
    { Cate: "BEDROOM", Available: 12 },
  ];

  return (
    <section className="shop-widget">
      <h2>CATEGORIES</h2>
      <ul className="list-unstyled category-list">
        {CategoeryList.map((Item, i) => (
          <li key={i}>
            <a href="#">
              <span className="name">{Item.Cate}</span>
              <span className="num">{Item.Available}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categoery;
