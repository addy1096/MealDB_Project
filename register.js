  
// function getBase64Image(img) {
//   var canvas = document.createElement("canvas");
//   canvas.width = img.width;
//   canvas.height = img.height;

//   var ctx = canvas.getContext("2d");
//   ctx.drawImage(img, 0, 0);

//   var dataURL = canvas.toDataURL("image/png");

//   return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
// }

function submitForm() {
  // let profileimg = document.getElementById('avatar')
  // let imgData = getBase64Image(profileimg);
  var data = {
    fname: document.getElementById('fname').value,
    lname: document.getElementById('lname').value,
    age: document.getElementById('age').value,
    occupation_names: document.getElementById('occupation-names').value,
    dob: document.getElementById('dob').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
    // avatar: imgData,
     
  };
    fetch("/submitForm", {
  method: "POST",
  headers: {'Content-Type': 'application/json'}, 
  body: JSON.stringify(data)
}).then(res => {
    sessionStorage.setItem('UserFormData', JSON.stringify(data));
  console.log("Request complete! response:", res);
  alert("Successfull!");
});
}

///Edit Form
// const fetchData =  JSON.parse(JSON.stringify(sessionStorage.getItem('UserFormData')));
// document.getElementById('fname').value = fetchData.fname;
// document.getElementById('lname').value = fetchData.lname;