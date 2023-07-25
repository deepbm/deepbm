import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import TechStack from './components/TechStack/TechStack';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Intro />
      <TechStack />
      <Experience />
    </div>
  );
}

export default App;
