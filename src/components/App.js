import Navbar from "./Navbar";
import "./App.css";
import RentalList from "./RentalList";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="container-main">
      <Navbar />
      <RentalList />
      <Footer />
    </div>
  );
}

export default App;
