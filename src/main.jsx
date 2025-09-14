import { StrictMode } from "react"; 
import { createRoot } from "react-dom/client";
import Mypage from "./Pages/Mypage";
import Login from "./Pages/Login";
import { BrowserRouter,Routes,Route } from "react-router-dom";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
  <Route element={<Mypage />} path='/mypage'/>
  <Route element={<Login />} path='/login'/>
  <Route element={<Mypage />} path='/'/>
<Route element={<Login />} path='/'/>


 </Routes>
    </BrowserRouter>
  </StrictMode>
);
