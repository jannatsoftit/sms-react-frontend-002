import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Pages/Dashboard';
import User from './Components/Pages/User';
import Examination from './Components/Pages/Examination';
import Accountant from './Components/Pages/Accountant';
import Admission from './Components/Pages/Admission';
import Academic from './Components/Pages/Academic';
import './App.css';

import Sidebar from './Components/Sidebar';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
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
