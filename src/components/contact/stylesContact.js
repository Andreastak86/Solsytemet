import styled from "styled-components";


export const Form = styled.form`
  color: red;
  background: black;
  border: 5px solid black;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin: 25rem;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  padding: 1.5rem;

  border-radius: 0.5rem;
  background: white;
  color: red;

  border: 2px solid var(--color-header);
  resize: none;
`;

export const Button = styled.button`
  color: orange;
  background: black;
  border: 5px solid orange;
  border-radius: 10px;
  padding: 1rem;
`;
