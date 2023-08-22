import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import { useDispatch } from 'react-redux';
import { setSearchQuery as setReduxSearchQuery } from '../redux/reducers/cardGroupReducer';
import { AppDispatch } from '../redux/store/store';
import axios from 'axios'; // Import axios
import { fetchSearchCard } from '../redux/reducers/cardGroupReducer';

const SearchBar: React.FC = () => {
  const [localSearchQuery, setLocalSearchQuery] = useState<string | undefined>(undefined);
  const [options, setOptions] = useState<any[]>([]); // State to hold fetched options
  const dispatch = useDispatch<AppDispatch>();
  

  const handleSearch = (value: string) => {
    setLocalSearchQuery(value);
    dispatch(fetchSearchCard(value));
  };
  

  return (
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder="Search Recipes"
      optionFilterProp="children"
      filterOption={(input, option) => (option?.label ?? '').includes(input)}
      filterSort={(optionA, optionB) =>
        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
      }
      options={options} // Use fetched options
      onSearch={handleSearch}
      value={localSearchQuery}
    />
  );
};

export default SearchBar;
