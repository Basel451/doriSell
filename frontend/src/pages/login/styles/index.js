import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2``;

export const Form = styled.form`
  padding: 5px;
  background-color: rgba(244, 241, 23);
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 30%;
  height: 300px;
`;

export const Input = styled.input`
  height: 20px;
  font-size: 15px;
`;

export const Label = styled.label`
  font-size: 15px;
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 5px;
`;

export const Button = styled.button`
  margin-top: 30px;
  height: 40px;
  width: 100px;
`;
