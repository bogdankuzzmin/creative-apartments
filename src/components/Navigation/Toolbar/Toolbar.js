import classes from './Toolbar.module.scss';

import NavigationLinks from '../../../constants/navigationList';

import WrapperLayout from '../../../hocs/WrapperLayout';
import NavigationList from '../NavigationList';
import DrawerToggle from '../SideDrawer/DrawerToggle';

const toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <WrapperLayout>
        <DrawerToggle clicked={props.drawerToggle} />
        
        <nav>
          <NavigationList navigationLinks={NavigationLinks} />
        </nav>
      </WrapperLayout>
    </header>
  );
};

export default toolbar;