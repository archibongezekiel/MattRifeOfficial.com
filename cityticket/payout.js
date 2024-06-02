function copyTextCash() {
  let bankTag = document.getElementById("cashAppName");
  navigator.clipboard.writeText(bankTag.innerText);
  document.getElementById("copyIcon").innerText = "Copied";
  const myTimeout = setTimeout(time, 1000);
  return myTimeout;
}
function time() {
  document.getElementById("copyIcon").innerText = "content_copy";
}
//zelle
function copyTextZelle() {
  let bankTag = document.getElementById("zelle-tag");
  navigator.clipboard.writeText(bankTag.innerText);
  document.getElementById("copyIconZelle").innerText = "Copied";
  const myTimeout = setTimeout(zelle, 1000);
  return myTimeout;
}
function zelle() {
  document.getElementById("copyIconZelle").innerText = "content_copy";
}
// venmo
function copyTextVenmo() {
  let bankTag = document.getElementById("venmo-tag");
  navigator.clipboard.writeText(bankTag.innerText);
  document.getElementById("copyIconVenmo").innerText = "Copied";
  const myTimeout = setTimeout(venmo, 1000);
  return myTimeout;
}
function venmo() {
  document.getElementById("copyIconVenmo").innerText = "content_copy";
}
// paypal
function copyTextPaypal() {
  let bankTag = document.getElementById("paypal-tag");
  navigator.clipboard.writeText(bankTag.innerText);
  document.getElementById("copyIconPaypal").innerText = "Copied";
  const myTimeout = setTimeout(paypal, 1000);
  return myTimeout;
}
function paypal() {
  document.getElementById("copyIconPaypal").innerText = "content_copy";
}
