import React from "react";
import products from "./productsData";

function CatalogueItem(props) {
  return (
    <div className="catalogue-item">
      <h3> {props.product.id} </h3>
      <p> {props.product.name} </p>
      <p> {props.product.price} </p>
    </div>
  );
}

export default function Catalogue() {
  const catalogueComponents = products.map((product) => (
    <CatalogueItem key={product.id} product={product} />
  ));

  return <div>{catalogueComponents}</div>;
}
