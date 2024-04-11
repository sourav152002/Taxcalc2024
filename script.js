// $(document).ready(function() {
//     $('#taxForm').submit(function(event) {
//         event.preventDefault();
        
//         var income = parseFloat($('#income').val());
//         var taxRate = parseFloat($('#taxRate').val());

//         if (isNaN(income) || isNaN(taxRate)) {
//             $('#result').html('<div class="alert alert-danger" role="alert">Please enter valid numbers.</div>');
//             return;
//         }

//         var taxAmount = (income * taxRate) / 100;
//         var totalIncome = income - taxAmount;

//         $('#result').html('<div class="alert alert-success" role="alert">Tax Amount: $' + taxAmount.toFixed(2) + '<br>Total Income After Tax: $' + totalIncome.toFixed(2) + '</div>');
//     });
// });


$(document).ready(function() {
    $('#taxForm').submit(function(event) {
        event.preventDefault();
        
        var income = parseFloat($('#income').val());
        var extraIncome = parseFloat($('#extraIncome').val());
        var deductions = parseFloat($('#deductions').val());
        var ageGroup = $('#ageGroup').val();

        if (isNaN(income) || isNaN(extraIncome) || isNaN(deductions)) {
            $('#result').html('<div class="alert alert-danger" role="alert">Please enter valid numbers.</div>');
            return;
        }

        var totalIncome = income + extraIncome - deductions;
        var taxAmount = 0;

        if (totalIncome <= 800000) {
            taxAmount = 0; // No tax
        } else {
            var taxableAmount = totalIncome - 800000; // Amount over 8 Lakhs

            // Apply tax rates based on age group
            switch (ageGroup) {
                case '<40':
                    taxAmount = taxableAmount * 0.3; // 30% tax for age < 40
                    break;
                case '≥40&<60':
                    taxAmount = taxableAmount * 0.4; // 40% tax for age ≥ 40 but < 60
                    break;
                case '≥60':
                    taxAmount = taxableAmount * 0.1; // 10% tax for age ≥ 60
                    break;
                default:
                    taxAmount = 0; // Default to no tax if age group is not selected
            }
        }

        // $('#result').html('<div class="alert alert-success" role="alert">Tax Amount: $' + taxAmount.toFixed(2) + '<br>Total Income After Tax: $' + (totalIncome - taxAmount).toFixed(2) + '</div>');
        $('#result').html('<div class="alert alert-secondary" role="alert">Tax paid: Rs.' + taxAmount.toFixed(2) + '<br>Your overall Income After Tax: Rs.' + (totalIncome - taxAmount).toFixed(2) + '</div>');
    });
});


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}