import style from "./ProductCard.module.css";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

export function ProductCard({ item }) {
  const title = item.title || item.name || "No title";

  const price = item.price;

  const image =
    item.images?.[0] || item.image || "https://via.placeholder.com/200";

  const { addToCart } = useContext(ShopContext);

  const navigate = useNavigate();

  const handleAdd = () => {
    addToCart(item);
    // REVIEW: Relative path "./cart" may resolve incorrectly depending on the current route.
    // Use an absolute path "/cart" instead. Also, force-navigating to the cart on every
    // add-to-cart click is disruptive UX — consider a toast notification instead.
    navigate("./cart");
  };

  return (
    <div className={style.APIContainerItem}>
      <img src={image} className={style.APIContainerImage} alt={title}></img>
      <h6>{title}</h6>
      <p>{price} $</p>
      <button className={style.APIContainerButton} onClick={handleAdd}>
        Add to Cart
      </button>
    </div>
  );
}
