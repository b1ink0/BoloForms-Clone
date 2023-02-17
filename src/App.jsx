import "./App.scss";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import ForthSection from "./components/ForthSection";
import FifthSection from "./components/FifthSection";
import SixthSection from "./components/SixthSection";
import SeventhSection from "./components/SeventhSection";
import EighthSection from "./components/EighthSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SideDots from "./components/sub-components/SideDots";

function App() {
  return (
    <>
      <Navbar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <ForthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EighthSection />
      <FAQSection />
      <Footer />
      <SideDots/>
    </>
  );
}

export default App;
