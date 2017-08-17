import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route ,Redirect} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import 'whatwg-fetch'
import Index from './pages/index';
import Demo from './pages/demo';
import About from './pages/about';
import Components from './pages/components';
import Header from './components/Header';
import Footer from './components/Footer'
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';
import { NAV_HEADER } from'./constant'
const history = createBrowserHistory();


ReactDOM.render((
    <Router history={history}>
        <div className="pager-wrapper">
            <Header nav={ NAV_HEADER }/>
            <div className="main-wrapper clear-fix">
                <Route path="/" exact render={() => (
                    <Redirect to="/index"/>
                )}/>
                <Route path="/index" component={Index}/>
                <Route path="/demo" component={Demo}/>
                <Route path="/components" component={Components}/>
                <Route path="/about" component={About}/>
            </div>
            <Footer/>
        </div>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
