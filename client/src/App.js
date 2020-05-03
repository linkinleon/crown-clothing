import React, { useEffect } from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.actions";
import { GlobalStyle } from "./global.style";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
