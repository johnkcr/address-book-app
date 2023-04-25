import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TableView from "./components/TableView";
import CardView from "./components/CardView";

const App = () => {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<TableView />} />
        <Route path="/card" element={<CardView />} />
      </Routes>
    </Router>
  );
};

export default App;
