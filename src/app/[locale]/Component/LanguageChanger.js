"use client";

import { useRouter, usePathname } from "./navigation";

export default function LanguageChanger() {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e) => {
    router.push(pathname, { locale: e.target.value });
  };

  return (
    <select className="select select-warning w-24" onChange={handleChange}>
      <option disabled selected>
        Lang
      </option>
      <option value="en">English</option>
      <option value="de">Türkçe</option>
    </select>
  );
}
