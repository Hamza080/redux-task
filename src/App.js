import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profile";
import Data from "./components/Data";
function App() {
  console.log("hello");
  return (
    <div className="App">
      <Data />
      {/* <Profile /> */}
    </div>
  );
}

export default App;
