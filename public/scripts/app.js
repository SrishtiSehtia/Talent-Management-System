
$(document).ready(function(){
  console.log("I am in document.ready")


  $.ajax({
       method: 'GET',
       url: '/api/students',
       success: displayResults,
       error: displayErrors
  });



function displayResults(json) {
  console.log(json);
  for (i = 0; i < json.students.length; i++) {
    $('ul').append(
      <p> ${json.students.email[i]} </p>);
  }
}
function displayErrors(err) {
 console.log(err);
};
});
});
