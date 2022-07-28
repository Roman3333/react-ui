import React, { useState } from 'react';
import Buttons from './components/Buttons';

import Item from './components/Item';

function App() {
  const [name, setName] = useState('all');
  const filters = ['all', 'chair', 'table', 'cupboard'];
  const [test, setTest] = useState([
    { id: 1, name: 'Chair 1', value: 'chair' },
    { id: 2, name: 'Chair 2', value: 'chair' },
    { id: 3, name: 'Table 1 ', value: 'table' },
    { id: 4, name: 'Table 2', value: 'table' },
    { id: 5, name: 'Cupboard 1', value: 'cupboard' },
    { id: 6, name: 'Cupboard 2', value: 'cupboard' },
    { id: 7, name: 'Cupboard 3', value: 'cupboard' },
  ]);

  return (
    <div className="App">
      <div className="container">
        <Buttons setName={setName} filters={filters} />
        <div className="items">
          {name == 'all'
            ? test.map((item) => {
                return <Item name={item.name} key={item.id} />;
              })
            : test
                .filter((item) => item.value == name)
                .map((item) => {
                  return <Item name={item.name} key={item.id} />;
                })}
        </div>
      </div>
    </div>
  );
}

export default App;
