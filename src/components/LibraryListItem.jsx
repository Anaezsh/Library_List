import React from 'react';
import {Button} from 'antd';
import {Link} from 'react-router-dom';
import {ListItem} from '../utils/elements';

import '../app.css';

import {TEXT} from '../constants';

const LibraryListItem = (props) => {
  const {item, onClick} = props;
  const {
    territory,
    kopuk,
    libraries,
  } = item;

  return (
    <ListItem>
      <Button type="link" onClick={onClick}>
        <Link to={`/${kopuk}`}>
          {territory}, {TEXT.libraries.toLowerCase()}: {libraries}
        </Link>
      </Button>
    </ListItem>
  );
};

export default React.memo(LibraryListItem);
