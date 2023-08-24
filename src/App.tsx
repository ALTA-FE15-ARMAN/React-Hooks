import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import News from "./pages/news";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<News />} path="/news" />
        <Route element={<Detail />} path="/detail/:movieId" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;