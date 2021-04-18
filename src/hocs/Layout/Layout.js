import React, {Fragment} from 'react';

import classes from './Layout.module.scss';

import Toolbar from '../../components/Navigation/Toolbar';

const layout = props => {
  return (
    <Fragment>
      <Toolbar />
      <main className={classes.Main}>
        {props.children}
      </main>
    </Fragment>
  );
};

export default layout;
