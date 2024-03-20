import ListCart from "../Component/ListCart";
import { useTranslations } from "next-intl";
import Cover from "../Component/Cover";

export default function Page() {
  const t = useTranslations("Index");
  return (
    <>
    <div className="min-h-screen">
      <h1 className="font-semibold text-slate-200 text-2xl border-b pb-4 border-b-slate-700 mt-8">
        {t("Cart")}
      </h1>
      <Cover/>
      <ListCart />
      </div>
    </>
  );
}
