import React from 'react';

const AddQuestion = () => {
  return (
    <div>
      <h1>Add Question</h1>
      <form>
        <div>
          <label>Question:</label>
          <input type="text" name="question" />
        </div>
        <div>
          <label>Answer:</label>
          <input type="text" name="answer" />
        </div>
        <button type="submit">Add Question</button>
      </form>
      <a href="/">Back to Home</a>
    </div>
  );
};

export default AddQuestion;
