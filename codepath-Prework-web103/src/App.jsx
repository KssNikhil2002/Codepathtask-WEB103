import './App.css'
import { useRoutes } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator'
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'

function App() {

  const routes = useRoutes([
    { path: '/', element: <ShowCreators/> },
    { path: '/creator', element: <ViewCreator /> },
    { path: '/addcreator', element: <AddCreator /> },
    { path: '/editcreator', element: <EditCreator /> }
  ]);

  return (
    <div>
      {routes}
    </div>
  )
}

export default App
