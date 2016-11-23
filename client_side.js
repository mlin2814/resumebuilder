$(document).ready(function() {
    $('select').material_select();
$("#submit").on("click", function(){
    var isValid = true;
    var firstNameV = $("#fname").val().trim();
    var lastNameV = $("#lname").val().trim();
    var emailV = $("#email").val().trim();
    var zipCodeV = $("#zipCode").val().trim();
    var interestV = $("#interest").val().trim();
    var passwordV = $("#pass").val().trim();
    if(!firstNameV || !lastNameV || !emailV || !zipCodeV || !interestV || !passwordV ){
      isValid = false;
    }
    if(!isValid){
      alert("All fieldss are required");
      return false;
    }
});
});
