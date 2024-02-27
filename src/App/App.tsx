import AboutMe from "../components/AboutMe";
import SectionBudget from "../components/Budget";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import MyWorks from "../components/MyWorks";
import SectionComments from "../components/SectionComments";

function App() {
  return (
    <>
      <Header />
      <Main />
      <AboutMe />
      <MyWorks />
      <SectionComments />
      <SectionBudget />
      <Footer />
    </>
  );
}

export default App;
