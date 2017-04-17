
//Size Selector

let sizeXL = $('.XL').on('click', function (e) {$(this).closest('.size').find('.test').text('XL')});

let sizeL = $('.L').on('click', function (e) {$(this).closest('.size').find('.test').text('L')});

let sizeM = $('.M').on('click', function (e) {$(this).closest('.size').find('.test').text('M')});

let sizeS = $('.S').on('click', function (e) {$(this).closest('.size').find('.test').text('S')});


//Color Selector


function clickColorBlue1() {
  let myImage = document.querySelector('img.first');
  myImage.src = "shirts/blue-front.png";
  let colorBox = document.querySelector('#color1');
  colorBox.style.backgroundColor = "#80bbe5";
  }

function clickColorBlue2() {
  let myImage = document.querySelector('img.second');
  myImage.src = "shirts/blue-front.png";
  let colorBox = document.querySelector('#color2');
  colorBox.style.backgroundColor = "#80bbe5";
  }

function clickColorBlue3() {
  let myImage = document.querySelector('img.third');
  myImage.src = "shirts/blue-front.png";
  let colorBox = document.querySelector('#color3');
  colorBox.style.backgroundColor = "#80bbe5";
  }

let colorBlue = document.querySelectorAll('.blue-option');
colorBlue[0].addEventListener('click', clickColorBlue1);
colorBlue[1].addEventListener('click', clickColorBlue2);
colorBlue[2].addEventListener('click', clickColorBlue3);



//Pink Color

function clickColorPink1() {
  let myImage = document.querySelector('img.first');
  myImage.src = "shirts/pink-front.png";
  let colorBox = document.querySelector('#color1');
  colorBox.style.backgroundColor = "#e276a7";
  }

function clickColorPink2() {
  let myImage = document.querySelector('img.second');
  myImage.src = "shirts/pink-front.png";
  let colorBox = document.querySelector('#color2');
  colorBox.style.backgroundColor = "#e276a7";
  }

function clickColorPink3() {
  let myImage = document.querySelector('img.third');
  myImage.src = "shirts/pink-front.png";
  let colorBox = document.querySelector('#color3');
  colorBox.style.backgroundColor = "#e276a7";
  }

let colorPink = document.querySelectorAll('.pink-option');
colorPink[0].addEventListener('click', clickColorPink1);
colorPink[1].addEventListener('click', clickColorPink2);
colorPink[2].addEventListener('click', clickColorPink3);



//Orange Color

function clickColorOrange1() {
  let myImage = document.querySelector('img.first');
  myImage.src = "shirts/yellow-front.png";
  let colorBox = document.querySelector('#color1');
  colorBox.style.backgroundColor = "#e4b177";
  }

function clickColorOrange2() {
  let myImage = document.querySelector('img.second');
  myImage.src = "shirts/yellow-front.png";
  let colorBox = document.querySelector('#color2');
  colorBox.style.backgroundColor = "#e4b177";
  }

function clickColorOrange3() {
  let myImage = document.querySelector('img.third');
  myImage.src = "shirts/yellow-front.png";
  let colorBox = document.querySelector('#color3');
  colorBox.style.backgroundColor = "#e4b177";
  }

let colorOrange = document.querySelectorAll('.orange-option');
colorOrange[0].addEventListener('click', clickColorOrange1);
colorOrange[1].addEventListener('click', clickColorOrange2);
colorOrange[2].addEventListener('click', clickColorOrange3);



//Green Color

function clickColorGreen1() {
  let myImage = document.querySelector('img.first');
  myImage.src = "shirts/green-front.png";
  let colorBox = document.querySelector('#color1');
  colorBox.style.backgroundColor = "#8bb992";
  }

function clickColorGreen2() {
  let myImage = document.querySelector('img.second');
  myImage.src = "shirts/green-front.png";
  let colorBox = document.querySelector('#color2');
  colorBox.style.backgroundColor = "#8bb992";
  }

function clickColorGreen3() {
  let myImage = document.querySelector('img.third');
  myImage.src = "shirts/green-front.png";
  let colorBox = document.querySelector('#color3');
  colorBox.style.backgroundColor = "#8bb992";
  }

let colorGreen = document.querySelectorAll('.green-option');
colorGreen[0].addEventListener('click', clickColorGreen1);
colorGreen[1].addEventListener('click', clickColorGreen2);
colorGreen[2].addEventListener('click', clickColorGreen3);



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
