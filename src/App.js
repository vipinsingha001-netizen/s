import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";

import DownloadApp from "./Components/DownloadApp";

const App = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <BrowserRouter>
        <Routes>
          {/* Terms and comditions */}
          <Route path="/" element={<Layout />}>
            <Route index element={<DownloadApp />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
