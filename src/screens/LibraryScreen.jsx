import React, {useContext} from 'react';
import {Layout, Typography} from 'antd';

import '../app.css';

import TitleValueRow from '../components/TitleValueRow';

import {LibraryContext} from '../app';
import {getMappedLibrary} from '../utils/library';

import TEXT from '../const';

const {Title} = Typography;

const LibraryScreen = () => {
  const {selectedLibrary} = useContext(LibraryContext);
  const mappedLibrary = getMappedLibrary(selectedLibrary);
  const {territory, ...library} = mappedLibrary;

  return (
    <Layout className="main">
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
