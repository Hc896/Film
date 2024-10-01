import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.test.css';

function App(){
  const [tytuł, setTytuł] = useState("");
  const [rodzaj, setRodzaj] = useState[""];

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`Tytuł: ${tytuł}, Rodzzaj: ${rodzaj}`);
  };
}