import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Link, useLocation} from 'react-router-dom';

import classes from './ApartmentItem.module.scss';
import {ReactComponent as LikeIcon} from '../../../assets/like.svg';

import {updateApartment} from '../../../store/actions/apartment';

const ApartmentItem = props => {
  const {pathname} = useLocation();
  const {apartment} = props;

  const dispatch = useDispatch();

  const updateAp = (updatedApartment) => dispatch(updateApartment(updatedApartment));

  const [likeCounter, setLikeCounter] = useState(0);

  const classLikeButton = [classes.LikeButton];

  if (apartment.isLiked) {
    classLikeButton.push(classes.LikeActive);
  }

  const likeClickHandler = () => {
    localStorage.setItem('like@' + apartment.id, !apartment.isLiked);

    const updatedApartment = {
      ...apartment,
      isLiked: !apartment.isLiked,
    };

    updateAp(updatedApartment);
  };

  return (
    <li className={classes.ApartmentItem}>
      <div className={classes.Photo}>
        <img src="https://q-xx.bstatic.com/images/hotel/max1024x768/197/197179243.jpg" />
      </div>
      <button className={classLikeButton.join(' ')} onClick={likeClickHandler}>
        <LikeIcon width="25" />
      </button>
      <Link to={`${pathname}/${apartment.id}`}>
        <p className={classes.Title}>{apartment.attributes.title}</p>
      </Link>
    </li>
  );
};

export default ApartmentItem;