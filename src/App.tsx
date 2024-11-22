import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeBody from "./routes/Home/HomeBody";
import Home from "./routes";
import Perfil from "./routes/Home/Perfil";


export default function App() {

  return (
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home/>}>
         <Route index element={<HomeBody />} />
         <Route path="/home" element={<HomeBody />} />
         <Route path="/perfil" element={<Perfil />} />
       </Route>
     </Routes>
   </BrowserRouter>
  );
}

