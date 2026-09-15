import Navbar from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/footer";
import Register from "./components/register";
import Login from "./components/login";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Register />
      <Login />
      <Home />
      <Footer />
    </div>
  );
}

export default App;