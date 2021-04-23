import {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import classes from './Rent.module.scss';

import {fetchApartments} from '../../store/actions/apartment';

import WrapperLayout from '../../hocs/WrapperLayout';
import Spinner from '../../components/UI/Spinner';
import ApartmentList from '../../components/ApartmentList';

const Rent = props => {
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

  return (
    <section className={classes.Rent}>
      <WrapperLayout>
        <h2>Аренда жилья</h2>
        <ApartmentList apartments={apartments} />
      </WrapperLayout>
    </section>
  );
};

export default Rent;