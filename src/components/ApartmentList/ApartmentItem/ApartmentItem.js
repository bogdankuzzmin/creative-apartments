import classes from './ApartmentItem.module.scss';
import photo from '../../../assets/images/photo.jpg';

const apartmentItem = props => {
  const {apartment} = props;
  const {
    area, rooms, title, unit, address: {
      city, house, room, street
    }} = apartment.attributes;

  const {
    type: relationshipType, 
    attributes: {
      first_name: firstName, 
      last_name: lastName, 
      middle_name: middleName
    }} = apartment.relationships;

  console.log(apartment);

  return (
    <li className={classes.ApartmentItem}>
      <div className={classes.Photo}>
        <img src={photo} />
      </div>
      <p className={classes.Title}>{apartment.attributes.title}</p>
    </li>
  );
};

export default apartmentItem;