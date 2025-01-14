import { useState } from "react";
import { useRecoilState } from "recoil";
import { searchState } from "@/recoil/atoms/searchState";
import { pageState } from "@/recoil/atoms/pageState";

// CSS
import styles from "./searchBar.module.scss";

import searchIcon from "@assets/icons/icon-search.svg";

function SearchBar() {
  const [search, setSearch] = useRecoilState(searchState);
  const [page, setPage] = useRecoilState(pageState);
  const [text, setText] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const onSearch = () => {
    if (text === "") {
      // input 태그 안에 빈 값을 검색하였을 때 => default searching
      setSearch("Korea");
      setPage(1);
    } else {
      setSearch(text); // 작성한 Input value 값 전달
      setPage(1);
    }
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (text === "") {
        // input 태그 안에 빈 값을 검색하였을 때 => default searching
        setSearch("Korea");
        setPage(1);
      } else {
        setSearch(text); // 작성한 Input value 값 전달
        setPage(1);
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
        <img src={searchIcon} alt="" onClick={onSearch} />
      </div>
    </div>
  );
}

export default SearchBar;
