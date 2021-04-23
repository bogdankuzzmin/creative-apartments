import React, {Fragment, useState} from 'react';

import classes from './Layout.module.scss';

import Toolbar from '../../components/Navigation/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer';

const Layout = props => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerCloseHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  return (
    <Fragment>
      <Toolbar drawerToggle={sideDrawerToggleHandler} />
      <SideDrawer open={showSideDrawer} close={sideDrawerCloseHandler} />

      <main className={classes.Main}>
        {props.children}
      </main>
    </Fragment>
  );
};

export default Layout;
