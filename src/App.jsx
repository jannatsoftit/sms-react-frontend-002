import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Dashboard from './Components/Pages/Dashboard/Dashboard';
import Admin from './Components/Pages/User/Admin';
import Student from './Components/Pages/User/Student';
import Examination from './Components/Pages/Examination/Examination';
import Accountant from './Components/Pages/Accountant/Accountant';
import Admission from './Components/Pages/Admission/Admission';
import Academic from './Components/Pages/Academic/Academic';

//import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Sidebar>
          <Routes>
            <Route path='/dashboard' element={<Dashboard/>} /> 
            <Route path='/user/admin' element={<Admin />} />
            <Route path='/user/student' element={<Student />} />
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

