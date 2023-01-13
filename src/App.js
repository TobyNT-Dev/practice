import { Login } from "./Components/LoginBox";
import "./App.css"
import { Home } from "./Pages/Home";
import { Nav } from "./Components/Nav";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;