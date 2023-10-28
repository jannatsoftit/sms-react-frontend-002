import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Pages/Dashboard';
import User from './Components/Pages/User';
import Examination from './Components/Pages/Examination';
import Accountant from './Components/Pages/Accountant';
import Admission from './Components/Pages/Admission';
import Academic from './Components/Pages/Academic';
import './App.css';

//import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from './Components/Sidebar';
//import Home from './Components/Home';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Sidebar>
          <Navbar />
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            {/* <Route path='/home' element={<Home/>} /> */}
            <Route path='/user' element={<User />} />
            <Route path='/examination' element={<Examination />} />
            <Route path='/accountant' element={<Accountant />} />
            <Route path='/admission' element={<Admission />} />
            <Route path='/academic' element={<Academic />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
}

export default App;
