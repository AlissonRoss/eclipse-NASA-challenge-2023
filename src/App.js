import logo from './logo.svg';
import './App.css';
import Body from './Components/Body'
import Header from './Components/Header';
import NavBar from './Components/NavBar';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
