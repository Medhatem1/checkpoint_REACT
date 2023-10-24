import 'bootstrap/dist/css/bootstrap.min.css';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import "./App.css";
import product from './product';

function App() {
 

  return (
    <div className="container">
      <div className="card mt-5">
        <div className="card-body">
      <Image  />
          <Name />
          <Description />
          <Price  />
        </div>
      </div>
      
    </div>
  )
}

export default App;
