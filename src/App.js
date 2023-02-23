import logo from './logo.svg';
import './App.css';
import ImageCarousel from './Components/ImageCarousel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='row'>
            <div className='col-lg-4'>
              <ImageCarousel/>
            </div>
            <div className='col-lg-4'></div>
        </div>
      </header>
    </div>
  );
}

export default App;
