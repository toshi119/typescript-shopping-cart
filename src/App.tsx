import { Wrapper } from "./App.styles";
import { CartItemType } from "./types";

const getProducts = async () => {
  await (await fetch('https://fakestoreapi.com/products')).json();
};

const App = () => {
  return (
    <div className="App">
      <h1>Hello world!</h1>
    </div>
  );
}

export default App;
