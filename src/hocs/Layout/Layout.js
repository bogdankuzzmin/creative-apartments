import React, {Fragment} from 'react';

import Toolbar from '../../components/Navigation/Toolbar';

const layout = props => {
  return (
    <Fragment>
      <Toolbar />
      <main>
        {props.children}
      </main>
    </Fragment>
  );
};

export default layout;
