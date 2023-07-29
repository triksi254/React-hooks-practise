import "./App.css";
import Blog from "./todoApp/blogApp/Blog";
import BlogDetails from "./todoApp/blogApp/BlogDetails";
import Create from "./todoApp/blogApp/Create";
import Navbar from "./todoApp/blogApp/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Usecallback from "./components/Usecallback";
// import Usememo from "./components/Usememo";
// import Usereducer from "./components/Usereducer";
// import Todoapp from "./todoApp/Todoapp";
// import Advancedtodoapp from "./todoApp/todoApplication/Advancedtodo";
// import Usehook1 from "./components/Usehook1";
// import Usehook2 from "./components/Usehook2";

// import Userform from "./components/Userform";
// import Counter from "./components/Counter.js";
// import Hello from "./components/Hello";
// import Toggle from "./components/Toggle";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Counter /> */} {/* <Hello /> */} {/* <Toggle /> */}{" "}
        {/* <Userform /> */} {/* <Usehook1 /> */} {/* <Usehook2 /> */}{" "}
        {/* <Usecallback /> */} {/* <Usememo /> */} {/* <Usereducer /> */}{" "}
        {/* <Todoapp /> */}
        {/* <Advancedtodoapp /> */}
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Blog />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
