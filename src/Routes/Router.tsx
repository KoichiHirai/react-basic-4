import { BrowserRouter, Route, Routes} from 'react-router-dom'; //OK
import Home from '../pages/Home';//OK

console.log("BrowserRouter at Router.tsx" + BrowserRouter + "\n\n"); 
console.log("Route at Router.tsx" + Route + "\n\n"); 
console.log("Routes at Router.tsx" + Routes + "\n\n"); 

function Router () {
  return (
    <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;