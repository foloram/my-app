import { ProductCard } from "./ProductCard";

// REVIEW: This component accepts only { data } but Shop.jsx passes an addToCart prop
// that is silently ignored here. Either accept and forward the prop, or remove it from Shop.jsx.
export function ProductList({ data }) {
  return (
    <>
      {data?.map((item, index) => (
        <ProductCard key={item.id + "-" + index} item={item} />
      ))}
    </>
  );
}
