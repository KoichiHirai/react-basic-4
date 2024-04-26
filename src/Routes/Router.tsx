import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';

function Routers () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/react-basic-4/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;