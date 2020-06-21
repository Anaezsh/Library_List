import React, {useContext} from 'react';
import {Layout, Breadcrumb} from 'antd';
import {Title, BreadcrumbItem} from '../utils/elements'

import '../app.css';

import TitleValueRow from '../components/TitleValueRow';

import {LibraryContext} from '../app';
import {getMappedLibrary} from '../utils/library';

import {TEXT} from '../constants';

const LibraryScreen = () => {
  const {selectedLibrary} = useContext(LibraryContext);
  const mappedLibrary = getMappedLibrary(selectedLibrary);
  const {territory, ...library} = mappedLibrary;

  return (
    <Layout className="main">

      <Breadcrumb separator=">" id="bread">
        <BreadcrumbItem href="/">{TEXT.list}</BreadcrumbItem>
        <BreadcrumbItem>{territory}</BreadcrumbItem>
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
