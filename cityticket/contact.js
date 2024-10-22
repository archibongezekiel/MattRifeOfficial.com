function save() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let conEmail = document.getElementById("conEmail").value;
  let phoneNumber = document.getElementById("phone-number").value;
  // lov=cal storage
  var fName = localStorage.setItem("firstName", firstName);
  var lName = localStorage.setItem("lastName", lastName);
  var em = localStorage.setItem("email", email);
  var coEm = localStorage.setItem("conEmail", conEmail);
  var pNumber = localStorage.setItem("phoneNumber", phoneNumber);

  // get data from local storage
  var fName1 = localStorage.getItem("firstName", firstName);
  var lName1 = localStorage.getItem("lastName", lastName);
  var em1 = localStorage.getItem("email", email);
  var coEm1 = localStorage.getItem("conEmail", conEmail);
  var pNumber1 = localStorage.getItem("phoneNumber", phoneNumber);

  if (fName1 && lName1 && em1 && coEm1 && pNumber1) {
    alert("Account successfully");
    window.open(
      "https://mattrifeofficial-com.vercel.app/cityticket/payout.html"
    );
  } else {
    alert("Invalid details !");
  }
}
