import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Form, Input, Button } from "./stylesContact";

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ll2alhu",
      "template_unt0mlo",
      form.current,
      "GyOKH1R0saYvMD1DZ"
    );
    e.target.reset();
  };

  return (
    <Form ref={form} onSubmit={sendEmail}>
      <Input type='text' name='name' placeholder='Ditt Navn' required />
      <Input type='email' name='email' placeholder='Din Mailadresse' required />
      <Input name='message' rows='7' placeholder='Din Melding' required></Input>

      <Button type='submit' className='btn btn-primary'>
        Send Melding
      </Button>
    </Form>
  );
};

export default ContactPage;
