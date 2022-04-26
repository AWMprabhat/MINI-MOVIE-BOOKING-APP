// Store the wallet amount to your local storage with key "amount"
var sum = Number(localStorage.getItem("amount"));

function addmoney(){
  var amount = document.getElementById("amount").value;
  amount = Number(amount)
  sum+=amount;
  localStorage.setItem("amount",sum)
  document.getElementById("wallet").innerText=sum
}
document.getElementById("wallet").innerText=sum