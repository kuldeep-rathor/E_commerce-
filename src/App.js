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

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
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
  );
}

export default App;
