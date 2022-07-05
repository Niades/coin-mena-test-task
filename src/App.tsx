import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/main";
import { HomeRoute } from "./routes/home";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
