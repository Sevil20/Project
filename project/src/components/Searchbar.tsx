import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store/store';
import { fetchSearchCard } from '../redux/reducers/cardGroupReducer';

const SearchBar: React.FC = () => {
  const [localSearchQuery, setLocalSearchQuery] = useState<string | undefined>(undefined);
  const dispatch = useDispatch<AppDispatch>();
  let debounceTimeout: NodeJS.Timeout | null = null; // Track the debounce timeout

  const handleSearch = (value: string) => {
    setLocalSearchQuery(value);
    dispatch(fetchSearchCard(value));

    if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }
  
      // Set a new timeout to fetch data after 3 seconds
      debounceTimeout = setTimeout(() => {
        dispatch(fetchSearchCard(value));
      }, 3000);
  };

  const optionFilter = (input: string, option: any) => {
    const label = option?.label || '';
    return typeof label === 'string' && label.toLowerCase().includes(input.toLowerCase());
  };
  

  const optionSort = (optionA: any, optionB: any) => {
    const labelA = optionA?.label || '';
    const labelB = optionB?.label || '';
    if (typeof labelA === 'string' && typeof labelB === 'string') {
      return labelA.toLowerCase().localeCompare(labelB.toLowerCase());
    }
    return 0;
  };
  

  return (
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder="Search Recipes"
      optionFilterProp="children"
      filterOption={optionFilter}
      filterSort={optionSort}
      onSearch={handleSearch}
      value={localSearchQuery}
    />
  );
};

export default SearchBar;
