import React, { useState } from 'react';
import Select, { OnChangeValue } from 'react-select';
import { IOption } from './app.interface';

const SingleSelect = () => {
  const [currentValue, setCurrentValue] = useState<string>('chocolate');

  const options: IOption[] = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const getValue = () => {
    return currentValue ? options.find((item) => item.value == currentValue) : '';
  };

  const onChange = (value: any) => {
    setCurrentValue((value as IOption).value);
  };
  return (
    <div className="w-4/5 mx-auto my-10">
      <h2>Choise tasty</h2>
      <Select
        options={options}
        value={getValue()}
        onChange={onChange}
        placeholder="select flavor"
        isMulti={false}
      />
    </div>
  );
};

export default SingleSelect;
