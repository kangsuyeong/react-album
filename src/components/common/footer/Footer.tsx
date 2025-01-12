import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { imageData } from "@/recoil/selectors/imageSelectors";
import { pageState } from "@/recoil/atoms/pageState";
import { useEffect, useState } from "react";
import styles from "./Footer.module.scss";
import { searchState } from "@/recoil/atoms/searchState";

function Footer() {
  const imgSelector = useRecoilValueLoadable(imageData);
  const search = useRecoilValue(searchState);
  const [page, setPage] = useRecoilState(pageState);
  const [step, setStep] = useState(0);

  useEffect(() => {
    setStep(0);
  }, [search]);

  // 페이지 리스트 UI 생성
  const newArr: number[] = new Array();
  for (let i = 1; i <= imgSelector.contents.total_pages; i++) {
    newArr.push(i);
  }

  // 몇개의 그룹으로 나누는지
  const divide = Math.ceil(newArr.length / 10);
  const res = [];

  for (let i = 0; i <= divide; i++) {
    // 배열 0부터 n개 씩 잘라 새 배열에 넣기
    res.push(newArr.splice(0, 10));
  }

  // -----------------------------------------------------------------------------------------------------------------
  const moveToPage = (selected: number) => {
    setPage(selected);
  };

  const moveToPrev = () => {
    if (step === 0) return;
    else {
      setStep(step - 1);
      setPage(res[step - 1][0]);
    }
  };

  const moveToNext = () => {
    if (step < res[step].length - 1) {
      setStep(step + 1);
      setPage(res[step + 1][0]);
    } else return;
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.pagination}>
        <button className={styles.pagination__button} onClick={moveToPrev}>
          <img src="src/assets/icons/icon-arrowLeft.svg" alt="" />
        </button>
        {/* 변경될 UI 부분 */}
        {/* <span>1</span> */}
        {res[step]?.map((item: number, index: number) => (
          <button
            className={
              index === page - 1 - step * 10
                ? `${styles.pagination__button} ${styles.active}`
                : `${styles.pagination__button} ${styles.inactive}`
            }
            key={item}
            onClick={() => moveToPage(item)}
          >
            {item}
          </button>
        ))}
        <button className={styles.pagination__button} onClick={moveToNext}>
          <img src="src/assets/icons/icon-arrowRight.svg" alt="" />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
