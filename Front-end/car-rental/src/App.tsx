import React from "react";

import "./App.css";
import "./styleSheets/style.css";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";

import { Footer } from "./layouts/NavbarAndFooter/Footer";

import { SearchCarPage } from "./layouts/SearchCarPage/SearchCarPage";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { CarCheckoutPage } from "./layouts/carCheckoutPage/CarCheckoutPage";
import { HomePage } from "./layouts/Homepage/HomePage";
import { OktaConfig } from "./lib/OktaConfig";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { LoginCallback, Security } from "@okta/okta-react";
import LoginWidget from "./Auth/LoginWidget";
import { CarBookingPage } from "./layouts/carCheckoutPage/CarBookingPage";
import { AboutUs } from "./layouts/AboutUs/AboutUs";
import { ContactUs } from "./layouts/AboutUs/ContactUs";

const oktaAuth = new OktaAuth(OktaConfig);

function App() {
  const customAuthHandler = () => {
    history.push("/login");
  };

  const history = useHistory();

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    history.replace(toRelativeUrl(originalUri || "/", window.location.origin));
  };
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Security
        oktaAuth={oktaAuth}
        restoreOriginalUri={restoreOriginalUri}
        onAuthRequired={customAuthHandler}
      >
        <Navbar />
        <div className="flex-grow-1">
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home" exact>
              <HomePage />
            </Route>
            <Route path="/search">
              <SearchCarPage />
            </Route>
            <Route path="/checkout/:carId">
              <CarCheckoutPage />
            </Route>
            <Route path="/Booking/:carId">
              <CarBookingPage />
            </Route>
            <Route path="/About">
              <AboutUs />
            </Route>
            <Route path="/Contact">
              <ContactUs />
            </Route>
            <Route
              path="/login"
              render={() => <LoginWidget config={OktaConfig} />}
            />
            <Route path="/login/callback" component={LoginCallback} />
          </Switch>
        </div>

        <Footer />
      </Security>
    </div>
  );
}

export default App;
