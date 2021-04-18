import {Route, Switch} from 'react-router-dom';

import NavigationLinks from './constants/navigationList';

import Layout from './hocs/Layout';
import MainPage from './containers/MainPage';
import Rent from './containers/Rent';

const App = props => {
  return (
    <Layout>
      <Switch>
        <Route path={`/${NavigationLinks.HOME.link}`} component={MainPage} />
        <Route path={`/${NavigationLinks.RENT.link}`} component={Rent} />
        
        <Route render={() => <p>Page was not found!</p>} />
      </Switch>
    </Layout>
  );
};

export default App;
