import React from 'react';

export default function Buttons({ setName, filters }) {
  const changeFilter = (value) => {
    setName(value);
  };

  return (
    <>
      {filters.map((button, index) => {
        return (
          <button
            onClick={() => {
              changeFilter(button);
            }}
            key={index}>
            {button}
          </button>
        );
      })}
    </>
  );
}
