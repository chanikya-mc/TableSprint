import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepages/Homepage';
import Login from './Homepages/Login';
import Signup from './Homepages/Signup';
import Nav from './Homepages/Nav';
import ForgotPassword from './Homepages/ForgotPassword';
import LogOut from './Homepages/LogOut';
import Menu from './Homepages/Menu';
import Category from './Homepages/Category';

import Products from './Homepages/Products';
import AddCategory from './Homepages/AddCategory';
import EditCategory from './Homepages/EditCategory';
import SubCategory from './Homepages/SubCategory';
import SubAddCategory from './Homepages/AddSubCategory';
import SubEditCategory from './Homepages/EditSubCategory';


function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path='/forgotpassword' element={<ForgotPassword></ForgotPassword>}></Route>
        <Route exact path='/logout' element={<LogOut></LogOut>}></Route>
        
        <Route exact path='/category' element={<Category></Category>}></Route>
        <Route exact path='/subcategory' element={<SubCategory></SubCategory>}></Route>
        <Route exact path='/products' element={<Products></Products>}></Route>
        <Route exact path='/addcategory' element={<AddCategory></AddCategory>}></Route>
        <Route exact path='/editcategory' element={<EditCategory></EditCategory>}></Route>
        <Route exact path='/addsubcategory' element={<SubAddCategory></SubAddCategory>}></Route>
        <Route exact path='/editsubcategory' element={<SubEditCategory></SubEditCategory>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
