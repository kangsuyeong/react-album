import axios from "axios";
import { useEffect, useState } from "react";
import Header from "@/components/common/header/Header";
import SearchBar from "@/components/common/searchBar/SearchBar";
import Nav from "@/components/common/navigation/Nav";
import Footer from "@/components/common/footer/Footer";
import Card from "./components/Card";
// CSS
import styles from "./styles/index.module.scss";

import { CardDTO } from "./types/card";

function index() {
  const [imgUrls, setImgUrls] = useState([]);
  const getData = async () => {
    // 오픈 API 호출
    const API_URL = "https://api.unsplash.com/search/photos";
    const API_key = "BQxx4yY-cWYtU5z5C3dZB8GuBU_GbLKDjupgrCJPcG4";
    const PER_PAGE = 30;

    const searchValue = "Korea";
    const pageValue = 100;

    try {
      const res = await axios.get(
        `${API_URL}?query=${searchValue}&client_id=${API_key}&page=${pageValue}&per_page=${PER_PAGE}`
      );
      console.log(res);
      // res.data.results라는 배열을 활용할 예정

      if (res.status === 200) {
        setImgUrls(res.data.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const cardList = imgUrls.map((card: CardDTO) => {
    return <Card data={card} key={card.id} />;
  });

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.page}>
      {/* 공통 헤더 UI 부분 */}
      <Header />
      {/* 공통 네이버게이션 UI 부분 */}
      <Nav />
      <div className={styles.page__contents}>
        <div className={styles.page__contents__introBox}>
          <div className={styles.wrapper}>
            <span className={styles.wrapper__title}>PhotoSplash</span>
            <span className={styles.wrapper__desc}>
              인터넷의 시각 자료 출처입니다. <br />
              모든 지역에 있는 크리에이터들의 지원을 받습니다.
            </span>
            {/* 검색창 UI 부분 */}
            <SearchBar />
          </div>
        </div>

        <div className={styles.page__contents__imageBox}>{cardList}</div>
      </div>
      {/* 공통 푸터 UI 부분 */}
      <Footer />
    </div>
  );
}

export default index;
