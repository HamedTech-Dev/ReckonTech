import "./App.css";
import ReactGA from "react-ga";
import HomeLayout from "./home/layout";
import { useEffect } from "react";

ReactGA.initialize("G-0VWQVR6ZZE");
function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return <HomeLayout />;
}

export default App;
