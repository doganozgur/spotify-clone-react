import Sidebar from 'components/Sidebar';
import Playbar from 'components/Playbar';
import Content from 'components/Content';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <div className="wrapper">
          <Sidebar />
          <Content />
        </div>
        <Playbar />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
