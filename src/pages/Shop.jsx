import { useSelector } from "react-redux";

import { useContext } from "react";
import style from "../components/ProductCard.module.css";
import { ProductList } from "../components/ProductList";
import { ShopContext } from "../context/ShopContext";
import { useProducts } from "../hooks/useProducts";

export function Shop() {
  const { username } = useSelector((state) => state.user);
  const { addToCart } = useContext(ShopContext);

  const { data, isLoading, isError, error } = useProducts();

  if (isLoading) return <p>Loading ...</p>;

  if (isError)
    return <p>Sorry , there is an error : error : {error.message}</p>;

  return (
    <div>
      <h2>{`Welcome to this page ${username}`}</h2>
      <div className={style.APIContainer}>
        <ProductList data={data} addToCart={addToCart} />
      </div>
    </div>
  );
}
