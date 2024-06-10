import logo from './logo.svg';
import './App.css';
import FocusInput from './components/FocusInput';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';

function App() {
  return (
    <div className="App">
     <FocusInput/><br/>
     <ClassTimer/><br/>
     <HookTimer/>
    </div>
  );
}

export default App;
