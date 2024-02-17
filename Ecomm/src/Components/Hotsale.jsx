import React from "react";

const Hotsale = () => {
  return (
    <section className="shop-widget">
      <h2>HOT SALE</h2>
      <div className="mt-product4 mt-paddingbottom20">
        <div className="img">
          <a href="product-detail.html">
            <img src="images/products/img14.jpg" alt="image description" />
          </a>
        </div>
        <div className="text">
          <div className="frame">
            <strong>
              <a href="product-detail.html">Egon Wooden Chair</a>
            </strong>
            <ul className="mt-stars">
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star-o"></i>
              </li>
            </ul>
          </div>
          <del className="off">$75,00</del>
          <span className="price">$55,00</span>
        </div>
      </div>
    </section>
  );
};

export default Hotsale;
