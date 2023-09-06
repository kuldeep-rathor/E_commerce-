import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import image from "../../assets/images/about.png";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.size}>
      <Header />
      <div className={classes.container}>
        <div className={classes.img}>
          <img src={image} alt="Girl in a jacket"></img>
        </div>
        <div className={classes.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          temporibus ipsum, aliquam consectetur, doloribus ab nobis minus
          officiis odit dicta dolor in! Vel nostrum nemo unde, officia obcaecati
          ad, nesciunt quia repellendus hic, deleniti repellat facilis accusamus
          possimus laudantium temporibus sint esse! Iusto sapiente consequuntur
          praesentium eaque soluta aspernatur libero. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Cupiditate, dignissimos, alias,
          excepturi magnam exercitationem quidem reiciendis odit quo
          consequuntur eligendi sequi veniam? Eligendi aspernatur recusandae
          quidem laudantium sunt consequatur fugiat, optio cumque mollitia?
          Porro necessitatibus magni explicabo? Eos fugiat temporibus aliquam
          illum voluptates doloribus, vitae fugit? Corporis eius ea, dicta, quod
          adipisci repellat consequatur ullam itaque quos illum at. Suscipit
          nisi laborum accusamus asperiores eius perferendis dolores illo
          laudantium ex!
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
