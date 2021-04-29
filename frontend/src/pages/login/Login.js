import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Wrapper, Form, Label, Input, Button, Title } from "./styles";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  return (
    <Wrapper>
      <Title>Login</Title>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          login(username, password);
        }}
      >
        <Label>Benutzername oder email</Label>
        <Input type="text" onChange={(e) => setUsername(e.target.value)} />
        <Label>Passwort:</Label>
        <Input
          type="password"
          minLength={4}
          maxLength={20}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>login</Button>
      </Form>
    </Wrapper>
  );
};

export default Login;
