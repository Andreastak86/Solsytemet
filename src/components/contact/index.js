import React from "react";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Main, Form, Input, Button } from "./stylesContact.js";

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

        <Form ref={form} onSubmit={sendEmail}>
          <Input type='text' name='name' placeholder='Ditt Navn' required />
          <Input
            type='email'
            name='email'
            placeholder='Din Mailadresse'
            required
          />
          <Input
            name='message'
            rows='20'
            placeholder='Din Melding'
            required
          ></Input>
          <Button type='submit'>Send Melding</Button>
        </Form>
      </Main>
    </>
  );
};

export default Contact;