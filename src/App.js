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
        </header>
        <IconContainer />
        <a href="/" onClick={(e) => {e.preventDefault(); transition(PROJECTS)}}>
        <footer>
          <h3>
            Portfolio
          </h3>
          <h3>
            <strong>|||||||||||||||</strong><span id="empty">|||||</span>
          </h3>
          <div className="arrow bounce"></div>
        </footer>
        </a>
      </div>
    }
    {mode === PROJECTS && 
      <Projects />
    }
    </div>
  );
}

export default App;
