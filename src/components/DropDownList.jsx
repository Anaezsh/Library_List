import React, {useState, useMemo} from 'react';
import {Menu, Dropdown, Icon} from 'antd';
import {MenuItem, Text} from '../utils/elements'

import '../app.css';

import {TEXT} from '../constants';

const DropDownList = (props) => {
  const {list, itemKey, setItemKey, isOpen} = props;
  const [isVisible, setIsVisible] = useState(isOpen ? isOpen : false);
  const listMap = useMemo(() => Object.fromEntries([...list]),[list]);

  const onMenuClick = ({key}) => {
      setItemKey(key);
      setIsVisible(false);
  };

   const handleVisibleChange = flag => {
       setIsVisible(flag);
    };

  const renderMenu = () => {
      return (
          <Menu onClick={onMenuClick}>
              {list.map(item => {
                  const [key, value] = item;

                  return (
                      <MenuItem key={key}>{value}</MenuItem>
                  )
              })}
          </Menu>
      )
  };

  return (
      <Dropdown
          overlay={renderMenu}
          visible={isVisible}
          onVisibleChange={handleVisibleChange}
      >
          <Text className="sort__text">
              {TEXT.sorting}: {listMap[itemKey]}
              <Icon type="down" />
          </Text>
      </Dropdown>
  );
};

export default React.memo(DropDownList);
