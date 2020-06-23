// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDLr1DBTGzowrchVYH1r6XEoJJ8sp7QHBc",
  authDomain: "contactform-bcc58.firebaseapp.com",
  databaseURL: "https://contactform-bcc58.firebaseio.com",
  projectId: "contactform-bcc58",
  storageBucket: "contactform-bcc58.appspot.com",
  messagingSenderId: "633577080741",
  appId: "1:633577080741:web:06ac0fa0df1760899dca4c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref("messages");

document.getElementById("contactForm").addEventListener("submit", submitForm);
function submitForm(event) {
  event.preventDefault();

  // Get values
  let name = getInputValue("name");
  let company = getInputValue("company");
  let email = getInputValue("email");
  let phone = getInputValue("phone");
  let message = getInputValue("message");
  // Save message
  saveMessage(name, company, email, phone, message);

  //Show alert
  document.querySelector(".alert").style.display = "block";

  // Hide alert after 3 seconds
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);
  // Clear form
  document.getElementById("contactForm").reset();
}

// Get form value function
const getInputValue = (id) => {
  return document.getElementById(id).value;
};

// Save message to firebase

function saveMessage(name, company, email, phone, message) {
  let newMessageReference = messagesRef.push();
  newMessageReference.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message,
  });
}
