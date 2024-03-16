import Link from "next/link";
import LinkMenu from "./link/Menu";
import CartButton from "./CartButton";

export default function Navbar() {
  return (
    <nav>
      <div className="mx-auto max-w-6xl bg-success flex justify-between items-center text-sm text-slate-100 py-4 rounded-full mt-5">
        <Link href="/">
          <div className="uppercase font-bold ml-6">
            React<span className="text-amber-700">Coffee</span>
          </div>
        </Link>

        <div className="flex gap-2 mr-16">
          <LinkMenu href="/product" label="Product" isNew />
        </div>

        <div className="flex gap-1 items-center mr-6">
          <CartButton />
        </div>
      </div>
    </nav>
  );
}
