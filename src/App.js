import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [userInfo, setUserInfo] = useState({
    intro: "Welcome to FullStack Development - I",
    labinfo: "React JS Programming Week09 Lab exercise",
    studentID:"101205359",
    studentName:"Ali Cebe",
    collegeNameCity: "George Brown College, Toronto"
  });
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{userInfo.intro}!</h1>
        <h2>{userInfo.labinfo}</h2>
        <h4>{userInfo.studentID}</h4>
        <h5>{userInfo.studentName}</h5>
        <h6>{userInfo.collegeNameCity}</h6>
      </header>
    </div>
  );
}

export default App;
