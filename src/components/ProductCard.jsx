import style from "./ProductCard.module.css";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

export function ProductCard({ item }) {
  const title = item.title || item.name || "No title";

  const price = item.price;

  const image =
    item.images?.[0] || item.image || "https://via.placeholder.com/200";

  const { addToCart, removeFromCart, cartItem } = useContext(ShopContext);

  const navigate = useNavigate();

  const handleAdd = () => {
    addToCart(item);
    navigate("./cart");
  };

  return (
    <div className={style.APIContainerItem}>
      <img src={image} className={style.APIContainerImage}></img>
      <h6>{title}</h6>
      <p>{price} $</p>
      <button className={style.APIContainerButton} onClick={handleAdd}>
        Add to Cart
      </button>
    </div>
  );
}
