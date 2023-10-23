import 'bootstrap/dist/css/bootstrap.min.css';
import product from './product';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import "./App.css";

function App() {
 

  return (
    <div className="container">
      <div className="card mt-5">
        <div className="card-body">
          <Image imageUrl={product.imageUrl} />
          <Name name={product.name} />
      
          <Description description={product.description} />
          <Price price={product.price} />
        </div>
      </div>
      
    </div>
  )
}

export default App;
