//Size Selector

function clickSizeXL(event) {
  event.target.parentElement.parentElement.lastElementChild.textContent= "XL";
}

let sizeXL = document.querySelectorAll('.XL');
  sizeXL[0].addEventListener('click', clickSizeXL);
  sizeXL[1].addEventListener('click', clickSizeXL);
  sizeXL[2].addEventListener('click', clickSizeXL);


function clickSizeL(event) {
  event.target.parentElement.parentElement.lastElementChild.textContent= "L";
}

  let sizeL = document.querySelectorAll('.L');
    sizeL[0].addEventListener('click', clickSizeL);
    sizeL[1].addEventListener('click', clickSizeL);
    sizeL[2].addEventListener('click', clickSizeL);


function clickSizeM(event) {
  event.target.parentElement.parentElement.lastElementChild.textContent= "M";
}
  let sizeM = document.querySelectorAll('.M');
    sizeM[0].addEventListener('click', clickSizeM);
    sizeM[1].addEventListener('click', clickSizeM);
    sizeM[2].addEventListener('click', clickSizeM);


function clickSizeS(event) {
  event.target.parentElement.parentElement.lastElementChild.textContent= "S";
}
  let sizeS = document.querySelectorAll('.S');
    sizeS[0].addEventListener('click', clickSizeS);
    sizeS[1].addEventListener('click', clickSizeS);
    sizeS[2].addEventListener('click', clickSizeS);


//Color Selector

function clickColorBlue(event) {
  event.target.parentElement.parentElement.imageContent src= "shirts/blue-front.png";
  }

  let colorBlue = document.querySelectorAll('.blue-option');
  colorBlue[0].addEventListener('click', clickColorBlue);
  colorBlue[1].addEventListener('click', clickColorBlue);
  colorBlue[2].addEventListener('click', clickColorBlue);

function clickColorPink(event) {
  event.target.parentElement.parentElement.lastElementChild.imageContent= "XL";
  }

  let colorPink = document.querySelectorAll('.pink-option');
  colorPink[0].addEventListener('click', clickColorPink);
  colorPink[1].addEventListener('click', clickColorPink);
  colorPink[2].addEventListener('click', clickColorPink);

function clickColorOrange(event) {
  event.target.parentElement.parentElement.lastElementChild.imageContent= "XL";
  }

  let colorOrange = document.querySelectorAll('.orange-option');
  colorOrange[0].addEventListener('click', clickColorOrange);
  colorOrange[1].addEventListener('click', clickColorOrange);
  colorOrange[2].addEventListener('click', clickColorOrange);

function clickColorGreen(event) {
  event.target.parentElement.parentElement.lastElementChild.imageContent= "XL";
  }

  let colorGreen = document.querySelectorAll('.green-option');
  colorGreen[0].addEventListener('click', clickColorGreen);
  colorGreen[1].addEventListener('click', clickColorGreen);
  colorGreen[2].addEventListener('click', clickColorGreen);
