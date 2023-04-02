import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./components/Layout/Layout"
import TaskManager from "./pages/TasksManager/TasksManager";
import Trello from "./pages/Board/Trello";

const App = () => {
  return <div id="dashboard">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="tasks" element={<TaskManager />}></Route>
          <Route path="board" element={<Trello />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </div>;
};

export default App;
