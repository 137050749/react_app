import React from 'react';
import './App.css';
import {Route,Switch,Redirect} from 'react-router-dom';

import Header from './components/Header';

import Recommend from './pages/Recommend';
import Fashion from './pages/Fashion';
import Makeup from './pages/Makeup';
import Foods from './pages/Foods';

import Detail from './pages/Detail';
function App() {
  return (
    <div className="App">
        <Header/>
        <Switch>
            <Route  path="/" exact >
                  <Redirect to="/rec"></Redirect>
            </Route>
            <Route path="/rec" component={Recommend}></Route>
            <Route  path="/fashion"  component={Fashion}></Route>
            <Route  path="/makeup"  component={Makeup}></Route>
            <Route  path="/foods"  component={Foods}></Route>

            <Route path="/detail/:id" component={Detail}/>
        </Switch>
    </div>
  );
}

export default App;
