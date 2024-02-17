import React from "react";

const NavBar = () => {
  return (
    <div className="mt-bottom-bar">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <div className="mt-logo">
              <a href="#">
                <img src="images/mt-logo.png" alt="schon" />
              </a>
            </div>

            <ul className="mt-icon-list">
              <li className="hidden-lg hidden-md">
                <a href="#" className="bar-opener mobile-toggle">
                  <span className="bar"></span>
                  <span className="bar small"></span>
                  <span className="bar"></span>
                </a>
              </li>
              <li>
                <a href="#" className="icon-magnifier"></a>
              </li>
              <li>
                <a href="#" className="icon-heart"></a>
              </li>
              <li className="drop">
                <a href="#" className="cart-opener">
                  <span className="icon-handbag"></span>
                  <span className="num">3</span>
                </a>

                <div className="mt-drop">
                  <div className="mt-drop-sub">
                    <div className="mt-side-widget">
                      <div className="cart-row">
                        <a href="#" className="img">
                          <img
                            src="images/products/img36.jpg"
                            alt="image"
                            className="img-responsive"
                          />
                        </a>
                        <div className="mt-h">
                          <span className="mt-h-title">
                            <a href="#">Marvelous Modern 3 Seater</a>
                          </span>
                          <span className="price">
                            <i className="fa fa-eur" aria-hidden="true"></i>{" "}
                            599,00
                          </span>
                          <span className="mt-h-title">Qty: 1</span>
                        </div>
                        <a href="#" className="close fa fa-times"></a>
                      </div>

                      <div className="cart-row">
                        <a href="#" className="img">
                          <img
                            src="images/products/img37.jpg"
                            alt="image"
                            className="img-responsive"
                          />
                        </a>
                        <div className="mt-h">
                          <span className="mt-h-title">
                            <a href="#">Marvelous Modern 3 Seater</a>
                          </span>
                          <span className="price">
                            <i className="fa fa-eur" aria-hidden="true"></i>{" "}
                            599,00
                          </span>
                          <span className="mt-h-title">Qty: 1</span>
                        </div>
                        <a href="#" className="close fa fa-times"></a>
                      </div>

                      <div className="cart-row">
                        <a href="#" className="img">
                          <img
                            src="images/products/img38.jpg"
                            alt="image"
                            className="img-responsive"
                          />
                        </a>
                        <div className="mt-h">
                          <span className="mt-h-title">
                            <a href="#">Marvelous Modern 3 Seater</a>
                          </span>
                          <span className="price">
                            <i className="fa fa-eur" aria-hidden="true"></i>{" "}
                            599,00
                          </span>
                          <span className="mt-h-title">Qty: 1</span>
                        </div>
                        <a href="#" className="close fa fa-times"></a>
                      </div>

                      <div className="cart-row-total">
                        <span className="mt-total">Sub Total</span>
                        <span className="mt-total-txt">
                          <i className="fa fa-eur" aria-hidden="true"></i>{" "}
                          799,00
                        </span>
                      </div>

                      <div className="cart-btn-row">
                        <a href="#" className="btn-type2">
                          VIEW CART
                        </a>
                        <a href="#" className="btn-type3">
                          CHECKOUT
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="mt-mdropover"></span>
              </li>
              <li>
                <a href="#" className="bar-opener side-opener">
                  <span className="bar"></span>
                  <span className="bar small"></span>
                  <span className="bar"></span>
                </a>
              </li>
            </ul>

            <nav id="nav">
              <ul>
                <li>
                  <a className="drop-link" href="homepage1.html">
                    HOME{" "}
                    <i
                      className="fa fa-angle-down hidden-lg hidden-md"
                      aria-hidden="true"
                    ></i>
                  </a>
                  <div className="s-drop">
                    <ul>
                      <li>
                        <a href="homepage1.html">Homepage1</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a className="drop-link" href="product-grid-view.html">
                    PRODUCTS{" "}
                    <i
                      className="fa fa-angle-down hidden-lg hidden-md"
                      aria-hidden="true"
                    ></i>
                  </a>
                  <div className="s-drop">
                    <ul>
                      <li>
                        <a href="product-grid-view.html">Product Grid View</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a className="drop-link" href="blog-right-sidebar.html">
                    Blog{" "}
                    <i
                      className="fa fa-angle-down hidden-lg hidden-md"
                      aria-hidden="true"
                    ></i>
                  </a>
                  <div className="s-drop">
                    <ul>
                      <li>
                        <a href="blog-fullwidth-page.html">
                          Blog Fullwidth Page
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="about-us.html">About</a>
                </li>
                <li>
                  <a className="drop-link" href="contact-us.html">
                    Contact{" "}
                    <i
                      className="fa fa-angle-down hidden-lg hidden-md"
                      aria-hidden="true"
                    ></i>
                  </a>
                  <div className="s-drop">
                    <ul>
                      <li>
                        <a href="contact-us.html">Contact</a>
                      </li>
                      <li>
                        <a href="contact-us2.html">Contact 2</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
