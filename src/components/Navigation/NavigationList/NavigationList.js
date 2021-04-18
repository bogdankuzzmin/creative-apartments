import classes from './NavigationList.module.scss';

import NavigationItem from './NavigationItem';

const navigationItems = props => {
  const {navigationLinks} = props;

  const links = Object.keys(navigationLinks);

  const list = links.map((item, index) => {
    const itemList = navigationLinks[item];
    
    return (
      <NavigationItem 
        link={itemList.link} 
        key={item + index}>
          {itemList.name}
      </NavigationItem>
    );
  });

  return (
    <ul className={classes.NavigationList}>
      {list}
    </ul>
  );
};

export default navigationItems;
