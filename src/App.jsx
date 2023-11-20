import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Components/routes';

// import Dashboard from './Components/Pages/Dashboard/Dashboard';
// import Admin from './Components/Pages/Admin/AdminList/AdminList';
// import Student from './Components/Pages/Student/StudentList/StudentList';
// import Examination from './Components/Pages/Examination/Examination';
// import Accountant from './Components/Pages/Accountant/Accountant';
// import Admission from './Components/Pages/Admission/Admission';
// import Academic from './Components/Pages/Academic/Academic';

//import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Sidebar>
          <Routes />
          {/* <Route path='/dashboard' element={<Dashboard/>} /> 
          <Route path='/user/admin' element={<Admin />} />
          <Route path='/user/student' element={<Student />} />
          <Route path='/examination' element={<Examination />} />
          <Route path='/accountant' element={<Accountant />} />
          <Route path='/admission' element={<Admission />} />
          <Route path='/academic' element={<Academic />} /> */}
          <Footer />
        </Sidebar>
      </BrowserRouter>
    </>
  );
}

export default App;

