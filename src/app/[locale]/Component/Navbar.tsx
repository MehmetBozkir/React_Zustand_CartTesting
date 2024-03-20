import { Link } from "./navigation";
import { useTranslations } from "next-intl";
import LanguageChanger from "./LanguageChanger";
import CartButton from "./CartButton";

export default function Navbar() {
  const t = useTranslations("Index");
  return (
    <nav>
      <div className="mx-auto max-w-6xl bg-success flex justify-between items-center text-sm text-slate-100 py-4 rounded-full mt-5">
        <Link href="/">
          <div className="uppercase font-bold ml-6">
            React<span className="text-amber-700">Coffee</span>
          </div>
        </Link>

        <div className="flex gap-2 mr-16">
          <Link href={"/product"} className="btn btn-success text-white">
            {t("nav")}
          </Link>
        </div>

        <div className="flex gap-1 items-center mr-6 text-2xl">
          <CartButton />
        </div>
      </div>
      <div className="mx-auto max-w-6xl flex items-center mt-2">
        <LanguageChanger />
      </div>
    </nav>
  );
}
