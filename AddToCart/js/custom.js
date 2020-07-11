let counter = document.getElementById('counter');
let x = parseInt(counter.value);

function addValue() {
    if(x < 100) {
        x++;
        counter.value = x;
    } else {
        x = 100;
        counter.value = x;
    }
}

function minusValue() {
    if(x > 1) {
        x--;
        counter.value = x;
    } else {
        x = 1;
        counter.value = x;
    }
}

function toggleLike() {
    this.toggleClass('is-active');
}