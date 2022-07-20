import React, { useState } from 'react';
import Select, { OnChangeValue } from 'react-select';
import { IOption } from './app.interface';

const MultiSelect = () => {
  const [currentValue, setCurrentValue] = useState<string[]>([]);

  const options: IOption[] = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'banana', label: 'Banana' },
  ];

  const getValue = () => {
    return currentValue ? options.filter((item) => currentValue.indexOf(item.value) >= 0) : [];
  };

  const onChange = (value: OnChangeValue<IOption, boolean>) => {
    setCurrentValue((value as IOption[]).map((item: any) => item.value));
  };
  return (
    <div className="w-4/5 mx-auto my-10">
      <h2>Choise tasty</h2>
      <Select
        options={options}
        value={getValue()}
        onChange={onChange}
        isMulti
        placeholder="select flavors"
      />
    </div>
  );
};

export default MultiSelect;
