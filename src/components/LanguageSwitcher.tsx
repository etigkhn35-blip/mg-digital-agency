"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  locale: "en" | "tr";
};

export default function LanguageSwitcher({
  locale,
}: Props) {
  const pathname = usePathname();

  const getPath = (target: "en" | "tr") => {
    const parts = pathname.split("/");

    if (parts[1] === "en" || parts[1] === "tr") {
      parts[1] = target;

      return parts.join("/") || `/${target}`;
    }

    return `/${target}`;
  };

  return (
    <div className="language-switcher">
      <Link
        href={getPath("en")}
        className={locale === "en" ? "active" : ""}
      >
        EN
      </Link>

      <span>/</span>

      <Link
        href={getPath("tr")}
        className={locale === "tr" ? "active" : ""}
      >
        TR
      </Link>
    </div>
  );
}