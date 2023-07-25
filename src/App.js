import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import TechStack from './components/TechStack/TechStack';
import Experience from './components/Experience/Experience';
import Project from './components/Project/Project';
import Footer from './components/Footer/Footer';
import { useDarkMode } from './contexts/DarkMode';

function App() {
  const { darkMode } = useDarkMode();
  return (
    <div
      className='App'
      style={{ background: darkMode ? 'black' : '', color: darkMode ? 'white' : '' }}
    >
      <Navbar />
      <Intro />
      <TechStack />
      <Experience />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
