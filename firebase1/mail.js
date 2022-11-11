const firebaseConfig = {
    apiKey: "AIzaSyB6Przv3ISf8D8gExA3Qq2oJLlxeyPaCaE",
    authDomain: "employee-details-85522.firebaseapp.com",
    databaseURL: "https://employee-details-85522-default-rtdb.firebaseio.com",
    projectId: "employee-details-85522",
    storageBucket: "employee-details-85522.appspot.com",
    messagingSenderId: "788536420988",
    appId: "1:788536420988:web:3839ceded829be2edcf7f9"
  };
  
  firebase.initializeApp(firebaseConfig);

// reference your database
const contactFormDB = firebase.database().ref("contactForm");
//console.log(contactFormDB);

document.getElementById("contactForm").addEventListener("button", submitForm);

function submitForm(e) {
  e.preventDefault();

  var emailid = document.getElementById("form2Example11").value;
  var password = document.getElementById("form2Example22").value;
  //var msgContent = getElementVal("msgContent");
  console.log(emailid);
  console.log(password);

  saveMessages(emailid, password);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

var saveMessages = (emailid, password) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    emailid: emailid,
    password: password,
  });
};