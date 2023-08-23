import React, { useState } from 'react';
import { Button, Space, Menu, Dropdown } from 'antd';
import { useDispatch } from 'react-redux';
import { fetchSearchCard } from '../redux/reducers/cardGroupReducer'; // Import your Redux action
import { AppDispatch } from '../redux/store/store';

const Filter: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const handleButtonClick = (value: string) => {
    setSelectedCountry(value);
    dispatch(fetchSearchCard(value));
  };

  const menu = (
    <Menu onClick={({ key }) => handleButtonClick(key)}>
      <Menu.Item key="American">American</Menu.Item>
      <Menu.Item key="Indian">Indian</Menu.Item>
      <Menu.Item key="Turkish">Turkish</Menu.Item>
      <Menu.Item key="African">African</Menu.Item>
      <Menu.Item key="Italian">Italian</Menu.Item>
    </Menu>
  );

  return (
    <Space direction="vertical" style={{ width: '15%' }}>
      <Dropdown overlay={menu} trigger={['hover']} placement="bottomLeft">
        <Button block size="small">
          {selectedCountry || 'Select a Country'}
        </Button>
      </Dropdown>
    </Space>
  );
};

export default Filter;


