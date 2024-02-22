<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Date Validation</title>
</head>
<body>

<label for="date">Please enter date in MM-DD-YYYY format:</label>
<input type="text" id="date" placeholder="MM-DD-YYYY">
<div id="error" style="color: red;"></div>

<div id="validresult" style="color: green;"></div>

<script>
const dateInput = document.getElementById("date");
const errorDisplay = document.getElementById("error");
const validResultDisplay = document.getElementById("validresult");

dateInput.addEventListener("input", validateDate);

function validateDate() {
    let date = dateInput.value.trim();
    errorDisplay.textContent = '';
    validResultDisplay.textContent = '';

    // Regular expression to match MM-DD-YYYY format
    let dateFormat = /^\d{2}-\d{2}-\d{4}$/;

    if (!dateFormat.test(date)) {
        errorDisplay.textContent = "Invalid date. Please enter date in MM-DD-YYYY format";
        return;
    }

    let [month, day, year] = date.split("-").map(Number);

    if (month < 1 || month > 12) {
        errorDisplay.textContent = "Invalid month. Month should be within the range 1 to 12";
        return;
    }

    let maxDaysInMonth = new Date(year, month, 0).getDate();

    if (day < 1 || day > maxDaysInMonth) {
        errorDisplay.textContent = `Invalid day. Day should be within the range 1 to ${maxDaysInMonth}`;
        return;
    }

    if (month === 2 && day === 29 && !isLeapYear(year)) {
        errorDisplay.textContent = "Invalid day for February. Not a leap year.";
        return;
    }

    validResultDisplay.textContent = `You have entered valid date. Its "${date}". Thank you.`;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
</script>

</body>
</html>
