import { Switch, Route } from 'react-router-dom';
// import LoginPage from '../pages/LoginPage';
import CityPage from '../pages/CityPage';
import LandingPage from '../pages/LandingPage';

const routes = (
    <Switch>
        <Route exact path='/' component={ LandingPage } />
        {/* <Route path='/login' component={ LoginPage } /> */}
        <Route path='/cities/' component={ CityPage } /> 
    </Switch>
)

export default routes;