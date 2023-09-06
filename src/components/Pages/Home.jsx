import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import classes from "./Home.module.css"

const Home = () => {
  return (
    <div>
      <Header />
      <h3 className={classes.tag}>Tours</h3>
      <div className={classes.tableContainer}>
      <Table striped bordered hover className={classes.table}>
        <tbody>
          <tr>
            <td>JUL 19</td>
            <td>LAS VEGAS, NV</td>
            <td>JIGGY LUBE LIVE</td>
            <Button variant="info">Buy Tickets</Button>
          </tr>
          <tr>
            <td>JUL 21</td>
            <td>PHOENIX, AZ</td>
            <td>AK-CHIN PAVILION</td>
            <Button variant="info">Buy Tickets</Button>
          </tr>
          <tr>
            <td>JUL 22</td>
            <td>BRISTOW, VA</td>
            <td>DTE ENERGY MUSIC THEATRE</td>
            <Button variant="info">Buy Tickets</Button>
          </tr>
          <tr>
            <td>Aug 2</td>
            <td>TORONTO,ON</td>
            <td>BUDWEISER STAGE</td>
            <Button variant="info">Buy Tickets</Button>
          </tr>
          <tr>
            <td>Aug 12</td>
            <td>DETROIT, MI</td>
            <td>T-MOBILE ARENA</td>
            <Button variant="info">Buy Tickets</Button>
          </tr>
        </tbody>
      </Table>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
