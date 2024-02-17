import Prod from "../assets/img22.jpg";

const Product = () => {
  return (
    <div className="mt-product1 bg-grey large">
      <div className="box">
        <div className="b1">
          <div className="b2">
            <a href="product-detail.html">
              <img src={Prod} alt="image description" />
            </a>
            <span className="caption">
              <span className="best-price">Best Price</span>
            </span>
            <ul className="mt-stars">
              <li>
                <i className="fa fa-star"></i>
              </li>
            </ul>
            <ul className="links add">
              <li>
                <a href="#">
                  <i className="icon-handbag"></i>
                  <span></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icomoon icon-heart-empty"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icomoon icon-exchange"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="txt">
        <strong className="title">
          <a href="product-detail.html">Bombi Chair</a>
        </strong>
        <span className="price">
          Rs <span>399,00</span>
        </span>
      </div>
      <br />
    </div>
  );
};

export default Product;
