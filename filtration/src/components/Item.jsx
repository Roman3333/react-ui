import React from 'react';
import { useMemo } from 'react';
import { useEffect } from 'react';

const Item = ({ name }) => {
  return <div className="cart">{name}</div>;
};

export default Item;
