import React, { useState, useRef, useEffect } from 'react';

import './App.css';

function App() {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  let totalPrice = 0;

  const priceRef = useRef();
  const enable1 = () => {
    setActive1(!active1);
  };
  const enable2 = () => {
    setActive2(!active2);
  };
  const enable3 = () => {
    setActive3(!active3);
  };
  const enable4 = () => {
    setActive4(!active4);
  };

  useEffect(() => {
    let allItems = document.querySelectorAll('.app__block-header');
    let activeItems = [];

    for (let item of allItems) {
      if (item.classList.contains('active')) {
        activeItems.push(item);
      }
    }
    if (activeItems.length === 1) {
      totalPrice = +activeItems[0].dataset.price;
    } else {
      totalPrice = activeItems.reduce((a, b) => +a + +b.dataset.price, 0);
    }
    priceRef.current.textContent = totalPrice;
    console.log(totalPrice);
  }, [active1, active2, active3, active4]);

  return (
    <div className="app">
      <div className="app__block">
        <div className="app__block-item">
          <div
            className={active1 ? 'app__block-header active' : 'app__block-header'}
            onClick={enable1}
            data-price={5000}>
            Title 1
          </div>
          <div className="app__block-body">
            <div>Какой-то текст</div>
            <div className="app__block-price">5000 рублей</div>
          </div>
        </div>
        <div className="app__block-item">
          <div
            className={active2 ? 'app__block-header active' : 'app__block-header'}
            onClick={enable2}
            data-price={3900}>
            Title 2
          </div>
          <div className="app__block-body">
            <div>Какой-то текст</div>
            <div className="app__block-price">3900 рублей</div>
          </div>
        </div>
        <div className="app__block-item">
          <div
            className={active3 ? 'app__block-header active' : 'app__block-header'}
            onClick={enable3}
            data-price={8900}>
            Title 3
          </div>
          <div className="app__block-body">
            <div>Какой-то текст</div>
            <div className="app__block-price">8900 рублей</div>
          </div>
        </div>
        <div className="app__block-item">
          <div
            className={active4 ? 'app__block-header active' : 'app__block-header'}
            onClick={enable4}
            data-price={12700}>
            Title 4
          </div>
          <div className="app__block-body">
            <div>Какой-то текст</div>
            <div className="app__block-price">12700 рублей</div>
          </div>
        </div>
      </div>
      <div className="app__total-price" ref={priceRef}>
        {totalPrice + ' рублей'}
      </div>
    </div>
  );
}

export default App;
