import './App.css';
import FlashMain from './Components/FlashMain/FlashMain';
import MainNavigation from './Components/MainNavigation/MainNavigation';
import AboutMe from './Components/AboutMe/AboutMe';
import Education from './Components/Education/Education';
import Skills from './Components/Skills/Skills';
import Footer from './Components/Footer/Footer';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <br />
      <FlashMain />
      <AboutMe />
      <br />
      <Education />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
