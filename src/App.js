import './App.css';
import IconContainer from './components/IconContainer';
import Projects from './components/Projects';

import useVisualMode from "./hooks/useVisualMode";
const MAIN = "MAIN";
const PROJECTS = "PROJECTS";

function App() {
  const { mode, transition, back } = useVisualMode(
    MAIN
  );

  return (
    <div>
    {mode === MAIN && 
      <div>
        <header>
          <h1>Sydney Sisco</h1>
          <h2>Full Stack Developer</h2>
          <IconContainer />
        </header>
        <a href="/" onClick={e => {e.preventDefault(); transition(PROJECTS)}}>
        <footer className="volume">
          <h3>Portfolio</h3>
          <h3>|||||||||||||||<span id="empty">|||||</span></h3>
          <div className="arrow bounce"></div>
        </footer>
        </a>
      </div>
    }
    {mode === PROJECTS && 
      <Projects onHome={back}/>
    }
    </div>
  );
}

export default App;
