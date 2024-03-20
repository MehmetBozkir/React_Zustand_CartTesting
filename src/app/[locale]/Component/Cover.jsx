import React from "react";
import { useTranslations } from "next-intl";

function Cover() {
  const t = useTranslations("Index");
  return (
    <div className="flex flex-col gap-2 mt-4 shadow-2xl bg-base-100 bg-opacity-40">
      <table className="text-white">
        <thead>
          <tr>
            <th>#</th>
            <th>{t("Item")}</th>
            <th>{t("Price")}</th>
            <th>{t("Count")}</th>
            <th>{t("Total")}</th>
            <th>{t("Action")}</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default Cover;
