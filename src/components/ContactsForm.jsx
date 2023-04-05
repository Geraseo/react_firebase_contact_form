import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useState } from "react";

const ContactsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  console.log(name, email, message);
  
const handleSubmit = (e) => {
    e.preventDefault();
    
    //patikrinti ar laukai uzpildyti
    //irasyti i db
    //isvalyti laukus
    
    // baigiau ziureti 1:18

  
  }
}
  
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group
        className="mb-3"
        controlId="name"
      >
        <Form.Label>Your name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group
        className="mb-3"
        controlId="email"
      >
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group
        className="mb-3"
        controlId="forText"
      >
        <Form.Label>Question</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
};

export default ContactsForm;
