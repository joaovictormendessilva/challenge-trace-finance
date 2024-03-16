import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";

function App() {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/user/:id" element={} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
