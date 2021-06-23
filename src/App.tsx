import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Blogs from './pages/Blogs';
import Events from './pages/Events';
import Leave from './pages/Leave';
import Timesheet from './pages/Timesheet';
import { BrowserRouter as Router,
         Route, 
         Redirect, 
         Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Sidebar />
        <div className="bg-white flex flex-row">
              <div className="w-1/5 h-screen flex flex-col items-center bg-white">
                
              </div>
              <div className="w-4/5 h-screen bg-gray-100">
                  <Switch>
                      <Route exact path="/" component={Dashboard} />
                      <Route exact path="/blogs" component={Blogs}/>
                      <Route exact path="/leave" component={Leave}/>
                      <Route exact path="/events" component={Events}/>
                      <Route exact path="/timesheet" component={Timesheet}/>
                      <Redirect from="*" to="/" />
                  </Switch>
              </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
