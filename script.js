// 1
const currentDateTime = new Date();
document.getElementById('datetime').innerHTML = currentDateTime;

// 2
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const currentMonth = new Date().getMonth();
alert(monthNames[currentMonth]);

// 3
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDay = new Date().getDay();
alert(dayNames[currentDay].slice(0, 3));

// 4
const currentDay = new Date().getDay();
if (currentDay === 0 || currentDay === 6) {
    alert("It’s Fun day");
}

// 5
const currentDate = new Date();
const dayOfMonth = currentDate.getDate();
if (dayOfMonth < 16) {
    alert("First fifteen days of the month");
} else {
    alert("Last days of the month");
}

// 6
const date = new Date();
const minutesSince1970 = Math.floor(date.getTime() / 60000);
console.log(minutesSince1970);

// 7
const currentHour = new Date().getHours();
if (currentHour < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}

// 8
const laterDate = new Date(2020, 11, 31); // December 31, 2020
console.log(laterDate);

// 9
const ramadanStartDate = new Date(2015, 5, 18); // June 18, 2015
const currentDate = new Date();
const timeDifference = currentDate - ramadanStartDate;
const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
alert(daysPassed + " days have passed since 1st Ramadan 2015.");

// 10
const referenceDate = new Date();
const beginningOf2015 = new Date(2015, 0, 1); // January 1, 2015
const timeDifference = referenceDate - beginningOf2015;
const secondsElapsed = Math.floor(timeDifference / 1000);
alert(secondsElapsed + " seconds have elapsed since the beginning of 2015.");

// 11
const currentDate = new Date();
const currentHours = currentDate.getHours();
currentDate.setHours(currentHours + 1);
document.write(currentDate);

// 12
const currentDate = new Date();
currentDate.setFullYear(currentDate.getFullYear() - 100);
alert(currentDate);

// 13
const age = prompt("Please enter your age:");
const currentYear = new Date().getFullYear();
const birthYear = currentYear - age;
alert("You were born in the year " + birthYear);

// 14
const customerName = "John Doe";
const currentMonth = new Date().toLocaleString('default', { month: 'long' });
const unitsConsumed = 350;
const ratePerUnit = 15.75;
const latePaymentSurcharge = 50;
const netAmountPayable = unitsConsumed * ratePerUnit;
const grossAmountPayable = netAmountPayable + latePaymentSurcharge;
const roundedNetAmount = netAmountPayable.toFixed(2);
const roundedGrossAmount = grossAmountPayable.toFixed(2);
document.write("<h2>K-Electric Bill</h2>");
document.write("<p>Customer Name: " + customerName + "</p>");
document.write("<p>Current Month: " + currentMonth + "</p>");
document.write("<p>Number of Units: " + unitsConsumed + "</p>");
document.write("<p>Charges per Unit: " + ratePerUnit.toFixed(2) + "</p>");
document.write("<p>Net Amount Payable (within Due Date): " + roundedNetAmount + "</p>");
document.write("<p>Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2) + "</p>");
document.write("<p>Gross Amount Payable (after Due Date): " + roundedGrossAmount + "</p>");
