//Farenheit to Celcius Function

function farenheitToCelcius(farenheit) {
    celciusResult = (farenheit - 32) * (5/9);
    return celciusResult;
}

let farenheitNeedCelcius = 59;
let yourCelcius = farenheitToCelcius(farenheitNeedCelcius);
console.log(yourCelcius, "°Celcius");

//Celcius to Farenheit Function

function celciusToFarenheit(celcius) {
    farenheitResult = (celcius * (9/5)) + 32;
    return farenheitResult;
}

let myCelcius = 100;
let myConvertedFarenheit = celciusToFarenheit(myCelcius);
console.log(myConvertedFarenheit, "°Farenheit");