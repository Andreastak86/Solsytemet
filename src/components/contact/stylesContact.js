import styled from "styled-components";
import Stars from "../../pages/frontPage/img/stars.avif";

export const Main = styled.section`
  background: black;
  color: #ffb800;
  font-size: 2rem;
  width: 100%;
  /* border: 2px solid red; */
`;

export const ContactBg = styled.div`
  background: url(${Stars});
  position: fixed;
  background-size: contain;
  width: 100%;
  height: 100%;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: black;
  color: white;
  border: 2px solid #ffb800;
  resize: none;
  width: 12rem;
`;

export const Button = styled.button`
  width: max-content;
  display: inline-block;
  color: #ffb800;
  background: black;
  padding: 0.75rem 1.2rem;
  border-radius: 0.4rem;
  cursor: pointer;
  border: 1px solid #ffb800;
`;

export const Kontakt = styled.div`
  display: grid;
  margin-bottom: 1rem;
`;
