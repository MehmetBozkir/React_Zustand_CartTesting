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
        <Cover />
        <ListCart />

        <div className="mt-4 text-end">
          <button className="btn bg-success text-white">
            <a
              href="https://buy.stripe.com/test_4gw17P8Kb9ln2qsfYY"
              target="_blank"
            >
              {t("Buy")}
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
