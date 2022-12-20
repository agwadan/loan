import React, { useState } from 'react';
import Admin from './Pages/Admin';
import Register from './Pages/Register';
import SigIn from './Pages/SigIn'
import Loan from './Pages/Loan'
import LoanHistory from './Pages/LoanHistory'
import LoanPayment from './Pages/LoanPayment'
import Profile from './Pages/Profile'
import SignOut from './Pages/SignOut'
import AllUsers from './Pages/AllUsers'
import BVN from './Pages/BVN'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  
    const user =  JSON.parse(localStorage.getItem('user'))
  return (
    <>
      <Router>
        {console.log(user)}
        <Routes>
          <Route exact path="/" element={user ? <Loan /> : <BVN />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/Loan" element={<Loan />} />
          <Route path="/Loan_Histry" element={<LoanHistory />} />
          <Route path="/Loan_Payment" element={<LoanPayment />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/SignOut" element={<SignOut />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/SignIn" element={<SigIn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
