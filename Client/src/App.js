import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ViewQuestions from './pages/ViewQuestions';
import AddQuestion from './pages/AddQuestion';
import EditQuestion from './pages/EditQuestion';
import DeleteQuestion from './pages/DeleteQuestion';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/view-questions" component={ViewQuestions} />
        <Route path="/add-question" component={AddQuestion} />
        <Route path="/edit-question/:id" component={EditQuestion} />
        <Route path="/delete-question/:id" component={DeleteQuestion} />
      </Switch>
    </Router>
  );
};

export default App;
