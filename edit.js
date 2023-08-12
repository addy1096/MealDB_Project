const fetchData =  JSON.parse(sessionStorage.getItem('UserFormData'));
document.getElementById('fname').value = fetchData.fname;
document.getElementById('lname').value = fetchData.lname;
document.getElementById('age').value = fetchData.age;
document.getElementById('occupation-names').value = fetchData.occupation_names;
document.getElementById('dob').value = fetchData.dob;
document.getElementById('email').value = fetchData.email;
document.getElementById('password').value = fetchData.password;
// document.getElementById('avatar').src = fetchData.avatar;


