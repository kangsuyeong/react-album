import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import logoImg from "@assets/images/image-logo.png";

export default function Header() {
  const navigate = useNavigate();

  // 북마크 페이지로 이동
  const moveToPage = (filter: string) => {
    if (filter === "main") navigate("/");
    if (filter === "bookmark") navigate("/bookmark");
  };

  return (
    <header className={styles.header}>
      {/* 로고박스 */}
      <div
        className={styles.header__logoBox}
        onClick={() => moveToPage("main")}
      >
        <img
          src={logoImg}
          alt="로고 이미지"
          className={styles.header__logoBox__logo}
        />
        <span className={styles.header__logoBox__title}>PhotoSplash</span>
      </div>
      {/* 프로필 박스 */}
      <div className={styles.header__profileBox}>
        <button className={styles.header__profileBox__button}>사진제출</button>
        <button
          className={styles.header__profileBox__button}
          onClick={() => moveToPage("bookmark")}
        >
          북마크
        </button>
        <span className={styles.header__profileBox__userName}>강수영</span>
      </div>
    </header>
  );
}
