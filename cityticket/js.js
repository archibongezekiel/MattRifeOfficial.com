function test() {
  const pw = document.getElementById("pw").value;
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  alert(pw + email + name);

  const userName = localStorage.setItem("pw", pw);
  const userEmail = localStorage.setItem("email", email);
  const userPassword = localStorage.setItem("name", name);
}
