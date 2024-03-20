import React from "react";
import { useTranslations } from "next-intl";
import {Link} from './navigation'


function Body() {
  const t = useTranslations("Index");
  return (
    <div className="hero min-h-screen shadow-2xl bg-opacity-60 mt-10 mb-10">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold drop-shadow-2xl ">
            {t("Welcome")}
          </h1>
          <p className="py-6 mt-10">{t("stem")}</p>
          <Link href={"/product"} className="btn btn-success text-white">
            {t("see")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Body;
