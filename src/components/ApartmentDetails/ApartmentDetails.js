import {useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import classes from './ApartmentDetails.module.scss';
import photo from '../../assets/images/photo.jpg';

import {fetchApartments} from '../../store/actions/apartment';

import Spinner from '../UI/Spinner';
import WrapperLayout from '../../hocs/WrapperLayout';
import Button from '../UI/Button';

const ApartmentDetails = props => {
  const dispatch = useDispatch();

  const apartments = useSelector(state => state.apartments);
  const loading = useSelector(state => state.loading);

  const fetchApartmentsHandler = useCallback(() => dispatch(fetchApartments()), [dispatch]);

  useEffect(() => {
    if (apartments.length === 0) {
      fetchApartmentsHandler();
    }
  }, [fetchApartmentsHandler]);

  if (loading) {
    return <Spinner />;
  }

  const apartment = apartments.find(apartment => apartment.id === Number(props.apartmentId));

  if (!apartment) {
    return (
      <WrapperLayout>
        <p>It seems that apartment was deleted or doesn't exist.</p>
      </WrapperLayout>
    );
  }

  const {
      area, rooms, title, unit, address: {
      city, house, room, street
    }} = apartment.attributes;

  const {
    attributes: {
      first_name: firstName, 
      last_name: lastName, 
      middle_name: middleName
    }} = apartment.relationships;

  return (
    <section className={classes.ApartmentDetails}>
      <h2 className="visually-hidden">Аренда жилья</h2>

      <WrapperLayout>
        <div className={classes.Row}>
          <div className={classes.ColumnLeft}>
            <div className={classes.Photo}>
              <img src={photo} alt={title} />
            </div>
          </div>
          <div className={classes.ColumnRight}>
            <div className={classes.ApartmentInfo}>
              <div><b>Заголовок:</b> {title}</div>
              <div><b>Площадь:</b> {`${area} ${unit}`}</div>
              <div><b>Комнат:</b> {rooms}</div>
              <div><b>Адрес:</b> {`${city}, ${street}, ${house}, ${room} кв.`}</div>
              <div><b>Автор:</b> {firstName} {lastName} {middleName}</div>

              <Button type="link" color="green" href="tel:78093456767">Позвонить</Button>
            </div>
          </div>
        </div>
        <div className={classes.Description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae iure qui sapiente quo, neque sequi dolor error doloremque id voluptatibus voluptates sunt laboriosam commodi, in ullam consectetur enim unde modi! Inventore quo cupiditate commodi quisquam pariatur corrupti error reiciendis iure maiores! Nesciunt, illum consequatur? Nisi amet eligendi minus cum veritatis id quidem ad porro deserunt aliquid libero adipisci, excepturi facere obcaecati quis sint. Voluptate ipsum eum quisquam perspiciatis accusantium doloremque iure, quo, dicta voluptatem sint nam asperiores magnam, amet eveniet aut ullam unde expedita tenetur praesentium fugit nobis qui? Exercitationem, labore laudantium ipsum velit architecto tempore fugit quisquam? Voluptatibus qui enim autem reprehenderit eveniet dignissimos facilis quis non, sed, exercitationem quos nulla ea harum iure, velit minima at nisi? Sint, laborum voluptatum pariatur ad veniam eum sit rerum qui doloremque est dolorem a praesentium eius beatae. Perspiciatis molestias excepturi laborum minus qui fuga voluptatem hic consequuntur quae itaque, veniam, possimus praesentium? Reiciendis, laboriosam eligendi libero minus, maiores iste, vitae eos nam quam ut rem velit beatae similique aliquam dolorem? Cumque, dolorem perferendis, sapiente veniam, sint repellendus amet voluptas cupiditate similique nobis magnam eligendi dolorum dolores minima dolor cum harum culpa doloribus. Atque rem corporis beatae recusandae quam in? Culpa, obcaecati.
        </div>
      </WrapperLayout>
    </section>
  );
};

export default ApartmentDetails;
