import Axios from "axios";
import { useQuery } from "@tanstack/react-query";

export function useProducts() {
  return useQuery({
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

      const freeHome = freeAPIRes.data
        .filter((item) => item.category === "Home & Kitchen")
        .map((item) => ({
          ...item,
          price:
            item.price ??
            item.cost ??
            item.mrp ??
            Math.floor(Math.random() * 180) + 20,
        }));

      const freeAPI2Products = freeAPI2Res.data.map((item) => ({
        ...item,
        price:
          item.price ??
          item.cost ??
          item.mrp ??
          Math.floor(Math.random() * 180) + 20,
      }));

      const freeAPI3Products = freeAPI3Res.data.products.map((item) => ({
        ...item,
        price:
          item.price ??
          item.cost ??
          item.mrp ??
          Math.floor(Math.random() * 180) + 20,
      }));
      return [...freeHome, ...freeAPI2Products, ...freeAPI3Products];
    },
  });
}
