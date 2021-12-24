
import './App.css';
import Header from './Header';
import Recommended from './Recommended';
import Sidebar from './Sidebar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Search from './Search'
function App() {
  return (
    <Router>
    <div className="app">
     <Header />
     <div className="app_body">
       <Sidebar/>
       <Routes>
        <Route exact path="/" element={<Recommended/>} />
        <Route path="/search/" element={<Search/>}/>
       </Routes>
     </div>
    </div>
    </Router>
  );
}

export default App;
