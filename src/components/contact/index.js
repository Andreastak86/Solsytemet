import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Main, Form, Button, Kontakt } from "./stylesContact.js";

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
    <>
      <Main>
        <h2>Kontakt Oss</h2>
        <Kontakt>
          <a
            href='solsystemet.kodehode@gmail.com'
            target='_blank'
            rel='noreferrer'
          >
            Send oss en mail
          </a>
        </Kontakt>

        <Form ref={form} onSubmit={sendEmail}>
          <h5>Eller Send Oss En Melding</h5>
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

          <Button>
            <button type='submit' className='btn btn-primary'>
              Send Melding
            </button>
          </Button>
        </Form>
      </Main>
    </>
  );
};

export default Contact;
