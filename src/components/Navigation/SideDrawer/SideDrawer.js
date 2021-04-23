import {Fragment} from 'react';

import classes from './SideDrawer.module.scss';
import NavigationLinks from '../../../constants/navigationList'

import NavigationList from '../NavigationList';
import Backdrop from '../../UI/Backdrop';

const sideDrawer = props => {
  let classSideDrawer = [classes.SideDrawer, classes.Close];

  if (props.open) {
    classSideDrawer = [classes.SideDrawer, classes.Open];
  }

  const sideDrawerCloseHandler = (event) => {
    if (event.target.closest('a')) {
      props.close();
    }
  };

  return (
    <Fragment>
      <div className={classSideDrawer.join(' ')} onClick={sideDrawerCloseHandler}>
        <nav>
        <NavigationList navigationLinks={NavigationLinks} />
        </nav>
      </div>

      <Backdrop show={props.open} clicked={props.close} />
    </Fragment>
  );
};

export default sideDrawer;