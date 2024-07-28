// src/api/index.js

export const fetchQuestions = async () => {
    // Fetch questions from the server
    return [
      {
        id: 1,
        text: 'Sample Question?',
        answers: [{ id: 1, text: 'Sample Answer 1' }, { id: 2, text: 'Sample Answer 2' }],
      },
    ];
  };
  
  export const addQuestion = async (question) => {
    // Send a POST request to add a question
  };
  
  export const updateQuestion = async (question) => {
    // Send a PUT request to update a question
  };
  
  export const deleteQuestion = async (questionId) => {
    // Send a DELETE request to delete a question
  };
  