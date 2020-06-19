import React from 'react';
import {Typography} from 'antd';

import '../app.css';

const {Text} = Typography;

const TitleValueRow = (props) => {
  const {title, value} = props;

  return (
    <div>
      <Text type="secondary" className={'text_marginRight'}>{title}:</Text>
      <Text>{value}</Text>
    </div>
  );
};

export default React.memo(TitleValueRow);
