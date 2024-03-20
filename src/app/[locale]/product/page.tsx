import ProductCard from "../Component/ProductCard"
import { Product } from "../models/product";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("Index");
  const products: Product[] = [
    {
      id: 1,
      name: "Americano",
      price: 40,
    },
    {
      id: 2,
      name: "Expresso",
      price: 20,
    },
    {
      id: 3,
      name: "Arabica",
      price: 10,
    },
    {
        id: 4,
        name: "Turkish",
        price: 40,
      },
  ];

  return (
    <>
    <div className="min-h-screen ">
      <h1 className="font-semibold text-slate-200 text-2xl border-b pb-4 border-b-slate-700 mt-8">
      {t("nav")}
      </h1>

      <div className="text-sm pt-4 flex gap-4 ">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
      </div>
    </>
    
  );
}
