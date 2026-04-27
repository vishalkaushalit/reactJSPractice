import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes/route";
import Home from "./pages/Home";
import DataWithSearch from "./pages/DataWithSearch";
import DataWithPagination from "./pages/DataWithPagination";
import DeleteMutation from "./pages/DeleteMutation";
import UpdateMutation from "./pages/UpdateMutation";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.DATAWITHSEARCH} element={<DataWithSearch />} />
        <Route path={ROUTES.DATAWITHPAGINATION} element={<DataWithPagination />} />
        <Route path={ROUTES.DELETEMUTATION} element={<DeleteMutation />} />
        <Route path={ROUTES.UPDATEMUTATION} element={<UpdateMutation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
