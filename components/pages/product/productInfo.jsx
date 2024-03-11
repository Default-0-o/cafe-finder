import React from "react";
import ProductInfoDescripton from "./productInfoDescripton";
import ProductInfoImages from "./productInfoImages";

function ProductInfo() {
  return (
    <div
      className="flex"
    >
      <ProductInfoDescripton />
      <ProductInfoImages/>
    </div>
  );
}

export default ProductInfo;
