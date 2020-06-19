import React from 'react';
import {Button} from 'antd';
import {Link} from 'react-router-dom';
import {Item} from '../utils/elements';

import '../app.css';

import TEXT from '../const';

const LibraryListItem = (props) => {
  const {item, onClick} = props;
  const {
    territory,
    kopuk,
    libraries,
  } = item;

  return (
    <Item>
      <Button type="link" onClick={onClick}>
        <Link to={`/${kopuk}`}>
          {territory}, {TEXT.libraries.toLowerCase()}: {libraries}
        </Link>
      </Button>
    </Item>
  );
};

export default React.memo(LibraryListItem);
