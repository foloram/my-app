import { useSelector } from "react-redux";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
import style from "../components/Shop.module.css";

export function Shop() {
  const { username, isAuth } = useSelector((state) => state.user);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: "products",
    queryFn: async () => {
      const freeAPI = Axios.get(
        "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json",
      );
      const freeAPI2 = Axios.get(
        "https://api.escuelajs.co/api/v1/categories/3/products",
      );
      const freeAPI3 = Axios.get(
        "https://dummyjson.com/products/category/kitchen-accessories",
      );

      const [freeAPIRes, freeAPI2Res, freeAPI3Res] = await Promise.all([
        freeAPI,
        freeAPI2,
        freeAPI3,
      ]);

      const freeHome = freeAPIRes.data.filter(
        (item) => item.category === "Home & Kitchen",
      );
      return [...freeHome, ...freeAPI2Res.data, ...freeAPI3Res.data.products];
    },
  });

  if (isLoading) return <p>Loading ...</p>;

  if (isError)
    return <p>Sorry , there is an error : error : {error.message}</p>;

  const generateRandomPrice = () => Math.floor(Math.random() * 180) + 20;
  return (
    <div>
      <h2>{`Welcome to this page ${username}`}</h2>
      <div className={style.APIContainer}>
        {data?.map((item, index) => {
          const title = item.title || item.name || "No title";
          const price =
            item.price ?? item.cost ?? item.mrp ?? generateRandomPrice();

          const image =
            item.images?.[0] || item.image || "https://via.placeholder.com/200";

          return (
            <div key={item.id + "-" + index} className={style.APIContainerItem}>
              <img src={image} className={style.APIContainerImage}></img>
              <h6>{title}</h6>
              <p>{price} $</p>
              <button className={style.APIContainerButton}>Add to Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
