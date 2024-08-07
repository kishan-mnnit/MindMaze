import React from 'react';
import { Link } from 'react-router-dom';

const ViewQuestions = () => {
  // This would be fetched from the server in a real app
  const questions = [
    { id: 1, question: 'What is React?', answer: 'A JavaScript library for building user interfaces.' },
    { id: 2, question: 'What is JSX?', answer: 'A syntax extension for JavaScript.' },
  ];

  return (
    <div>
      <h1>View Questions</h1>
      <ul>
        {questions.map((q) => (
          <li key={q.id}>
            {q.question}
            <div>{q.answer}</div>
            <Link to={`/edit-question/${q.id}`}>Edit</Link> | 
            <Link to={`/delete-question/${q.id}`}>Delete</Link>
          </li>
        ))}
      </ul>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default ViewQuestions;
