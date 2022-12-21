import ExtraShop from './ExtraShop';
import Navbar from './Navbar';
import Shop from './Shop';

function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
    <Shop/>
    <ExtraShop/>
    </div>

    </>
  );
}

export default App;
