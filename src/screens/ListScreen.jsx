import React, {useState, useContext, useEffect} from 'react';
import {Layout, List} from 'antd';
import {Title, Search} from '../utils/elements';

import '../app.css';

import Spinner from '../components/Spinner';
import LibraryListItem from '../components/LibraryListItem';
import DropDownList from '../components/DropDownList';

import {LibraryContext} from '../app';
import {getData} from '../api';

import {TEXT} from '../constants';

import {
  getSortMenuList,
  sortByLibraryNumber,
  sortByTerritory,
  filterLibraryListBySearchText,
} from '../utils/sort';

const sortMenuList = getSortMenuList();

const ListScreen = () => {
  const {setSelectedLibrary} = useContext(LibraryContext);
  const [libraryList, setLibraryList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [listToRender, setListToRender] = useState(libraryList);
  const [searchText, setSearchText] = useState('');
  const [sortMode, setSortMode] = useState(sortMenuList[0][0]);

  useEffect(() => {
    getData(setIsLoading).then(res => {
      setLibraryList(res);
      setListToRender(res);
    });
  }, []);

  useEffect(() => {
    const list = searchText ? [...listToRender] : [...libraryList];

    switch (sortMode) {
      case sortMenuList[1][0]:
        setListToRender(list.sort(sortByTerritory));
        break;
      case sortMenuList[2][0]:
        setListToRender(list.sort(sortByLibraryNumber));
        break;
      case sortMenuList[0][0]:
      default:
        setListToRender(list);
    }
  }, [sortMode, searchText]);

  const onSearchClick = (value) => {
    if (!value) return;

    setListToRender(filterLibraryListBySearchText(listToRender, value));
  };

  const onSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const renderItem = (item) => {
    const onItemClick = () => {
      setSelectedLibrary(item);
    };

    return (
      <LibraryListItem
        item={item}
        onClick={onItemClick}
      />
    );
  };

  if (isLoading) return (
    <Spinner/>
  );

  return (
    <Layout className="main">
      <Title level={3}>{TEXT.title}</Title>

      <Search
        value={searchText}
        onChange={onSearchTextChange}
        placeholder={TEXT.enterTerritory}
        enterButton={TEXT.search}
        size="large"
        onSearch={onSearchClick}
        className="search__input"
      />

      <DropDownList
          itemKey={sortMode}
          setItemKey={setSortMode}
          list={sortMenuList}
      />

      <List
        bordered
        dataSource={listToRender}
        renderItem={renderItem}
      />
    </Layout>
  );
};

export default ListScreen;
