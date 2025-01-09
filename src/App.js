import { useEffect, useState } from "react";
import "./App.css";

import Loading from "./Components/utils/Loading";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomeDashboardComponents/HomePage";
import TentangPage from "./Components/TentangComponents/TentangPage";
import KontakPage from "./Components/KontakComponents/KontakPage";
import DetailItemPage from "./Components/DetailItemComponent/DetailItemPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data) here
    const fetchData = async () => {
      // Simulate a delay (e.g., 2000 milliseconds)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Set loading to false once data is loaded
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <BrowserRouter>

            <Routes>
              <Route path="/" element={<HomePage />} />              
              <Route path="/tentang" element={<TentangPage />} />              
              <Route path="/kontak" element={<KontakPage />} />              
              <Route path="/detail" element={<DetailItemPage />} />              
           </Routes>

        </BrowserRouter>
      )}
    </>
  );
}

export default App;
