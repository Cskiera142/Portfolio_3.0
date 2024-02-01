import React, { useEffect, useState } from "react";

function Contact() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Add a delay to ensure the transition takes effect
    const timeoutId = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div id="contact-container" className={`initial ${loaded ? "loaded" : ""}`}>
      <h1>Hello World</h1>
    </div>
  );
}

export default Contact;
