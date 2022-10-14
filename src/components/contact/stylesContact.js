import styled from "styled-components";

export const Main = styled.section`
  background: black;
  color: #ffb800;
  display: grid;
  grid-template-columns: max-content;
  height: auto;
  font-size: 32px;
  @media (max-width: 768px) {
    width: 86%;
  }
  @media (max-width: 375px) {
    width: 90%;
  }
  /* border: 2px solid red; */
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
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
