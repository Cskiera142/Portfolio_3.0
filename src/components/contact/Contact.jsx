import { SocialIcon } from "react-social-icons";
import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const [loaded, setLoaded] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ryq01gl",
        "template_lqle5xs",
        form.current,
        "efTXj_P_32viyLwrb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    // Add a delay to ensure the transition takes effect
    const timeoutId = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div id="contact-container" className={`initial ${loaded ? "loaded" : ""}`}>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      <SocialIcon url="https://github.com/Cskiera142" target="_blank" />
      <SocialIcon
        url="https://www.linkedin.com/in/coltonskiera/"
        target="_blank"
      />
    </div>
  );
}

export default Contact;
