import React, { useState } from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import classes from "./ContactUs.module.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://react-http-6de1b-default-rtdb.firebaseio.com/data.json",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      setFormData({ name: "", email: "", phoneNumber: "" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={classes.size}>
      <Header />
      <div className={classes.container}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
