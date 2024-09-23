"use client";

import React, { useState } from "react";
import { useChangeLocale, useCurrentLocale, useI18n } from "../locales/client";

import enFlag from "/public/en-flag.png";
import roFlag from "/public/ro-flag.png";
import Image from "next/image";
import styles from "../app/[locale]/page.module.css";

type Locales = "en" | "ro";

const LocaleSwitcher = () => {
  const t = useI18n();

  const changeLocale = useChangeLocale();
  const currentLocale = useCurrentLocale();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const flags = {
    en: enFlag,
    ro: roFlag,
  };

  const handleLocaleChange = (locale: Locales) => {
    changeLocale(locale);
    setDropdownOpen(false);
  };

  return (
    <div className={styles.langSwitcher}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p>{t("start.language")}</p>
        <Image
          src={flags[currentLocale]}
          alt={currentLocale}
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          style={{
            cursor: "pointer",
            width: "50px",
            height: currentLocale === "en" ? "50px" : "30px",
          }}
        />
      </div>

      {isDropdownOpen && (
        <div>
          {Object.keys(flags).map(
            (locale: string) =>
              locale !== currentLocale && (
                <Image
                  key={locale}
                  src={flags[locale]}
                  alt={locale}
                  onClick={() => handleLocaleChange(locale)}
                  style={{
                    cursor: "pointer",
                    width: "50px",
                    height: locale === "en" ? "50px" : "30px",
                  }}
                />
              )
          )}
        </div>
      )}
    </div>
  );
};

export default LocaleSwitcher;
