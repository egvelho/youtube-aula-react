import "@fontsource/roboto";
import "./App.css";
import { HomePage } from "./pages/HomePage/HomePage";
import { AppBar } from "./layout/AppBar/AppBar";
import { SideBar } from "./layout/SideBar";

function App() {
  return (
    <div>
      <AppBar />
      <HomePage />
    </div>
  );
}

export default App;
