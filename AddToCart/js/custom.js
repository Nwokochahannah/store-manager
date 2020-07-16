let counter = document.getElementById("counter");
let x = parseInt(counter.value);


function addValue() {
  if (x < 100) {
    x++;
    counter.value = x;
  } else {
    x = 100;
    counter.value = x;
  }
}

function minusValue() {
  if (x > 1) {
    x--;
    counter.value = x;
  } else {
    x = 1;
    counter.value = x;
  }
}

//DISPLAY WOMEN AND MEN WHEN BUTTON IS CLICKED
let men = [];
let women = [];
let gender = Array.from(document.getElementsByClassName('item'));
console.log(gender)

for (let j = 0; j < document.getElementsByName("men").length; j++) {
  men.push(document.getElementsByName("men")[j]);
}

for (let i = 0; i < document.getElementsByName("women").length; i++) {
    women.push(document.getElementsByName("women")[i]);
  }

function displayWomen() {
  for (let j = 0; j < men.length; j++) {
      men[j].style.display = "none";
  }

  for (let i = 0; i < women.length; i++) {
    women[i].style.display = "flex";
    if (window.innerWidth < 830) {
        women[i].style.display = "block";
    }
}
}

function displayMen() {
  for (let i = 0; i < women.length; i++) {
      women[i].style.display = "none";
  }

  for (let j = 0; j < men.length; j++) {
    men[j].style.display = "flex";
    if (window.innerWidth < 830) {
        men[j].style.display = "block";
    }
}
}

function displayAll() {
    for (let x = 0; x < gender.length; x++) {
        gender[x].style.display = "flex";
        if (window.innerWidth < 830) {
            gender[x].style.display = "block";
        }
    }
}
