import { useQuery } from "react-query";
import { Wrapper } from "./App.styles";
import { CartItemType } from "./types";

const getProducts = async (): Promise<CartItemType[]> => 
  await (await fetch('https://fakestoreapi.com/products')).json();


const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );

  console.log(data);
  // if (data && data[0] !== undefined) console.log(data[0].category);

  // data?.forEach((data) => {
  //   console.log(data.category);
  // });

  // data?.forEach(rate => console.log(rate.rating));

  return (
    <>
      <div className="App">
        <h1>Hello world!</h1>

        {data?.map((data) => (
          <div key={data.id}>
            <p>id: {data.id}</p>
            <p>category: {data.category}</p>
            <p>description: {data.description}</p>
            <p>image: {data.image}</p>
            <p>price: {data.price}</p>
            <p>rating: {data.rating.rate}</p>
            <p>rating count: {data.rating.count}</p>
            <p>----------------------------------------------------------------------------------------------------------------------------------------------------</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
