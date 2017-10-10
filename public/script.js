function calcTotal() {
    var itemTotal = 0;
  
  var item1 = document.getElementById("item1");
   var item2 = document.getElementById("item2");
   var item3 = document.getElementById("item3");
   var item4 = document.getElementById("item4");
   var item5 = document.getElementById("item5");
  
  (item1.checked) ? (itemTotal += 18) : (itemTotal += 0);   
  (item2.checked) ? (itemTotal += 29) : (itemTotal += 0);
  (item3.checked) ? (itemTotal += 60) : (itemTotal += 0);
  (item4.checked) ? (itemTotal += 130) : (itemTotal += 0);
  (item5.checked) ? (itemTotal += 160) : (itemTotal += 0);
  
  var salesTaxRate = 0.06;
  var orderTotal = itemTotal + (itemTotal * salesTaxRate);
  alert("Your order total is $" + orderTotal.toFixed(2));
  
  
}
document.getElementById("submit").addEventListener("click", calcTotal, false);
