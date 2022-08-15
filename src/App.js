import './App.css';
import ImageSlider from './Components/ImageSlider';
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import { SliderData } from './Components/SliderData'

function App() {
  return (
    <>
      <Navbar />
      <ImageSlider slides={SliderData} />
      <Product />
    </>
  );
}

export default App;
