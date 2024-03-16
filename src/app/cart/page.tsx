import ListCart from "../Component/ListCart";

export default function Page() {
  return (
    <>
    <div className="min-h-screen">
      <h1 className="font-semibold text-slate-200 text-2xl border-b pb-4 border-b-slate-700 mt-8">
        Cart
      </h1>
      <ListCart />
      </div>
    </>
  );
}
