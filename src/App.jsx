import "./App.css";
import Profile from "./components/profile/Profile";
import Auth from "./pages/auth/Auth";
import Home from "./pages/home/Home";
function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "50%", left: "-10%" }}></div>
      {/* <Home /> */}
      <Profile/>
      {/* <Auth/> */}
    </div>
  );
}

export default App;
