// function to calculate the daily wage of a worker based on hourly basis

const dailyWage = function (hoursWorked, extraHour) {
  if (hoursWorked <= 4) /* Maximum official working hours is 4 hours */ {
      let wagePerHour = 1000; 
      let rawWage = wagePerHour * hoursWorked; //To calculate actual wage without the extra wages
      if (extraHour <= 20) /* There are 24 hours in a day, a worker can't work more than 24hrs in a day */{
          let extraWage = 200 * extraHour;
          let totalWage = rawWage + extraWage; // Actual wage plus extra hours wage
          let wageMessage = ('Your Daily wage for today is' + ' ' + totalWage);
          return wageMessage;
      }
  }
  else {
    alert("What else do you want, my dear")
    console.log("What else do you want, my dear")
    }
}

const hoursWorked = Number(prompt("Welcome, how many hours did you work for today? "));
const extraHour = Number(prompt("How many extra hours did you do?"));
alert(dailyWage(hoursWorked, extraHour));
console.log(dailyWage(hoursWorked, extraHour));