import React from "react";
import Filter from "../Components/Filter";
import Categoery from "../Components/Categoery";
import Hotsale from "../Components/Hotsale";
import Pagination from "../Components/Pagination";
import Product from "../Components/Product";
import PageDet from "../Components/PageDet";
import ProductBanner from "../Components/ProductBanner";

const ProductsPage = () => {
  return (
    <>
      <ProductBanner />
      <div id="ProductsPage">
        <div id="ProductpageFilter">
          <Filter />
          <Categoery />
          <Hotsale />
        </div>
        <div id="ProductpageItem">
          <PageDet />
          <Product />
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default ProductsPage;
