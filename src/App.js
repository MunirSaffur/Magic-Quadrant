import './App.css';
import NavBar from './components/navBar';
import CartTitle from './components/cartTitle/cartTitle'
import Cart from './components/cart/cart';
import CartTotal from './components/cartTotal';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="container">
      <CartTitle />
      <div className="row">
        <div className="col-md-6">
          <Cart />
        </div>
        <div className="col-md-6">
          <CartTotal />
        </div>
      </div>
      </main>
    </div>
  );
}

export default App;
