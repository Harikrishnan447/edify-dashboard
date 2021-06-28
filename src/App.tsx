import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Blogs from './pages/Blogs';
import Events from './pages/Events';
import Leave from './pages/Leave';
import Timesheet from './pages/Timesheet';
import BlogDetails from './pages/Blog-details';
import { BrowserRouter as Router,
         Route, 
         Redirect, 
         Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Sidebar />
        <div className="md:ml-64">
          <div className="bg-gray-100 pt-24 pb-28 px-3 md:px-8 h-screen">
                  <Switch>
                      <Route exact path="/" component={Dashboard} />
                      <Route exact path="/blogs" component={Blogs}/>
                      <Route exact path="/leave" component={Leave}/>
                      <Route exact path="/events" component={Events}/>
                      <Route exact path="/timesheet" component={Timesheet}/>
                      <Route exact path="/blog-details" component={BlogDetails}/>
                      <Redirect from="*" to="/" />
                  </Switch>
                  </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
