import { Route, Routes} from 'react-router-dom'; //OK
import Home from '../pages/Home';//OK


function Router () {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
  );
}

export default Router;