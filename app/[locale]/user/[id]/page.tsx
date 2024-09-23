"use client";
import { Props } from "@/types/UserTypes";
import styles from "../../page.module.css";
import { useRouter } from "next/navigation";

const User = async (context: Props) => {
  const { id } = context.params;
  const router = useRouter();

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  if (!data.id) {
    return router.push("/404");
  }

  return (
    <div className={styles.usersPage}>
      <div className={styles.userContainer}>
        <h1 className={styles.userTitle}>{data?.name}</h1>
        <p className={styles.user}>{data?.username}</p>
        <p className={styles.user}>{data?.email}</p>
        <p className={styles.user}>{data?.address?.city}</p>
        <p className={styles.user}>{data?.phone}</p>
        <p className={styles.user}>
          <a
            className={styles.userWebsite}
            href={`https://${data?.website}`}
            target="_blank"
            rel="noreferrer"
          >
            {data?.website}
          </a>
        </p>
      </div>
    </div>
  );
};

export default User;
