import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { Demo, demos } from './demos';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: demos.map((demo: Demo) => {
      return {
        id: demo.title,
        element: demo.element,
        path: demo.path
      }
    })
  }
]);

export default router;