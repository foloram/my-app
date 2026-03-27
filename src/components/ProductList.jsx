import { ProductCard } from "./ProductCard";

export function ProductList({ data }) {
  return (
    <>
      {data?.map((item, index) => (
        <ProductCard key={item.id + "-" + index} item={item} />
      ))}
    </>
  );
}
