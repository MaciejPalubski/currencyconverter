let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");


let rateEUR = "4.78";
let rateUSD = "4.84";
let rateGBP = "5.48";


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = currencyElement.value;
    let amount = +amountElement.value;

    let result;

    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;

        case "USD":
            result = amount / rateUSD;
            break;

        case "GBP":
            result = amount / rateGBP;
            break;
    }



    resultElement.innerText = result.toFixed(2);
});
