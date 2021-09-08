import React from 'react';
import logo from './logo.svg';
import loading from './images/loading.png';
import defaultImage from './images/default.png';
import detailsImage from './images/details.png';
import Home from './components/Home.js';
import MapPage from './components/MapPage.js';
import TreePage from './components/TreePage.js';
import PlanterPage from './components/PlanterPage.js';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  useLocation,
  Redirect,
} from 'react-router-dom';
import log from 'loglevel';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import theme from './components/common/theme';
import { ThemeProvider } from '@material-ui/core/styles';

function LandingPage() {
  const history = useHistory();

  function handleClick() {
    log.debug('load finished');
    history.push('/wallets/stephanie');
  }

  return (
    <div className="App" onClick={handleClick}>
      <Home loaded={handleClick} />
    </div>
  );
}

function DefaultPage() {
  const history = useHistory();
  log.debug('history action:', history.action);
  function handleClick() {
    log.debug('load finished');
    history.push('/details');
  }

  return (
    <div className="App" onClick={handleClick}>
      <img src={defaultImage} />
    </div>
  );
}

function DetailsPage() {
  const history = useHistory();
  function handleClick() {
    log.debug('load finished');
    history.go(-1);
  }

  return (
    <div className="App" onClick={handleClick}>
      <img src={detailsImage} />
    </div>
  );
}

function Root() {
  return <Redirect to={{ pathname: '/landing' }} />;
}

const routes = [
  { path: '/landing', name: 'Home', Component: LandingPage },
  { path: '/default', name: 'Default', Component: DefaultPage },
  { path: '/details', name: 'Details', Component: DetailsPage },
  { path: '/map', name: 'Map', Component: MapPage },
  { path: '/wallets', name: 'Map', Component: MapPage },
  {
    path: '/wallets/:walletId/trees/:treeId',
    name: 'Tree',
    Component: TreePage,
  },
  {
    path: '/wallets/:walletId/planters/:planterId',
    name: 'Planter',
    Component: PlanterPage,
  },
  { path: '/', name: 'Root', Component: Root, exact: true },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        {routes.map(({ path, Component, exact }) => (
          <Route key={path} path={path} exact={exact || false}>
            <Component />
          </Route>
        ))}
      </Router>
    </ThemeProvider>
  );
}

export default App;
