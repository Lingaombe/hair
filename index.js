/* import dotenv from "dotenv";

dotenv.config();

const token = process.env.Pinterest_Token; */

const link = document.createElement('a'); 
link.href = {};        
link.textContent = 'Pin Link';      
link.target = '_blank';  
const target = document.getElementById('hair');

function Generate(){
    const lengthRadio = document.querySelector('input[name="length"]:checked');
    const stateRadio = document.querySelector('input[name="state"]:checked');
    const lengthValue = lengthRadio ? lengthRadio.value : null;
    const stateValue = stateRadio ? stateRadio.value : null;

    if (!lengthValue || !stateValue){
        window.alert("pick a struggle")
    }
    else{
        console.log(lengthValue);
        console.log(stateValue);
        target.parentNode.insertBefore(link, target);         
    }
}

//process which radio set is picked x
//define functions for each set pinterest API get board and randomly select pin
//onclick call req function
//add link to pin ref pinterest
//world economic ford report
//playfire san serif (profesh)