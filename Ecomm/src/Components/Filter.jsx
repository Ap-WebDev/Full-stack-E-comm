import React from "react";

const Filter = () => {
  return (
  <><section className="shop-widget filter-widget bg-grey">
  <h2>FILTER</h2>
  <span className="sub-title">Filter by Brands</span>
  
  <ul className="list-unstyled nice-form">
      <li>
          <label for="check-1">
              <input id="check-1" type="checkbox"/>
              <span className="fake-input"></span>
              <span className="fake-label">Casali</span>
          </label>
          <span className="num">2</span>
      </li>
      <li>
          <label for="check-2">
              <input id="check-2" type="checkbox"/>
              <span className="fake-input"></span>
              <span className="fake-label">Decar</span>
          </label>
          <span className="num">12</span>
      </li>
      <li>
          <label for="check-3">
              <input id="check-3" checked="checked" type="checkbox"/>
              <span className="fake-input"></span>
              <span className="fake-label">Fantini</span>
          </label>
          <span className="num">4</span>
      </li>
      <li>
          <label for="check-4">
              <input id="check-4" type="checkbox"/>
              <span className="fake-input"></span>
              <span className="fake-label">Flamentstyle</span>
          </label>
          <span className="num">4</span>
      </li>
      <li>
          <label for="check-5">
              <input id="check-5" type="checkbox"/>
              <span className="fake-input"></span>
              <span className="fake-label">Heerenhuis</span>
          </label>
          <span className="num">6</span>
      </li>
      <li>
          <label for="check-6">
              <input id="check-6" type="checkbox"/>
              <span className="fake-input"></span>
              <span className="fake-label">Hoffmann</span>
          </label>
          <span className="num">10</span>
      </li>
      <li>
          <label for="check-7">
              <input id="check-7" type="checkbox"/>
              <span className="fake-input"></span>
              <span className="fake-label">Italfloor</span>
          </label>
          <span className="num">3</span>
      </li>
  </ul>
  <span className="sub-title">Filter by Price</span>
  <div className="price-range">
      <div className="range-slider">
          <span className="dot"></span>
          <span className="dot dot2"></span>
      </div>
      <span className="price">Price &nbsp;   $ 10  &nbsp;  -  &nbsp;   $ 599</span>
      <a href="#" className="filter-btn">Filter</a>
  </div>
</section></>  
  );
};

export default Filter;
