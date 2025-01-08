import { useState } from "react";
import Header from "@/components/common/header/Header";
import SearchBar from "@/components/common/searchBar/SearchBar";
import Nav from "@/components/common/navigation/Nav";
import Footer from "@/components/common/footer/Footer";
import Card from "./components/Card";
// CSS
import styles from "./styles/index.module.scss";

import { CardDTO } from "./types/card";
import { useRecoilValue } from "recoil";
import { imageData } from "@/recoil/selectors/imageSelectors";

function index() {
  const imgSelector = useRecoilValue(imageData);
  const [imgData, setImgData] = useState<CardDTO[]>([]);

  const CARD_LIST = imgSelector.data.results.map((card: CardDTO) => {
    return <Card data={card} key={card.id} />;
  });

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

        <div className={styles.page__contents__imageBox}>{CARD_LIST}</div>
      </div>
      {/* 공통 푸터 UI 부분 */}
      <Footer />
    </div>
  );
}

export default index;
