import './App.css';
import ReactRouter from './components/ReactRouter'
import NavbarState from './context/navbar/navbarState';


function App() {

  return (
    <NavbarState>
      <ReactRouter />
    </NavbarState>
  );
}

export default App;
