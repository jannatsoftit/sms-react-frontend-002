import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';

function App() {
  return (
    <>
     {/* <Navbar title="TextUtils" name="hello" /> */}
     <Navbar title="TextUtils" />
     <div className='container'>
     <Form header="Enter Your Text To Analyze Below" />
     </div>
    </>
  );
}

export default App;
