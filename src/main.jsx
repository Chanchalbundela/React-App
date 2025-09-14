import { StrictMode } from "react"; 
import { createRoot } from "react-dom/client";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { BrowserRouter,Routes,Route } from "react-router-dom";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
  <Route element={<Home />} path='/home'/>
  <Route element={<Login />} path='/login'/>
  <Route element={<Home />} path='/'/>
<Route element={<Login />} path='/'/>


 </Routes>
    </BrowserRouter>
  </StrictMode>
);
