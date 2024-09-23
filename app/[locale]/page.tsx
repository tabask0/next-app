"use client";
import { useI18n } from "@/locales/client";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LocaleSwitcher from "@/components/LangSwitcher";

export default function Home() {
  const router = useRouter();
  const t = useI18n();

  const [user, setUser] = useState();

  const handleUserSearch = () => {
    router.push(`/user/${user}`);
  };

  return (
    <div className={styles.page}>
      <h1>{t("hello")}</h1>
      <p>{t("start.sample")}</p>
      <p>
        {t("start.list")}{" "}
        <a style={{ color: "lightblue", fontSize: "20px" }} href="/users">
          {t("here")}
        </a>
      </p>
      <p>{t("or")}</p>
      <p>
        {t("start.single")} <span style={{ color: "lightblue" }}> ↓</span>
      </p>
      <p>{t("start.type")}</p>
      <input type="number" onChange={(e: any) => setUser(e.target.value)} />
      <button onClick={handleUserSearch}>{t("start.search")}</button>
      <LocaleSwitcher />
    </div>
  );
}
