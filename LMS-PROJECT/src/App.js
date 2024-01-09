import logo from "./logo.svg";
import "./App.css";
import Signin from "./Signinpage";
import Form from "./Form";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./MainPage";
import SubPage from "./SubPage";
import Users from "./users/Users";


function App() {
  return (
    <div>
      
    
         <BrowserRouter>
        

        <Routes >
        <Route path="/" element={<Signin/>} />
        <Route path="/Form" element={<Form/>} />
        <Route path="/MainPage" element={<MainPage/>} />

{/* <Route path="/" element={<Users/>} /> */}

          
         
        </Routes>
      </BrowserRouter>   
    </div>
  );
}

export default App;
