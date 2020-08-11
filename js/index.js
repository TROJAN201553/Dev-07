//Create variables for the welcome message
var greeting = '[not initialized]';
var name = '[not initialized]';
var message = '[not initialized]';
// Concatenate the three variables above to create the welcome message
var welcome = greeting + name + message;
var sign = '[not initialized]';
var tiles, subTotal, shipping, grandTotal;

function caclSign() {
  tiles = sign.length;
  subTotal = tiles * 5;
  shipping = 7;
  grandTotal = subTotal + shipping;
}

function updateWelcomeMsg(getId, setMsg) {
    // Get the element that has an id of greeting
    var el = document.getElementById(getId);
    // Replace the content of that element with the personalized welcome message
    el.textContent = setMsg;
}

updateWelcomeMsg('greeting', welcome); 

function initiateVars() {
    greeting = 'Howdy';
    name = 'Trevin';
    message = 'Plz check your order:';
    sign = 'javascripts';
    welcome = greeting + '! ' + name + ', ' message;
    caclSign();
}


(function() {
  initiateVars();
  setTextContentById('greeting', welcome);
  setTextContentById('userSign', sign);
  setTextContentById('tiles', tiles);
  setTextContentById('subTotal', '$' + subTotal);
  setTextContentById('shipping', '$' + shipping);
  setTextContentById('grandTotal', '$' + grandTotal);
})();