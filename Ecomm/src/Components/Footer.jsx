import React from "react";

const Footer = () => {
  const AllTypeItem = ["Sofas"];

  return (
    <div className="footer-holder dark flex justify-evenly w-full">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-3 mt-paddingbottomsm">
            <div className="f-widget-about">
              <div className="logo">
                <a href="index.html">
                  <img src="images/logo.png" alt="Schon" />
                </a>
              </div>
              <p>
                Exercitation ullamco laboris nisi ut aliquip ex commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
              </p>

              <ul className="list-unstyled social-network">
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 mt-paddingbottomxs">
            <div className="f-widget-tabs">
              <h3 className="f-widget-heading">Product Tags</h3>
              <ul className="list-unstyled tabs">
                {AllTypeItem.map((item, i) => (
                  <li key={i}>
                    <a href="#">Sofas</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 text-right">
            <div className="f-widget-about">
              <h3 className="f-widget-heading">Information</h3>
              <ul className="list-unstyled address-list align-right">
                <li>
                  <i className="fa fa-map-marker"></i>
                  <address>
                    Connaugt Road Central Suite 18B, 148 <br />
                    New Yankee
                  </address>
                </li>
                <li>
                  <i className="fa fa-phone"></i>
                  <a href="tel:15553332211">+1 (555) 333 22 11</a>
                </li>
                <li>
                  <i className="fa fa-envelope-o"></i>
                  <a href="mailto:&#105;&#110;&#102;&#111;&#064;&#115;&#099;&#104;&#111;&#110;&#046;&#099;&#104;&#097;&#105;&#114;">
                    &#105;&#110;&#102;&#111;&#064;&#115;&#099;&#104;&#111;&#110;&#046;&#099;&#104;&#097;&#105;&#114;
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
