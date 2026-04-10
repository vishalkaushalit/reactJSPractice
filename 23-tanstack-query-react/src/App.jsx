import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes/route";
import Login from "./auth/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
