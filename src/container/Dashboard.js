import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { ProductList } from "../data/ProductList";
import ReactGA from "react-ga4";

export default function Dashboard() {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/dashboard",
      title: "Landing Page",
    });
  }, []);
  return (
    <div className="d-flex flex-wrap justify-content-center p-3">
      {ProductList.map((product) => (
        <ProductCard {...product} key={product.id} />
      ))}
    </div>
  );
}
