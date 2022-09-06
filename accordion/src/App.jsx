import { useState } from 'react';

function App() {
  const data = [
    {
      title: 'question 1',
      content:
        'gsgsgsgsdgsdg sgg s gsgsdgsd g sgs gsdgsdg gsdgsdgsdsdgsdg sdgsdgsdgsdgsdgsdgsdgsdgsd gsgsdgsdg gsgsgsgsdgsdg sgg s gsgsdgsd g sgs gsdgsdg gsdgsdgsdsdgsdg sdgsdgsdgsdgsdgsdgsdgsdgsd gsgsdgsdg gsgsgsgsdgsdg sgg s gsgsdgsd g sgs gsdgsdg gsdgsdgsdsdgsdg sdgsdgsdgsdgsdgsdgsdgsdgsd gsgsdgsdg',
    },
    {
      title: 'question 2',
      content:
        'gsgsgsgsdgsdg sgg s gsgsdgsd g sgs gsdgsdg gsdgsdgsdsdgsdg sdgsdgsdgsdgsdgsdgsdgsdgsd gsgsdgsdg gsgsgsgsdgsdg sgg s gsgsdgsd g sgs gsdgsdg gsdgsdgsdsdgsdg sdgsdgsdgsdgsdgsdgsdgsdgsd gsgsdgsdg gsgsgsgsdgsdg sgg s gsgsdgsd g sgs gsdgsdg gsdgsdgsdsdgsdg sdgsdgsdgsdgsdgsdgsdgsdgsd gsgsdgsdg',
    },
    {
      title: 'question 3',
      content:
        'gsgsgsgsdgsdg sgg s gsgsdgsd g sgs gsdgsdg gsdgsdgsdsdgsdg sdgsdgsdgsdgsdgsdgsdgsdgsd gsgsdgsdg gsgsgsgsdgsdg sgg s gsgsdgsd g sgs gsdgsdg gsdgsdgsdsdgsdg sdgsdgsdgsdgsdgsdgsdgsdgsd gsgsdgsdg gsgsgsgsdgsdg sgg s gsgsdgsd g sgs gsdgsdg gsdgsdgsdsdgsdg sdgsdgsdgsdgsdgsdgsdgsdgsd gsgsdgsdg',
    },
    {
      title: 'question 4',
      content:
        'gsgsgsgsdgsdg sgg s gsgsdgsd g sgs gsdgsdg gsdgsdgsdsdgsdg sdgsdgsdgsdgsdgsdgsdgsdgsd gsgsdgsdg gsgsgsgsdgsdg sgg s gsgsdgsd g sgs gsdgsdg gsdgsdgsdsdgsdg sdgsdgsdgsdgsdgsdgsdgsdgsd gsgsdgsdg gsgsgsgsdgsdg sgg s gsgsdgsd g sgs gsdgsdg gsdgsdgsdsdgsdg sdgsdgsdgsdgsdgsdgsdgsdgsd gsgsdgsdg',
    },
    {
      title: 'question 5',
      content:
        'gsgsgsgsdgsdg sgg s gsgsdgsd g sgs gsdgsdg gsdgsdgsdsdgsdg sdgsdgsdgsdgsdgsdgsdgsdgsd gsgsdgsdg gsgsgsgsdgsdg sgg s gsgsdgsd g sgs gsdgsdg gsdgsdgsdsdgsdg sdgsdgsdgsdgsdgsdgsdgsdgsd gsgsdgsdg gsgsgsgsdgsdg sgg s gsgsdgsd g sgs gsdgsdg gsdgsdgsdsdgsdg sdgsdgsdgsdgsdgsdgsdgsdgsd gsgsdgsdg',
    },
  ];
  const [selected, setSelected] = useState(null);

  const changeAccaprdion = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="container">
      <div className="accardion">
        {data.map((item, index) => {
          return (
            <div className="accardion__item" key={index}>
              <div
                className={selected == index ? 'accardion__title show' : 'accardion__title'}
                onClick={() => changeAccaprdion(index)}>
                {item.title}
              </div>
              <div className={selected == index ? 'accardion__content show' : 'accardion__content'}>
                {item.content}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
