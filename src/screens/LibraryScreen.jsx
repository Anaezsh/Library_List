import React, {useContext} from 'react';
import {Layout, Breadcrumb} from 'antd';
import {Title} from '../utils/elements'

import '../app.css';

import TitleValueRow from '../components/TitleValueRow';

import {LibraryContext} from '../app';
import {getMappedLibrary} from '../utils/library';

import TEXT from '../const';

const LibraryScreen = () => {
  const {selectedLibrary} = useContext(LibraryContext);
  const mappedLibrary = getMappedLibrary(selectedLibrary);
  const {territory, ...library} = mappedLibrary;

  return (
    <Layout className="main">

      <Breadcrumb separator=">" id="bread">
        <Breadcrumb.Item href="/">{TEXT.list}</Breadcrumb.Item>
        <Breadcrumb.Item>{territory}</Breadcrumb.Item>
      </Breadcrumb>

      <Title level={4}>{territory}</Title>

      {Object.keys(library).map(key => {
        return (
          <TitleValueRow
            key={key}
            title={TEXT[key]}
            value={mappedLibrary[key]}
          />
        )
      })}
    </Layout>
  );
};

export default LibraryScreen;
