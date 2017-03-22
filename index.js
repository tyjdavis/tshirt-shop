//Size Selector


function clickSizeXL(event) {
  event.target.parentElement.parentElement.lastElementChild.textContent= "XL";
}

let sizeXL = document.querySelectorAll('.XL');
for (i=0; i < sizeXL.length; i++) {
  sizeXL[i].addEventListener('click', clickSizeXL);
}

//another way to do it instead of for loop

/*  sizeXL[0].addEventListener('click', clickSizeXL);
    sizeXL[1].addEventListener('click', clickSizeXL);
    sizeXL[2].addEventListener('click', clickSizeXL); */


function clickSizeL(event) {
  event.target.parentElement.parentElement.lastElementChild.textContent= "L";
}

  let sizeL = document.querySelectorAll('.L');
  for (i = 0; i < sizeL.length; i++) {
    sizeL[i].addEventListener('click', clickSizeL);
  }


  /*  sizeL[0].addEventListener('click', clickSizeL);
      sizeL[1].addEventListener('click', clickSizeL);
      sizeL[2].addEventListener('click', clickSizeL); */


function clickSizeM(event) {
  event.target.parentElement.parentElement.lastElementChild.textContent= "M";
}
  let sizeM = document.querySelectorAll('.M');
  for (i = 0; i < sizeM.length; i++) {
  sizeM[i].addEventListener('click', clickSizeM);
}


/*  sizeM[0].addEventListener('click', clickSizeM);
    sizeM[1].addEventListener('click', clickSizeM);
    sizeM[2].addEventListener('click', clickSizeM); */


function clickSizeS(event) {
  event.target.parentElement.parentElement.lastElementChild.textContent= "S";
}
  let sizeS = document.querySelectorAll('.S');
  for (i = 0; i < sizeS.length; i++) {
  sizeS[i].addEventListener('click', clickSizeS);
  }


/*  sizeS[0].addEventListener('click', clickSizeS);
    sizeS[1].addEventListener('click', clickSizeS);
    sizeS[2].addEventListener('click', clickSizeS); */


//Color Selector


//Blue Color

function clickColorBlue1() {
  let myImage = document.querySelector('img.first');
  myImage.src = "shirts/blue-front.png";
  }

function clickColorBlue2() {
  let myImage = document.querySelector('img.second');
  myImage.src = "shirts/blue-front.png";
  }

function clickColorBlue3() {
  let myImage = document.querySelector('img.third');
  myImage.src = "shirts/blue-front.png";
  }

let colorBlue = document.querySelectorAll('.blue-option');
colorBlue[0].addEventListener('click', clickColorBlue1);
colorBlue[1].addEventListener('click', clickColorBlue2);
colorBlue[2].addEventListener('click', clickColorBlue3);


//Pink Color

function clickColorPink1() {
  let myImage = document.querySelector('img.first');
  myImage.src = "shirts/pink-front.png";
  }

function clickColorPink2() {
  let myImage = document.querySelector('img.second');
  myImage.src = "shirts/pink-front.png";
  }

function clickColorPink3() {
  let myImage = document.querySelector('img.third');
  myImage.src = "shirts/pink-front.png";
  }

let colorPink = document.querySelectorAll('.pink-option');
colorPink[0].addEventListener('click', clickColorPink1);
colorPink[1].addEventListener('click', clickColorPink2);
colorPink[2].addEventListener('click', clickColorPink3);


//Orange Color

function clickColorOrange1() {
  let myImage = document.querySelector('img.first');
  myImage.src = "shirts/yellow-front.png";
  }

function clickColorOrange2() {
  let myImage = document.querySelector('img.second');
  myImage.src = "shirts/yellow-front.png";
  }

function clickColorOrange3() {
  let myImage = document.querySelector('img.third');
  myImage.src = "shirts/yellow-front.png";
  }

let colorOrange = document.querySelectorAll('.orange-option');
colorOrange[0].addEventListener('click', clickColorOrange1);
colorOrange[1].addEventListener('click', clickColorOrange2);
colorOrange[2].addEventListener('click', clickColorOrange3);


//Green Color

function clickColorGreen1() {
  let myImage = document.querySelector('img.first');
  myImage.src = "shirts/green-front.png";
  }

function clickColorGreen2() {
  let myImage = document.querySelector('img.second');
  myImage.src = "shirts/green-front.png";
  }

function clickColorGreen3() {
  let myImage = document.querySelector('img.third');
  myImage.src = "shirts/green-front.png";
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
  cartLimit(event);
}


let cartTotal = document.querySelectorAll(".buy");
for (i = 0; i < cartTotal.length; i++) {
cartTotal[i].addEventListener('click', cartAdd);
}


//Limit of 5 of each individual shirt

let saveShirt = 0;
let natureShirt = 0;
let forrestShirt = 0;

function cartLimit (event) {

  let cartIcon = event.target;
  let shirt = cartIcon.dataset.shirt;

      if (shirt === "Save my Trees") {
        saveShirt++;
        if (saveShirt >= 8) {

          console.log("stop");
          //cartAdd().disabled = true;
        }
      } else if (shirt === "Nature Lover") {
        natureShirt++;
        if (natureShirt >= 8) {

          console.log("stop2");
          //cartIcon.disabled = true;
        }
      } else {
        forrestShirt++;
        if (forrestShirt >= 8) {

          console.log("stop3");
          //cartIcon.disabled = true;
        }
      }
    }




    let shirtCounter = 0;

    function cartDiscount (event) {

      if (cartTotal >= 5) {
        console.log("discount");
      }
    }
