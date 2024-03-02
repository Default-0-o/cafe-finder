import Link from "next/link";
import React from "react";

function Products() {
  return (
    <>
      <div>
        <Link href={""}>
          <p>Handbags</p>
        </Link>
        <Link href={""}>
          <p>Watches</p>
        </Link>
        <Link href={""}>
          <p>Skincares</p>
        </Link>
        <Link href={""}>
          <p>Jewellery</p>
        </Link>
        <Link href={""}>
          <p>Apparels</p>
        </Link>
      </div>
    </>
  );
}

export default Products;
