import React from "react";

const PageDet = () => {
  return (
    <header className="mt-shoplist-header">
      <div className="btn-box">
        <ul className="list-inline">
          <li>
            <a href="#" className="drop-link">
              Default Sorting{" "}
              <i aria-hidden="true" className="fa fa-angle-down"></i>
            </a>
            <div className="drop">
              <ul className="list-unstyled">
                <li>
                  <a href="#">ASC</a>
                </li>
                <li>
                  <a href="#">DSC</a>
                </li>
                <li>
                  <a href="#">Price</a>
                </li>
                <li>
                  <a href="#">Relevance</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a className="mt-viewswitcher" href="#">
              <i className="fa fa-th-large" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a className="mt-viewswitcher" href="#">
              <i className="fa fa-th-list" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="mt-textbox">
        <p>
          Showing <strong>1–9</strong> of <strong>65</strong> results
        </p>
        <p>
          View <a href="#">9</a> / <a href="#">18</a> / <a href="#">27</a> /{" "}
          <a href="#">All</a>
        </p>
      </div>
    </header>
  );
};

export default PageDet;
