
// var person = {
//   name: 'justin',
//   location: 'atl'
// };

// var templateString = $('#personFormat').text();

// var templateFunction = _.template(templateString);

// var finalHTML = templateFunction(person);

var form1 = [
  { type: 'text', label: 'First Name' },
  { type: 'text', label: 'Last Name' },
  { type: 'email', label: 'Email' },
  { type: 'password', label: 'Password' },
  { type: 'password', label: 'Password Verify' },
  { type: 'submit', label: 'Register'}
];

function formBuilder (data) {

  var formHTML = $('#formElement').text();

  var formFunction = _.template(formHTML)

  data.forEach( function (elem) {

    $('#registrationForm').append(formFunction(elem));

  });

}

formBuilder(form1);


