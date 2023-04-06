import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import db from "../firebase";

import { collection, addDoc } from "firebase/firestore";

import { useState } from "react";

const ContactsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  console.log(name, email, message);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //patikrinti ar laukai uzpildyti
    if (name.length < 3) {
      alert("Name must be at least 3 characters long");
    }
    if (email.length === "") {
      alert("Email can't be blank");
    }
    if (message.length < 5) {
      alert("Message must be at least 5 characters long");
    }

    //irasyti i db
    try {
      const docRef = await addDoc(collection(db, "contacts"), {
        client_name: name,
        client_email: email,
        client_message: message,
        createdAt: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.log(error);
    }

    //isvalyti laukus
    setName("");
    setEmail("");
    setMessage("");
  };

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
