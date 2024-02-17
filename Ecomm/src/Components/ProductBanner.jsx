import React from "react";

const ProductBanner = () => {
  return (
    <section
      className="mt-contact-banner style4"
    >
      <div className="container">
        <div className="row">
          <div className="col-xs-12 text-center">
            <h1>CHAIRS</h1>

            <nav className="breadcrumbs">
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    Home <i className="fa fa-angle-right"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Products <i className="fa fa-angle-right"></i>
                  </a>
                </li>
                <li>Chairs</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductBanner;
