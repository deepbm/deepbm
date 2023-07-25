import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import TechStack from './components/TechStack/TechStack';
import Experience from './components/Experience/Experience';
import Project from './components/Project/Project';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Intro />
      <TechStack />
      <Experience />
      <Project />
    </div>
  );
}

export default App;
