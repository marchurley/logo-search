
$(document).ready(function(){

	/*--- Get the value from the 2 dropdown menues ---*/
  $("button").on("click", function(){
    reset();
    var programm = $("#programm").val();
    var education = $("#education").val();
    showLogo(programm, education);
    console.log(programm, education);
    $("#programm, #education").prop('selectedIndex',0); // Reset Dropbox back to default
  })

  
  function showLogo (programm, education){
    if (programm == "All" && education == "All") {
      $(".scholar, .loan, .kindergarten, .highschool").hide();
      $(".scholarC, .loanC, .kindergartenC, .highschoolC").show();
    } else if (programm == "All" && education == "Kindergarten") {
      $(".scholar, .loan, .kindergarten").hide();
      $(".scholarC, .loanC, .kindergartenC").show();
    } else if (programm == "All" && education == "Highschool") {
      $(".scholar, .loan, .highschool").hide();
      $(".scholarC, .loanC, .highschoolC").show();
    } else if (education == "All" && programm == "Scholarship") {
      $(".kindergarten, .highschool, .scholar").hide();
      $(".kindergartenC, .highschoolC, .scholarC").show();
    } else if (education == "All" && programm == "Loan") {
      $(".kindergarten, .highschool, .loan").hide();
      $(".kindergartenC, .highschoolC, .loanC").show();
    } else if (programm == "Scholarship" && education == "Kindergarten") {
      $(".scholar, .kindergarten").hide();
      $(".scholarC, .kindergartenC").show();
    } else if (programm == "Scholarship" && education == "Highschool") {
      $(".scholar, .highschool").hide();
      $(".scholarC, .highschoolC").show();
    } else if (programm == "Loan" && education == "Kindergarten") {
      $(".loan, .kindergarten").hide();
      $(".loanC, .kindergartenC").show();
    } else if (programm == "Loan" && education == "Highschool") {
      $(".loan, .highschool").hide();
      $(".loanC, .highschoolC").show();
    } else if (programm == "Scholarship") {
      $(".scholar").hide();
      $(".scholarC").show();
    } else if (programm == "Loan") {
      $(".loan").hide();
      $(".loanC").show();
    } else if (education == "Kindergarten") {
      $(".kindergarten").hide();
      $(".kindergartenC").show();
    } else if (education == "Highschool") {
      $(".highschool").hide();
      $(".highschoolC").show();
    } else if (programm == "All") {
      $(".scholar, .loan").hide();
      $(".scholarC, .loanC").show();
    } else if (education == "All"){
      $(".kindergarten, .highschool").hide();
      $(".kindergartenC, .highschoolC").show();
    } else {
      $(".scholar, .loan, .kindergarten, .highschool").hide();
      $(".scholarC, .loanC, .kindergartenC, .highschoolC").show()
    }
  }



  function reset(){
    $(".scholarC").hide();
    $(".loanC").hide();
    $(".kindergartenC").hide();
    $(".highschoolC").hide();
    $(".scholar").show();
    $(".loan").show();
    $(".kindergarten").show();
    $(".highschool").show();
  }

});

