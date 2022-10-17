import styled from "styled-components";
import Stars from "../../pages/frontPage/img/stars.avif";

export const Form = styled.form`
  color: red;
  background: black;
  border: 5px solid black;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin: 20rem auto;
  width: 80%;
  @media (max-width: 1200px) {
    margin: 15rem auto;
  }
`;

export const Container = styled.div`
  position: fixed;
  bottom: 0rem;
  left: 0rem;
  width: 100%;
  height: 100%;
  border: 0;
  background: url(${Stars});
  z-index: -1;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  padding: 1.5rem;
  font-size: 2rem;
  border-radius: 0.5rem;
  background: rgba(0, 0, 0, 0.3);
  color: white;

  border: 2px solid white;
  resize: none;
`;

export const Button = styled.button`
  color: white;
  background: black;
  border: 5px solid orange;
  border-radius: 10px;
  padding: 1rem;
  font-size: 2rem;
`;
