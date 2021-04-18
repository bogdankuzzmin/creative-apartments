import classes from './Toolbar.module.scss';

import NavigationLinks from '../../../constants/navigationList';

import WrapperLayout from '../../../hocs/WrapperLayout';
import NavigationList from '../NavigationList';

const toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <WrapperLayout>
        <nav>
          <NavigationList navigationLinks={NavigationLinks} />
        </nav>
      </WrapperLayout>
    </header>
  );
};

export default toolbar;