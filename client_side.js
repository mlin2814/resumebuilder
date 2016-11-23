$(document).ready(function() {
    //for materializewaves-effect purple darken-4 btn
    $('select').material_select();
$("#submit").on("click", function(){
    var isValid = true;
    var firstNameV = $("#fname").val().trim();
    var lastNameV = $("#lname").val().trim();
    var emailV = $("#email").val().trim();
    var interestV = $("#interest").val().trim();
    var passwordV = $("#pass").val().trim();
    var zipCodeV = $("#zipCode").val().trim();
    if(!firstNameV || !lastNameV || !emailV || !interestV || !passwordV || !zipCodeV){
      isValid = false;
    }
    if(!isValid){
      alert("All fieldss are required");
      return false;
    }
});//submit on click
}); //Document READY
