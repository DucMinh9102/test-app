import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/login/Login';
import HOSE from './component/HOSE/HOSE';
import HNX from './component/HNX/HNX';
import Layout from './component/layout/Layout';

const App = () => {
  return (
    <Router>
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/hose" element={<Layout><HOSE /></Layout>} />
                <Route path="/hnx" element={<Layout><HNX /></Layout>} />
            </Routes>
        </div>
    </Router>
  );
};

export default App;