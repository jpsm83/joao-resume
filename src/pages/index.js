import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";

export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Footer />
    </div>
  );
}
