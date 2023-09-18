import { Container } from "react-bootstrap";
import Counter from "./components/Card/Counter";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import CartProvider from "../src/store/CartProvider";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";
import ContactUs from "./components/Pages/ContactUs";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import AuthForm from "./components/AuthForm/AuthForm";
import AuthContext from "./store/auth-context";
import { useContext } from "react";
import AuthContextProvider from "./store/AuthContextProvider";

function App() {
  const authCtx = useContext(AuthContext)
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <AuthContextProvider>
  
      <Router>
        <Switch>
        <Route path="/" exact>
            <Redirect to= "/login" />
          </Route>
          <Route path ="/login">
          {/* <Redirect path='/store'/> */}
            
            <AuthForm/>

          </Route>

          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
          
            <ContactUs />
          </Route>
          <Route path="/store">
            <CartProvider>
              {cartIsShown && <Cart onClose={hideCartHandler} />}
              <Header onShowCart={showCartHandler} />
              <main>
                <Container className="py-4">
                  <Counter />
                </Container>
              </main>
              <Footer />
            </CartProvider>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
      </AuthContextProvider>
  );
}

export default App;
