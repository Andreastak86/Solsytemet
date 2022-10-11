import React from "react";
import "./index.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Options, Button } from "./styles";

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
    <Container>
      <h2>Kontakt Oss</h2>
      <Options>
        <div>
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
                rows='10'
                placeholder='Din Melding'
                required
              ></textarea>
              <Button type='submit'>Send Melding</Button>
            </form>
          </article>
        </div>
      </Options>
    </Container>
  );
};

export default Contact;
