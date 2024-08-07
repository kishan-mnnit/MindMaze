import '../styles/App.css';

import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { 	Routes,Route } from 'react-router-dom';

/** import components */
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import { CheckUserExist } from '../helper/helper';
// import AdminApp from '../admin/admin_app';
import Home from '../admin/Home';
import ViewQuestions from '../admin/ViewQuestions';
import AddQuestion from "../admin/AddQuestion";
import EditQuestion from "../admin/EditQuestion";
import DeleteQuestion from "../admin/DeleteQuestion";


/** react routes */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/quiz",
    element: (
      <CheckUserExist>
        <Quiz />
      </CheckUserExist>
    ),
  },
  {
    path: "/result",
    element: (
      <CheckUserExist>
        <Result />
      </CheckUserExist>
    ),
  },
  {
    path: "/admin",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "view-questions",
        element: <ViewQuestions />,
      },
      {
        path: "add-question",
        element: <AddQuestion />,
      },
      {
        path: "edit-question/:id",
        element: <EditQuestion />,
      },
      {
        path: "delete-question/:id",
        element: <DeleteQuestion />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route path="/admin" element={<Home />} />
          <Route path="/admin/view-questions" element={<ViewQuestions />} />
          <Route path="/admin/add-questions" element={<AddQuestion />} />
          <Route path="/admin/edit-questions/:id" element={<EditQuestion />} />
          <Route path="/admin/delete-questions/:id" element={<DeleteQuestion />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
