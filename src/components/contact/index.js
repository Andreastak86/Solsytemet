import React from "react";
import "./index.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ll2alhu",
      "template_n8q0gqf",
      form.current,
      "GyOKH1R0saYvMD1DZ"
    );
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h2>Kontakt Oss</h2>
      <div className='container contact__container'>
        <div className='contact__potions'>
          <article className='contact__option'>
            <form ref={form} onSubmit={sendEmail}>
              <input type='text' name='name' placeholder='Ditt Navn' required />
              <input
                type='email'
                name='email'
                placeholder='Din Mailadresse'
                required
              />
              <textarea
                name='message'
                rows='7'
                placeholder='Din Melding'
                required
              ></textarea>
              <button type='submit' className='btn'>
                Send Melding
              </button>
            </form>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
