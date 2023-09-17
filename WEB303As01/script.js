/*
	WEB 303 Assignment 1 - jQuery
	Author:Dhruvi Patel
	Date:15/09/2023
*/

$(document).ready(function () {
    
    var $salaryInput = $("#yearly-salary");
    var $percentInput = $("#percent");

   
    function updateAmount() {
        
        var salary = parseFloat($salaryInput.val()) || 0;
        var percent = parseFloat($percentInput.val()) || 0;

        var techBudget = (salary * percent / 100).toFixed(2); 

       
        $("#amount").text("$" + techBudget);
    }

    
    $salaryInput.on("change keyup", updateAmount);
    $percentInput.on("change keyup", updateAmount);
});

