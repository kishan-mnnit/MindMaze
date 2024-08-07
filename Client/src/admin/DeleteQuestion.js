import React from 'react';

const DeleteQuestion = ({ match }) => {
  const questionId = match.params.id;

  const handleDelete = () => {
    // Handle delete operation
    alert(`Question ${questionId} deleted`);
  };

  return (
    <div>
      <h1>Delete Question</h1>
      <p>Are you sure you want to delete question {questionId}?</p>
      <button onClick={handleDelete}>Delete</button>
      <a href="/">Back to Home</a>
    </div>
  );
};

export default DeleteQuestion;
