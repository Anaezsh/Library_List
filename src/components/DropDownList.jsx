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
          <Menu onClick={onMenuClick} className="sort__menu">
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
          <div className="sort__text">
              <Text className="sort__text_title">
                  {TEXT.sorting}:
              </Text>
              <Text type="secondary">
                  {listMap[itemKey]}
              </Text>
              <Icon type="down" className="sort__icon"/>
          </div>
      </Dropdown>
  );
};

export default React.memo(DropDownList);
