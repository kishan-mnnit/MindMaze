import React from 'react';

const EditQuestion = ({ match }) => {
  const questionId = match.params.id;

  return (
    <div>
      <h1>Edit Question</h1>
      <form>
        <div>
          <label>Question:</label>
          <input type="text" name="question" defaultValue={`Question ${questionId}`} />
        </div>
        <div>
          <label>Answer:</label>
          <input type="text" name="answer" defaultValue={`Answer for question ${questionId}`} />
        </div>
        <button type="submit">Update Question</button>
      </form>
      <a href="/">Back to Home</a>
    </div>
  );
};

export default EditQuestion;
