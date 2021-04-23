import {Route, Switch} from 'react-router-dom';

import NavigationLinks from './constants/navigationList';

import Layout from './hocs/Layout';
import MainPage from './containers/MainPage';
import Rent from './containers/Rent';
import Contacts from './containers/Contacts';
import ApartmentDetails from './components/ApartmentDetails';
import PageNotFound from './components/PageNotFound';

const App = props => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path={NavigationLinks.RENT.link} exact component={Rent} />
        <Route path={`${NavigationLinks.RENT.link}/:id`} 
               render={({match}) => <ApartmentDetails apartmentId={match.params.id} />} />
        <Route path={NavigationLinks.CONTACTS.link} component={Contacts} />
        
        <Route component={PageNotFound} />
      </Switch>
    </Layout>
  );
};

export default App;
