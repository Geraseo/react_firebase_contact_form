import { useState, useEffect } from "react";

import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Table from "react-bootstrap/Table";

const Questions = () => {
  const [questions, setQuestion] = useState([]);

  //funkcija gauti duomenis is db
  const getDataFromFirestore = async () => {
    const querySnapshot = await getDocs(collection(db, "contacts"));
    const tempQuestion = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    // console.log(tempQuestion)
    setQuestion(tempQuestion);
  };
  //useEffect, kada ta funkcija iskviesti
  useEffect(() => {
    getDataFromFirestore();
  }, []);
  console.log(questions);
  return (
    <div>
      <Table
        striped
        bordered
        hover
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Question</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr key={question.id}>
              <td>{question.client_name}</td>
              <td>{question.client_email}</td>
              <td>{question.client_message}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Questions;
