import React from "react";

import ContactsForm from "./components/ContactsForm";
import Questions from "./components/Questions";

import Container from "react-bootstrap/Container";

const App = () => {
  return (
    <Container>
      <ContactsForm />
      <Questions />
    </Container>
  );
};

export default App;
