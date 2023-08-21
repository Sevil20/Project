import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/reducers/cardGroupReducer';
import { AppDispatch } from '../redux/store/store';




const SearchBar: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
    const dispatch = useDispatch<AppDispatch>();
  
    const handleSearch = (value: string) => {
      setSearchQuery(value);
      dispatch(setSearchQuery(value));
    };
  
    const options = [
      {
        value: '1',
        label: 'Pizza',
      },
      {
        value: '2',
        label: 'Burger',
      },
      {
        value: '3',
        label: 'Cake'
      },
      {
        value:'4',
        label:'Salad'
      },
      {
        value:'5',
        label:'Chicken'
      }
      // Add more options as needed
    ];
  
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
        options={options} // Provide the options array here
        onSearch={handleSearch}
        value={searchQuery}
      />
    );
  };
export default SearchBar;  

