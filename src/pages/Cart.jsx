import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import style from "../components/ProductCard.module.css";

export function Cart() {
  const { cartItem, addToCart, removeFromCart } = useContext(ShopContext);

  if (cartItem.length === 0) return <h5>Your cart is empty 🛒</h5>;

  const totalItems = cartItem.reduce(
    (sum, item) => sum + item.price * item.count,
    0,
  );

  return (
    <>
      <h1>Your Cart</h1>
      <hr></hr>
      <h6>Total price: {totalItems}</h6>
      <div className={style.APIContainerCart}>
        {cartItem.map((item) => (
          <div key={item.id} className={style.APIContainerItem}>
            <img src={item.image} className={style.APIContainerImage} />
            <h6> {item.title}</h6>
            <p>{item.price}$</p>
            <p>Quantity : {item.count} </p>
            <button
              className={style.APIContainerButton}
              onClick={() => addToCart(item)}
            >
              +
            </button>
            <button
              className={style.APIContainerButton}
              onClick={() => removeFromCart(item)}
            >
              -
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
