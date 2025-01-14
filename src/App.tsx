import { Routes, Route } from "react-router-dom";
import MainPage from "@pages/index/index";
import BookmarkPage from "@pages/bookmark/index";

function App() {
  return (
    <Routes>
      {/* 기본 경로를 명확히 나타내고 싶다면 index를 사용하는 것이 좋다. */}
      <Route index path="/" element={<MainPage />} />
      <Route path="/search/:id" element={<MainPage />} />
      <Route path="/bookmark" element={<BookmarkPage />} />
    </Routes>
  );
}

export default App;
