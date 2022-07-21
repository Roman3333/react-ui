import { useState, useEffect } from 'react';
import PaginatedItems from './components/PaginatedItems';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="App">
      <PaginatedItems data={items} />
    </div>
  );
}

export default App;
