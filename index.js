var tip = 0;
var calc = document.querySelector('.calc');
var bill = document.getElementById('bill');
var guests = document.getElementById('guests');
var quality = document.getElementById('quality');
var carrier = document.querySelector('.carrier');



bill.value = '';
guests.value = '';


calc.addEventListener('click', () => {
    tip = ((bill.value / guests.value )* (quality.value/100)).toFixed(2)
    if(tip === 'NaN' || tip === 'Infinity'){
        carrier.innerHTML = 'Tip is $0 each';
        anime(); 
    }
    else{
    carrier.innerHTML = 'Tip is $' + tip + ' each';
    anime();
    }
})
function anime(){
    carrier.style.animation = 'carry 1.5s ease-out 2 alternate';
    setTimeout( function(){ carrier.style.animation = '';}, 3800)
}