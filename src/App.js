import './App.css';
import ReactRouter from './components/ReactRouter'
import NavbarState from './context/navbar/navbarState';
import PDataState from './context/pageData/pDataState';


function App() {

  return (
    <NavbarState>
      <PDataState>
        <ReactRouter />
      </PDataState>
    </NavbarState>
  );
}

export default App;
