import { useState } from "react";
import styles from "./searchBar.module.scss";
import { useRecoilState } from "recoil";
import { searchState } from "@/recoil/atoms/searchState";

function SearchBar() {
  const [search, setSearch] = useRecoilState(searchState);
  const [text, setText] = useState("");

  const onChange = (event) => {
    console.log(event.target.value);
    setText(event.target.value);
  };

  const onSearch = () => {
    if (text === "") {
      // input 태그 안에 빈 값을 검색하였을 때 => default searching
      setSearch("Korea");
    } else {
      setSearch(text); // 작성한 Input value 값 전달
    }
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (text === "") {
        // input 태그 안에 빈 값을 검색하였을 때 => default searching
        setSearch("Korea");
      } else {
        setSearch(text); // 작성한 Input value 값 전달
      }
    }
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBar__search}>
        <input
          type="text"
          placeholder="찾으실 이미지를 검삭하세요."
          className={styles.searchBar__search__input}
          onChange={onChange}
          onKeyDown={handleKeyDown}
        />
        <img src="src/assets/icons/icon-search.svg" alt="" onClick={onSearch} />
      </div>
    </div>
  );
}

export default SearchBar;
