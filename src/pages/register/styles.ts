import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 5rem;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
  color: #555;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #4285f4;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #1c68d4;
  }
`;

const StyledLink = styled(Link)`
  color: #4285f4;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export { Button, Input, Label, Form, Title, Container, StyledLink }