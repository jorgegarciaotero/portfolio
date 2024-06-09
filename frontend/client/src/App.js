import './App.css';
import Home from './PortfolioContainer/Home/Home';
import AboutMe from './PortfolioContainer/AboutMe/AboutMe';
import Resume from './PortfolioContainer/Resume/Resume';
import Project from './PortfolioContainer/Projects/Project';
import ContactMe from './PortfolioContainer/ContactMe/ContactMe';


function App() {

  return (
    <div className="App">
      <Home id="Home" />
      <AboutMe id="About" />
      <Resume id="Resume"/>
      <Project id="Projects"/>
      <ContactMe  id="Contact"/>
    </div>
  );
}

export default App;
