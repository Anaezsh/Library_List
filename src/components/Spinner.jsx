import React from 'react';
import {Spin} from 'antd';

import '../app.css';

const Spinner = () => {

  return (
    <div className="main spinner">
      <Spin/>
    </div>
  );
};

export default React.memo(Spinner);
