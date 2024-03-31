import './App.css';
import { createContext, useState } from 'react';
//import ChildCompA1 from './newComp/childA';
//import ChildComponent from './newComp/childComponent';
import ComplexList from './newComp/listdemo';
import ListWithAddItem from './newComp/listAdd';
import SigninForm from './newComp/form';
import Items from './newComp/demoList';
import MyForm from './newComp/formdemo';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from "./route/Home";
import Blogs from  "./route/Blogs";
import Contact from "./route/Contact";
import NoPage from "./route/Nopage";
import Layout from './route/Layout';

//it is a constant variable AppContext that holds a context object created using React’s createContext function.
//export const  AppContext = createContext();

function App() {
  //const [message , setMessage] = useState("Hello from App Component !!!!");
  return (
    
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
             <Route index element={<Home />}></Route>
             <Route path='blogs' element={<Blogs />}></Route>
             <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      </BrowserRouter>
    
     
    </div>
    
  );
}

export default App;
