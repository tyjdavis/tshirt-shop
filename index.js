//Size Selector

$('.XL').on('click', function () {$(this).closest('.size').find('.sizeText').text('XL')});

$('.L').on('click', function () {$(this).closest('.size').find('.sizeText').text('L')});

$('.M').on('click', function () {$(this).closest('.size').find('.sizeText').text('M')});

$('.S').on('click', function () {$(this).closest('.size').find('.sizeText').text('S')});


//Color Selector


$('.blue-option').on('click', function() {$(this).closest('article').find('.t-shirt').attr('src', 'shirts/blue-front.png');
$(this).parent().next().css('background-color', '#80bbe5')});


//Pink Color


$('.pink-option').on('click', function() {$(this).closest('article').find('.t-shirt').attr('src', 'shirts/pink-front.png');
$(this).parent().next().css('background-color', '#e276a7')});


//Orange Color


$('.orange-option').on('click', function() {$(this).closest('article').find('.t-shirt').attr('src', 'shirts/yellow-front.png');
$(this).parent().next().css('background-color', '#e4b177')});


//Green Color


$('.green-option').on('click', function() {$(this).closest('article').find('.t-shirt').attr('src', 'shirts/green-front.png');
$(this).parent().next().css('background-color', '#8bb992')});



//Shopping Cart

function buy1() {
  let ul = document.querySelector(".cart");
  let li = document.createElement("li");
  li.textContent = "Save my Trees $29";
  ul.appendChild(li);
}

function buy2() {
  let ul = document.querySelector(".cart");
  let li = document.createElement("li");
  li.textContent = "Nature Lover $19";
  ul.appendChild(li);
}

function buy3() {
  let ul = document.querySelector(".cart");
  let li = document.createElement("li");
  li.textContent = "Forrest Walk $39";
  ul.appendChild(li);
}

let buyShirt = document.querySelectorAll(".buy");
buyShirt[0].addEventListener('click', buy1);
buyShirt[1].addEventListener('click', buy2);
buyShirt[2].addEventListener('click', buy3);



//Updating price in shopping cart

function cartAdd(event) {
  let placeHolder = document.getElementById("total").textContent;
  let totalNumber = parseInt(placeHolder);
  let placeHolder1 = event.target.parentElement.nextElementSibling.querySelector(".price").textContent;
  let shirtCost = parseInt(placeHolder1);
  totalNumber = totalNumber + shirtCost;
  total.textContent = totalNumber;
  cartLimit();
}


let cartTotal = document.querySelectorAll(".buy");
for (i = 0; i < cartTotal.length; i++) {
cartTotal[i].addEventListener('click', cartAdd);
}



//Limit of 5 of each individual shirt

let saveShirt = 0;
let natureShirt = 0;
let forrestShirt = 0;

function cartLimit () {

  let cartIcon = event.target;
  let shirt = cartIcon.dataset.shirt;

  if (shirt === "Save my Trees") {
    saveShirt++;
    if (saveShirt >= 8) {
      sold1.style.display ='block';
    }

  } else if (shirt === "Nature Lover") {
    natureShirt++;
    if (natureShirt >= 8) {
      sold2.style.display ='block';
  }

  } else {
    forrestShirt++;
    if (forrestShirt >= 8) {
      sold3.style.display ='block';
    }
  }
}



//5% discount after five or more shirts

//work in progress

let shirtCounter = 0;

function cartDiscount (event) {

  if (cartAdd() >= 5) {
    console.log("discount");
  }
}
