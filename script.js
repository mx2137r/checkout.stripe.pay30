 var cardnumberIp = [
  document.getElementById("card-number-1"),
  document.getElementById("card-number-2"),
  document.getElementById("card-number-3"),
  document.getElementById("card-number-4")
];
var cardNumberView = document.getElementsByClassName("cardnumber")[0];
cardnumberIp[0].addEventListener("keyup",function(){
  cardNumberView.getElementsByClassName("part-1")[0].innerText = this.value;
});
cardnumberIp[1].addEventListener("keyup",function(){
  cardNumberView.getElementsByClassName("part-2")[0].innerText = this.value;
});
cardnumberIp[2].addEventListener("keyup",function(){
  cardNumberView.getElementsByClassName("part-3")[0].innerText = this.value;
});
cardnumberIp[3].addEventListener("keyup",function(){
  cardNumberView.getElementsByClassName("part-4")[0].innerText = this.value;
});


var accountHolderIp = document.getElementById("account-holder");
var accountHolderView =  document.getElementsByClassName("account-holder-name")[0];

accountHolderIp.addEventListener("keyup",function(){
  accountHolderView.innerText = this.value;
});


var accountExpiryView  = {
  month:document.getElementsByClassName("expiry")[0].getElementsByClassName("month")[0],
  year:document.getElementsByClassName("expiry")[0].getElementsByClassName("year")[0]
};
var expiryMonth = document.getElementById("expiry-month");
var expiryYear = document.getElementById("expiry-year");

expiryMonth.addEventListener("change",function(){
  accountExpiryView.month.innerText = this.value;
});
expiryYear.addEventListener("change",function(){
  accountExpiryView.year.innerText = this.value;
});


var cvvCodeView = document.getElementsByClassName("cvv")[0].getElementsByClassName("code")[0];
var cvvCode = document.getElementById("cvv-code");
cvvCode.addEventListener("keyup",function(){
  cvvCodeView.innerText = this.value;
});
cvvCode.addEventListener("focus",function(){
  document.getElementsByClassName("card-display")[0].classList.add("active");
});
cvvCode.addEventListener("blur",function(){
  document.getElementsByClassName("card-display")[0].classList.remove("active");
});