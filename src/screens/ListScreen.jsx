import React, {useState, useContext, useEffect} from 'react';
import {Layout, List} from 'antd';
import {Title, Search} from '../utils/elements';

import '../app.css';

import Spinner from '../components/Spinner';
import LibraryListItem from '../components/LibraryListItem';

import {LibraryContext} from '../app';
import {getData} from '../api';

import TEXT from '../../src/const';

const ListScreen = () => {
  const {setSelectedLibrary} = useContext(LibraryContext);
  const [libraryList, setLibraryList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [listToRender, setListToRender] = useState(libraryList);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    getData(setIsLoading).then(res => {
      setLibraryList(res);
      setListToRender(res);
    });
  }, []);

  useEffect(() => {
    if (!searchText) setListToRender(libraryList);
  }, [searchText]);

  const onSearchClick = (value) => {
    if (!value) return;

    setListToRender(libraryList.filter(item => item.territory.toLowerCase().startsWith(value.toLowerCase())));
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

      <List
        bordered
        dataSource={listToRender}
        renderItem={renderItem}
      />
    </Layout>
  );
};

export default ListScreen;
