import React from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useState } from "react";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const form = useRef();

  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();

    emailjs
      .sendForm(
        "service_5niowyh",
        "template_kbmma9x",
        form.current,
        "xn7xzCAm131EGhrXi"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="c-left">
        <span style={{ color: darkMode ? "white" : "" }}>Get in touch</span>
        <span>Contact me</span>
        <div className="blur c-blur1"></div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email "
          />
          <textarea
            name="message"
            cols="30"
            rows="6"
            className="user"
            placeholder="Message"
          ></textarea>
          <input type="submit" value="Send" className="button ct-button" />
          <span>{done && "Thanks for Contacting me!"}</span>
          <div className="blur c-blur2"></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
