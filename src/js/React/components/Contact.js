import React from 'react';

const Contact = () => {
  return(
    <section className="contact" id="contactMe">
        <div className="contact__information">
          <h1 id="contact-header"> CONTACT </h1>
          <h3> mohkerate@gmail.com </h3>
          <div className="contact__information__svg">
            <a href="https://github.com/mohfullstack" target="_blank"> <img src="images/devicons/github-original.svg"/> </a>
            
            <a href="https://stackoverflow.com/users/7340994/pmarko-alt" target="_blank"> <img src="images/devicons/stack.svg"/> </a>
            <a href="https://www.linkedin.com/in/reshid-kerate-24997010a/" target="_blank"> <img src="images/devicons/linkedin-plain.svg"/> </a>
          </div>
        </div>

        <div className="contact__photo">
          <img src="images/headshot.jpg"/>
        </div>

    </section>
  );
};

export default Contact;
