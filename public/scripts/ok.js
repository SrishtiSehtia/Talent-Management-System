
$(document).ready(function(){
  console.log('okay');
  $('.classes').hide();

  $('.students').hide();

  $('#show_all_students').on('click',function(){
  $('.classes').hide();
  $('.students').show();
  $('#student_form').show();

});

$('#show_all_classes').on('click',function(){
  $('.students').hide();
  $('.classes').show();
});

$("ul").on('click','.delete', function(e) {
  $target = $(e.target);
  var type=$(this).attr("data-type");
  var id  = $(this).attr("data-id");
  console.log(id);

$.ajax ({
  type: 'DELETE',
  url: `${type}${id}`,
  success :function(response) {
    $(`#${id}`).remove();
  },
  error: function(err) {
    console.log(err);
    }
  });
});

$('#student_form').on('submit', function(e) {
  e.preventDefault();
  console.log('new student serialized', $(this).serializeArray());
  $.ajax({
    method: 'POST',
    url: '/api/students',
    data: $(this).serializeArray(),
    success: function(response) {
      console.log(response);
      $('.students ul').append(`<li id='${response._id}'>${response.FirstName} ${response.LastName}
      <button type="button" name="button" class="btn btn-primary">Edit</button>
      <button class="btn btn-primary delete" type="button" name="button" data-id='${response._id}' data-type='/api/students/' >Delete</button>
      </li>`)
    },
    error: function(err) {
      console.log(err);
    }
  });
});


$('#course_form').on('submit', function(e) {
    e.preventDefault();
    console.log('new student serialized', $(this).serializeArray());
  $.ajax({
  method: 'POST',
  url: '/api/courses',
  data: $(this).serializeArray(),
  success: function(response) {
    console.log(response);
    $('.classes ul').append(`<li id='${response._id}'>${response.Name} ${response.Description}
    <button type="button" name="button" class="btn btn-primary">Edit</button>
    <button class="btn btn-primary delete" type="button" name="button" data-id='${response._id}' data-type='/api/courses/' >Delete</button>
    </li>`)
  },
  error: function(err) {
    console.log(err);
  }
});
});

});



$('')
