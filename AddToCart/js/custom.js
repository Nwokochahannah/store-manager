//DISPLAY WOMEN, MEN AND KIDS WHEN BUTTON IS CLICKED
let men = [];
let women = [];
let kids = [];
let gender = Array.from(document.getElementsByClassName("item"));
console.log(gender);

for (let j = 0; j < document.getElementsByName("men").length; j++) {
  men.push(document.getElementsByName("men")[j]);
}

for (let i = 0; i < document.getElementsByName("women").length; i++) {
  women.push(document.getElementsByName("women")[i]);
}

for (let k = 0; k < document.getElementsByName("kids").length; k++) {
  kids.push(document.getElementsByName("kids")[k]);
}

function displayWomen() {
  for (let j = 0; j < men.length; j++) {
    men[j].style.display = "none";
  }

  for (let k = 0; k < kids.length; k++) {
    kids[k].style.display = "none";
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

  for (let k = 0; k < kids.length; k++) {
    kids[k].style.display = "none";
  }

  for (let j = 0; j < men.length; j++) {
    men[j].style.display = "flex";
    if (window.innerWidth < 830) {
      men[j].style.display = "block";
    }
  }
}

function displayKids() {
  for (let i = 0; i < women.length; i++) {
    women[i].style.display = "none";
  }

  for (let j = 0; j < men.length; j++) {
    men[j].style.display = "none";
  }

  for (let k = 0; k < kids.length; k++) {
    kids[k].style.display = "flex";
    if (window.innerWidth < 830) {
      kids[k].style.display = "block";
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
