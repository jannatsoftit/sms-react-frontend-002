import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer';
import Routes from './Components/routes';
import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';
//import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Sidebar>
          <Routes />
          <Footer />
        </Sidebar>
      </BrowserRouter>
    </>
  );
}

export default App;

