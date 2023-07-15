import BoostAD from "./components/BoostAD";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LinkShortener from "./components/LinkShortener";
import Statistics from "./components/Statistics";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <LinkShortener />
      <Statistics />
      <BoostAD title="Boost your links today" />
      <Footer />
    </div>
  );
}

export default App;
