console.log('Welcome to RVS of Project 800!')
alert('Hello! Welcome to the Remote Volunteer System for Project 800');
var toDo = prompt('What do you want to do?');
var shipment = prompt('What do you want to ship?');
var shippedProceed = prompt('Your item has been shipped. How would you like to proceed?');
var hypoOne = alert('Testing first hypothesis... Loading... View the results of your study at ')
alert(toDo)
if (toDo == 'visit RVS') {
    alert('Welcome to RVS!')
}
else if (toDo == 'ship item to boona lab') {
    alert(shipment)
    if (shipment == 'pressurometer'){
     alert(shippedProceed) 
     if (shippedProceed == 'test pressure theory') {
        alert(hypoOne)
     }  
    }
    }
    else if (toDo == 'test hypothesis 1') {
        alert(hypoOne)
    }
    else {
        alert('Welcome to RVS!')
    }
    