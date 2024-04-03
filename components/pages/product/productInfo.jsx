import React from "react";
import ProductInfoDescripton from "./productInfoDescripton";
import ProductInfoImages from "./productInfoImages";

function ProductInfo() {
  return (
    <div className="flex flex-col justify-center md:justify-start items-center md:flex-row w-full md:gap-6 gap-[14px]">
      <ProductInfoImages />
      <ProductInfoDescripton />
    </div>
  );
}

export default ProductInfo;
