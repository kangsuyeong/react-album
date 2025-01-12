import { useEffect, useState } from "react";
import Header from "@/components/common/header/Header";
import Card from "./components/Card";
// CSS
import styles from "./styles/index.module.scss";

function index() {
  const [data, setData] = useState([]);
  const getData = () => {};
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.page}>
      {/* 공통 헤더 UI 부분 */}
      <Header />
      <main className={styles.page__contents}>
        <Card />
      </main>
    </div>
  );
}

export default index;
