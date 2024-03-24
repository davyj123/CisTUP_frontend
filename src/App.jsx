import { BrowserRouter, Routes, Route } from "react-router-dom";

import MyImages from "./assets/pages/MyImages";
import Home from "./assets/pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="images" element={<MyImages/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
