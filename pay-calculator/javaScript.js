var myName = "Bot"
var myButton = document.querySelector("button");
var mypage = document.querySelector("body");
var hourlyPay;
var hoursWorked;
var grosspay;
var taxplusresult;
var netpay;
//adds event listener using
myButton.addEventListener("click", dataPrompt);


function dataPrompt() {
    
    hourlyPay = prompt("Enter your hourly pay", "Enter your hourly pay here");

    hoursWorked = prompt("Enter hours worked", "Enter your hours worked here")

    grosspay = Number(hourlyPay) * Number(hoursWorked);

    taxplusresult = Number(grosspay) * 0.20

    netpay = Number(grosspay) - Number(taxplusresult);

    var msgStr = `Your gross pay is ${grosspay}\n Uncle Sam's share: ${taxplusresult}\n Your net pay is ${netpay}`;
    alert(msgStr);


    console.log(msgStr);


}

console.log(hourlyPay);