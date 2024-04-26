import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';

function Routers () {
  return (
    <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;