

// Selectors

const from = document.querySelector(".from-money select");
const to = document.querySelector(".to-money select"); // Dhibicda lagu daray
const btn = document.querySelector("form .btn");
const droppList = document.querySelectorAll(".select-flex select");
const moneyChange = document.querySelector(".money-change");
const liveRate = document.querySelector(".liveRate")
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
   getExchangeRate();
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

    let url = `https://v6.exchangerate-api.com/v6/bcb16d2c312abc078f98bf63/latest/${from.value}`;
    fetch(url)
    .then(Response => Response.json()).then(result =>{
        let exchangeRate = result.conversion_rates[to.value];
        let totallExchange =(amount * exchangeRate).toFixed(2);
        const showConverter = document.querySelector(".show-converter");
        const signMoney = document.querySelector(".sign-money");
        showConverter.innerHTML = `${totallExchange} <span>${to.value}</span>`;
        // liveRate.innerHTML = `Live: 1 ${from.value} = ${exchangeRate} ${to.value}`;
    });
}


function updateLiveRate() {
   const from = document.querySelector(".from-money select").value;
   const to = document.querySelector(".to-money select").value;
    const  liveRate = document.querySelector(".live-rate .liveRate");

    const url = `https://v6.exchangerate-api.com/v6/bcb16d2c312abc078f98bf63/latest/${from}`;

    fetch(url)
        .then(response => response.json())
        .then(result => {
            let rate = result.conversion_rates[to];
            // Ku dar qoraalka Live-ka ah
            liveRate.innerHTML = `Live: 1 ${from} = ${rate.toFixed(2)} ${to}`;
        })
        .catch(() => console.log("Cilad ayaa jirta..."));
}
// 30,000 milisekond = 30 ilbiriqsi (Seconds)
// Ha ka dhigin mid aad u yar (sida 1 sec) si aan API-ga lagaaga xannibin
setInterval(updateLiveRate, 30000); 

// Sidoo kale u yeer markii ugu horreysay ee bogg la furo
updateLiveRate();



// 1. Liiska lacagaha ee wareegaya
const currenciesToWatch = ["SOS", "EUR", "TRY", "GBP", "AED", "SAR"];
let currentIndex = 0;

function rotateLiveRate() {
    const fromCurrency = "USD"; // Kan mar walba waa Dollar (Sidiisii ayuu ahaanayaa)
    const toCurrency = currenciesToWatch[currentIndex]; // Kan ayaa isbedbedalaya
    const liveRateText = document.querySelector(".liveRate"); 
    const myKey = "bcb16d2c312abc078f98bf63"; 

    if(!liveRateText) return;

    const url = `https://v6.exchangerate-api.com/v6/${myKey}/latest/${fromCurrency}`;

    fetch(url)
        .then(response => response.json())
        .then(result => {
            let rate = result.conversion_rates[toCurrency];
            
            // Animation: Qari qoraalkii hore
            liveRateText.style.opacity = "0";
            liveRateText.style.transition = "opacity 0.5s ease-in-out";

            setTimeout(() => {
                // Ku qor qoraalka cusub (1 USD = X Currency)
                liveRateText.innerHTML = `Live: 1 ${fromCurrency} = ${rate.toFixed(2)} <span>${toCurrency}</span>`;
                
                // Soo saar qoraalka cusub
                liveRateText.style.opacity = "1";
            }, 500);

            // U gudub lacagta xigta ee liiska ku jirta
            // Haddii uu dhamaado liisku (SAR), wuxuu dib ugu laabanayaa SOS (Index 0)
            currentIndex = (currentIndex + 1) % currenciesToWatch.length;
        })
        .catch(() => console.log("Cilad ayaa jirta xogta sarrifka..."));
}

// 2. Isbedelka ka dhig 5-tii ilbiriqsiba
setInterval(rotateLiveRate, 30000);

// U yeer isla markii boggaga la furo (Initial call)
rotateLiveRate();