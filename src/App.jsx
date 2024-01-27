import Carousel from './Carousel';
import data from './Resources/images.json';
import './carousel.css';

function App() {
  return (
    <div className='App'>
      <Carousel data={data.slides} />
    </div>
  );
}

export default App;
