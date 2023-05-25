import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import CityNewGurgaon from './views/city-new-gurgaon'
import PrivacyPolicy from './views/privacy-policy'
import CityNewDelhi from './views/city-new-delhi'
import BECOMEABUSINESSSPARTNER from './views/become-a-businesss-partner'
import BECOMEAVOLUNTEER from './views/become-a-volunteer'
import Home from './views/home'
import PaymentGatway from './views/payment-gatway'
import PlantTree from './views/plant-tree'
import CityNewFaridabad from './views/city-new-faridabad'
import WhyTree from './views/why-tree'
import CityNewNoida from './views/city-new-noida'
import GetInvolve from './views/get-involve'
import AboutUs from './views/about-us'
import EmployeeEngagement from './views/employee-engagement'
import UrbanReforestation from './views/urban-reforestation'

import { Auth0Provider } from "@auth0/auth0-react";


const App = () => {
 
  return (
    <Router>
      
      <div>
      
        <Route component={CityNewGurgaon} exact path="/city-new-gurgaon" />
        <Route component={PrivacyPolicy} exact path="/privacy-policy" />
        <Route component={CityNewDelhi} exact path="/city-new-delhi" />
        <Route
          component={BECOMEABUSINESSSPARTNER}
          exact
          path="/become-a-businesss-partner"
        />
        <Route component={BECOMEAVOLUNTEER} exact path="/become-a-volunteer" />
        <Route component={Home} exact path="/" />
        <Route component={PaymentGatway} exact path="/payment-gatway" />
        <Route component={PlantTree} exact path="/plant-tree" />
        <Route component={CityNewFaridabad} exact path="/city-new-faridabad" />
        <Route component={WhyTree} exact path="/why-tree" />
        <Route component={CityNewNoida} exact path="/city-new-noida" />
        <Route component={GetInvolve} exact path="/get-involve" />
        <Route component={AboutUs} exact path="/about-us" />
        <Route component={GetInvolve} exact path="/get-involve" />
        <Route component={EmployeeEngagement} exact path="/employee-engagement" />
        <Route component={GetInvolve} exact path="/get-involve" />
        <Route component={UrbanReforestation} exact path="/urban-reforestation" />
      </div>
    </Router>
  )
}

ReactDOM.render(<Auth0Provider
  domain="dev-n15mpyj5fmedwgjt.us.auth0.com"
  clientId="W0MhG2qchqWDosjxSPFHRTAF0jXAf2OP"authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <App />
</Auth0Provider>, document.getElementById('app'))

// Mouse Right Click Disabled -->

window.oncontextmenu = function(){

  alert('Right click is disabled');
  return false;
}
