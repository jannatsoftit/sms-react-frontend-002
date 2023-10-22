import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
    <>
      {/* <Navbar title="TextUtils" name="hello" /> */}
      <Navbar title='TextUtils' />
      <div className='container'>
        <TextForm header='Enter Your Text To Analyze Below' />
      </div>
      <About />
    </>
  );
}

export default App;
