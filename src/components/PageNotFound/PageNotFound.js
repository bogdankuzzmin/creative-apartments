import classes from './PageNotFound.module.scss';

import WrapperLayout from '../../hocs/WrapperLayout';

const pageNotFound = props => {
  return (
    <WrapperLayout>
      <p className={classes.PageNotFound}>Page was not found.</p>
    </WrapperLayout>
  );
};

export default pageNotFound;