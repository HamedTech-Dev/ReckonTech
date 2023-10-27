import "./App.css";
import HomeLayout from "./home/layout";

function App() {
  window.addEventListener("wheel", function (event) {
    event.preventDefault();
    event.stopPropagation();
  });

  return <HomeLayout />;
}

export default App;
