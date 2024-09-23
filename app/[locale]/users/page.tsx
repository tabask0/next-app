import { Props } from "@/types/UserTypes";
import styles from "../page.module.css";
import { getI18n } from "@/locales/server";

const Users = async (context: Props) => {
  const t = await getI18n();

  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  console.log(data);

  return (
    <div className={styles.usersPage}>
      <h1>{t("start.users")}</h1>
      <div className={styles.usersPageContainer}>
        {data.map((data: any) => (
          <div key={data.id} className={styles.userContainer}>
            <h1>{data?.name}</h1>
            <p>{data?.username}</p>
            <p>{data?.email}</p>
            <p>{data?.address?.city}</p>
            <p>{data?.phone}</p>
            <p>{data?.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
