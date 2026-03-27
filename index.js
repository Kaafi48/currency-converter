import { country_list } from './co.js';
import { API_KEY } from './api.js';

// Selectors

const from = document.querySelector(".from-money select");
const to = document.querySelector(".to-money select"); // Dhibicda lagu daray
const btn = document.querySelector("form .btn");
const droppList = document.querySelectorAll(".select-flex select");
const moneyChange = document.querySelector(".money-change");

// Loop-ka lagu buuxinayo lacagaha (USD, SOS, jb.)
for (let i = 0; i < droppList.length; i++) {
    for (let currency_code in country_list) {
      let selected;
      if(i == 0){
        selected = currency_code == "USD" ? "selected" : "";
      } else if( i == 1){
          selected = currency_code ==="TRY" ? "selected" : "" ;
      }



        // Abuur option cusub
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        
        // Ku dar dropdown-ka (Select tag)
        // droppList[i].innerHTML += optionTag;
        droppList[i].insertAdjacentHTML("beforeend", optionTag); 
    }

    droppList[i].addEventListener("change", (e)=>{
        loadFlag(e.target);
    })
}

function loadFlag(element){
  for(let code in country_list){
    if(code =element.value){
        let imageTag = element.parentElement.querySelector("img");
        imageTag.src = `https://flagsapi.com/${country_list[code]}/flat/64.png`;
    }
  }
}

moneyChange.addEventListener("click" , ()=>{
    let iskuBadalXogta = from.value;
   from.value = to.value;
   to.value = iskuBadalXogta;
   loadFlag(from);
   loadFlag(to);
})

btn.addEventListener("click" ,(e) =>{
   e.preventDefault();
   getExchangeRate();
});

function getExchangeRate(){
    const inputNumber = document.querySelector(".right-content .input-number");
    let amount = inputNumber.value;
    if(amount == "" || amount == "0"){
        inputNumber.value = "1";
        amount.value = 1;
    }

    let url = `https://v6.exchangerate-api.com/v6/a8e812b74363e2f70455cb15/latest/${from.value}`;
    fetch(url)
    .then(Response => Response.json()).then(result =>{
        let exchangeRate = result.conversion_rates[to.value];
        let totallExchange =(amount * exchangeRate).toFixed(2);
        const showConverter = document.querySelector(".show-converter");
        const signMoney = document.querySelector(".sign-money");
        showConverter.innerHTML = `${totallExchange} <span>${to.value}</span>`;
    });
}



// // Tusaale: Input-ka marka wax lagu qoro
// inputNumber.addEventListener("input", () => {
//     const daabac = inputNumber.value;
//     
//     if(showConverter) {
//         showConverter.textContent = daabac;
//     }
// });