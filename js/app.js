/*Exercise 1.  Fill in the correct id to target the paragraph tag*/
function fontSize(){
  document.getElementById("box1").style.fontSize = "200%";
}

/*Exercise 2. change the font color to red*/
function colorMeBadd(){
  document.getElementById('box2').style.color = 'red'; 
}

/*Exercise 3. fill in the spaces to make this function operate:*/
function showAnswer(){
  document.getElementById('three').innerHTML = " C (da sea get it?) arrrr!";
}

/*Exercise 4.  Instruct the following function to display the message "My name is Lee, Brrruuuce Lee!" in a new paragraph element after the button is clicked.*/

function kungfu(){
  document.getElementById('beWater').innerHTML = "My name is Lee, Brrruuuce Lee!";
}


//Event Listeners
//Please write your code inside the window.onload function for exerices 5 onward...

window.onload = function (){
  /*Exercise 5. Add an event listener to the quotes button that will display a quote after it is clicked on.</p>*/

  var firstQuote = "Our lives are defined by opportunities; even the ones we miss.";

  document.getElementById("Benjamin").addEventListener("click", sayQuote);

  function sayQuote(){
    document.getElementById("lines").innerHTML = firstQuote;
  }


  /*Exercise 6. Add another event listener to the image below that will display an inspirational quote after it is clicked</p>*/
  var coolQuote = "this world is but a canvas to your imagination";
  document.getElementById("khaled").addEventListener("click", newQuote);

  function newQuote(){
    document.getElementById("wedabest").innerHTML = coolQuote;
  }




  /*Exercise 7.  Generate a random quote from clicking on a button*/
  var quotes = ["It's a funny thing about comin' home. Looks the same, smells the same, feels the same. You'll realize what's changed is you.", "Momma? Momma? Some days, I feel different than the day before.", "Some people, were born to sit by a river. Some get struck by lightning. Some have an ear for music. Some are artists. Some swim. Some know buttons. Some know Shakespeare. Some are mothers. And some people, dance.", "For what it's worth, it's never too late to be whoever you want to be."];

  document.getElementById('change').addEventListener('click', randomQuote);

  function randomQuote() {
   var rand= Math.floor(Math.random()*quotes.length);
   document.getElementById('displayQuotes').innerHTML=quotes[rand];

 }





 /*Exercise 8. Create an event listener that will show and hide the message when clicking on the button.*/

 document.getElementById("hideandseek").addEventListener('click',showMe);

 function showMe (){
  var showdaMoney = document.getElementById('showmoney');
  if(showdaMoney.style.display==='none'){
    showdaMoney.style.display="block";

  } else {showdaMoney.style.display="none";
}
}



/*Final Boss:
Make a visual list of the items in the orders array. When clicking on the product, you must show and hide the price for that item.*/


var orders = [{product: "Finger Toothbrush", price: 9.99},
{product: "Barry Manilow's Greatest Hits Collection Vol 1", price: 500.01}, 
{product: "Goldfish Aquarium Phone Booth", price: 199.99}, 
{product: "Woof Washer 360", price: 9.99},
{product: "Sauna Pants", price: 39.95},
{product: "Noiseless Mute Karaoke Microphone", price: 79.99}, 
{product: "Necktie Umbrella", price: 16.86}];

//console.log('orders[0].product', orders[0].product);
//console.log('orders[0].price', orders[0].price);


function listOrders(items){
  for(var i=0; i < items.length; i++){
     /* console.log(items[i]); */
    console.log(items[i].product);
    console.log(items[i].price);

  var orderBox= document.createElement('div');
  orderBox.className= "orders";
  myOrders.appendChild(orderBox);

  var productBox = document.createElement('div');
  productBox.className="products";
  productBox.innerHTML=items[i].product;
  orderBox.appendChild(productBox);

  var priceBox = document.createElement('div');
  priceBox.className="price";
  priceBox.innerHTML= items[i].price;
  productBox.appendChild(priceBox);  



  }
}

listOrders(orders);

var productList= document.getElementsByClassName('products');
for(var i=0; i<productList.length; i++){
  productList[i].addEventListener('click', theList);

function theList(){
  var showPrice= this.querySelectorAll('.price')[0];
  console.log(this);
  if(showPrice.style.display === 'none'){
    showPrice.style.display = 'block'; 
  } else {
    showPrice.style.display = 'none';
  }

}
 
  }


};

/* var myOrderContainer= document.getElementById('myOrders');

document.addEventListener("click", showPrice);

function toggle(){
  var product = this;
  if(product.classList.contains('selected')=== false) {
    product.classList.add('selected');
  }else {
    product.classList.remove('selected');
  }
} 

function newButton(){
  for (var i=0; i < orders.length; i++){
    var newOrder= document.createElement('button');
    newOrder.innerHTML= orders[i].product;
    newOrder.className="box";
    myOrderContainer.appendChild(newOrder);
  }
}
*/
  /*function showPrice (){
    var total =0;
    var allPrices = document.getElementsByClassName('box');
    allPrices.innerHTML = orders.price;
  for(var i=0; i < allPrices.length; i++){
    if(showPrice.style.display==="none"){
      showPrice.style.display="block";
   } else { showPrice.style.display="none";
  }

  }
} */


/*
function showPrice() {
  var total=0;
  var allPrices = document.getElementsByClassName('box');
  allPrices.innerHTML = orders.price; 
  for(var i=0; i < allPrices.length; i++){
    if(allPrices[i].classList.contains('selected')===true){
      total = parseInt(allPrices[i].innerHTML);
    }

  } 
  myOrderContainer.innerHTML=total;

} 

newButton(); */

// check CSS and use this 


//document.getElementById('').addEventListener();



//var whyWontYouWork= document.getElementById('myOrders').innerHTML=orders;


//function bossOrder (){
 // for(var i=0; i < orders.length; i++){
 //   var pleaseWork= document.getElementById('myOrders');
  //  if(pleaseWork.style.display==="none"){
   //   pleaseWork.style.display="block";
  // } else {pleaseWork.style.display="none";
 // }

 // }
//}



