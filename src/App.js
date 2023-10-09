import logo from './logo.svg';
import './App.css';
import Body from './Components/Body'
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Resources from './Components/Resources';
import { useRef } from 'react';
function App() {
  const header = useRef(null);
  const body = useRef(null);
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <Body/>
      <Resources/>
    </div>
  );
}

export default App;
