import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Link, useLocation} from 'react-router-dom';

import classes from './ApartmentItem.module.scss';
import photo from '../../../assets/images/photo.jpg';
import {ReactComponent as LikeIcon} from '../../../assets/icons/like.svg';

import {updateApartment} from '../../../store/actions/apartment';

const ApartmentItem = props => {
  const {pathname} = useLocation();
  const {apartment} = props;

  const dispatch = useDispatch();

  const updateAp = (updatedApartment) => dispatch(updateApartment(updatedApartment));

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
        <img src={photo} alt={apartment.attributes.title} />
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