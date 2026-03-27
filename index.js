import { country_list } from './co.js';
import { API_KEY } from './api.js';

// Selectors

const from = document.querySelector(".from-money select");
const to = document.querySelector(".to-money select"); // Dhibicda lagu daray
const btn = document.querySelector("form .btn");
const droppList = document.querySelectorAll(".select-flex select");
const moneyChange = document.querySelector(".money-change");
  export let country_list = {
    "AED" : "AE",
    "AFN" : "AF",
    "XCD" : "AG",
    "ALL" : "AL",
    "AMD" : "AM",
    "ANG" : "AN",
    "AOA" : "AO",
    "AQD" : "AQ",
    "ARS" : "AR",
    "AUD" : "AU",
    "AZN" : "AZ",
    "BAM" : "BA",
    "BBD" : "BB",
    "BDT" : "BD",
    "XOF" : "BE",
    "BGN" : "BG",
    "BHD" : "BH",
    "BIF" : "BI",
    "BMD" : "BM",
    "BND" : "BN",
    "BOB" : "BO",
    "BRL" : "BR",
    "BSD" : "BS",
    "NOK" : "BV",
    "BWP" : "BW",
    "BYR" : "BY",
    "BZD" : "BZ",
    "CAD" : "CA",
    "CDF" : "CD",
    "XAF" : "CF",
    "CHF" : "CH",
    "CLP" : "CL",
    "CNY" : "CN",
    "COP" : "CO",
    "CRC" : "CR",
    "CUP" : "CU",
    "CVE" : "CV",
    "CYP" : "CY",
    "CZK" : "CZ",
    "DJF" : "DJ",
    "DKK" : "DK",
    "DOP" : "DO",
    "DZD" : "DZ",
    "ECS" : "EC",
    "EEK" : "EE",
    "EGP" : "EG",
    "ETB" : "ET",
    "EUR" : "FR",
    "FJD" : "FJ",
    "FKP" : "FK",
    "GBP" : "GB",
    "GEL" : "GE",
    "GGP" : "GG",
    "GHS" : "GH",
    "GIP" : "GI",
    "GMD" : "GM",
    "GNF" : "GN",
    "GTQ" : "GT",
    "GYD" : "GY",
    "HKD" : "HK",
    "HNL" : "HN",
    "HRK" : "HR",
    "HTG" : "HT",
    "HUF" : "HU",
    "IDR" : "ID",
    "ILS" : "IL",
    "INR" : "IN",
    "IQD" : "IQ",
    "IRR" : "IR",
    "ISK" : "IS",
    "JMD" : "JM",
    "JOD" : "JO",
    "JPY" : "JP",
    "KES" : "KE",
    "KGS" : "KG",
    "KHR" : "KH",
    "KMF" : "KM",
    "KPW" : "KP",
    "KRW" : "KR",
    "KWD" : "KW",
    "KYD" : "KY",
    "KZT" : "KZ",
    "LAK" : "LA",
    "LBP" : "LB",
    "LKR" : "LK",
    "LRD" : "LR",
    "LSL" : "LS",
    "LTL" : "LT",
    "LVL" : "LV",
    "LYD" : "LY",
    "MAD" : "MA",
    "MDL" : "MD",
    "MGA" : "MG",
    "MKD" : "MK",
    "MMK" : "MM",
    "MNT" : "MN",
    "MOP" : "MO",
    "MRO" : "MR",
    "MTL" : "MT",
    "MUR" : "MU",
    "MVR" : "MV",
    "MWK" : "MW",
    "MXN" : "MX",
    "MYR" : "MY",
    "MZN" : "MZ",
    "NAD" : "NA",
    "XPF" : "NC",
    "NGN" : "NG",
    "NIO" : "NI",
    "NPR" : "NP",
    "NZD" : "NZ",
    "OMR" : "OM",
    "PAB" : "PA",
    "PEN" : "PE",
    "PGK" : "PG",
    "PHP" : "PH",
    "PKR" : "PK",
    "PLN" : "PL",
    "PYG" : "PY",
    "QAR" : "QA",
    "RON" : "RO",
    "RSD" : "RS",
    "RUB" : "RU",
    "RWF" : "RW",
    "SAR" : "SA",
    "SBD" : "SB",
    "SCR" : "SC",
    "SDG" : "SD",
    "SEK" : "SE",
    "SGD" : "SG",
    "SKK" : "SK",
    "SLL" : "SL",
    "SOS" : "SO",
    "SRD" : "SR",
    "STD" : "ST",
    "SVC" : "SV",
    "SYP" : "SY",
    "SZL" : "SZ",
    "THB" : "TH",
    "TJS" : "TJ",
    "TMT" : "TM",
    "TND" : "TN",
    "TOP" : "TO",
    "TRY" : "TR",
    "TTD" : "TT",
    "TWD" : "TW",
    "TZS" : "TZ",
    "UAH" : "UA",
    "UGX" : "UG",
    "USD" : "US",
    "UYU" : "UY",
    "UZS" : "UZ",
    "VEF" : "VE",
    "VND" : "VN",
    "VUV" : "VU",
    "YER" : "YE",
    "ZAR" : "ZA",
    "ZMK" : "ZM",
    "ZWD" : "ZW"
}

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
