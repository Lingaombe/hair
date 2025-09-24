/* import dotenv from "dotenv";

dotenv.config();

const token = process.env.Pinterest_Token; */

import mysql2 from 'mysql2';

const connection = mysql2.createConnection({
  host: 'localhost',     
  user: 'root',          
  password: 'Lingaombe@2001',          
  database: 'HairStyles'       
});

connection.connect(error => {
  if (error) {
    console.error('Error connecting to the database:', error);
    return;
  }
  console.log('Connected to the database');
});

const link = document.createElement('a'); 
     
link.textContent = 'Pin Link';      
link.target = '_blank';  
const target = document.getElementById('hair');

const button = document.getElementById("generate");

button.onclick = function(){
    document.body.style.color = 'red';
}

function Generate(){
    const lengthRadio = document.querySelector('input[name="length"]:checked');
    const stateRadio = document.querySelector('input[name="state"]:checked');
    const lengthValue = lengthRadio ? lengthRadio.value : null;
    const stateValue = stateRadio ? stateRadio.value : null;

    // pickHair(lengthValue, stateValue)

    if (!lengthValue || !stateValue){
        window.alert("pick a struggle")
    }
    else{
        console.log(lengthValue);
        console.log(stateValue);
        target.parentNode.insertBefore(link, target);         
    }
}

function pickHair(length, state){

    connection.query('SELECT styleLink FROM Styles', (error, results) => {
    if (error) {
        console.error('Error executing query:', error);
        return;
    }
    console.log('Query results:', results);
    });

    link.href = {};   
    target.src = {};

    connection.end();
}

//process which radio set is picked x
//define functions for each set pinterest API get board and randomly select pin
//onclick call req function
//add link to pin ref pinterest
//world economic ford report
//playfire san serif (profesh)